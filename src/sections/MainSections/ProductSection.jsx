import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import rollOn from '../../images/rollOn.jpg';
import softSkin from '../../images/softSkin.jpg';
import toyStory from '../../images/toyStory.png';
import coche from '../../images/coche.jpg';
import aromatizante from '../../images/aromatizante.jpg';
import bolsa from '../../images/bolsa.png';
import spraySecrets from '../../images/spraySecrets.jpg';
import perfumeros from '../../images/perfumeros.jpg';
import liliana from '../../images/liliana.jpg';


class ProductSection extends Component {
    state = {  
   
    }

    render() { 
        return ( 
            <div>
                <section className="section has-background-white-ter" id="products">
                    <br/>
                    <Fade top>
                    <h2 className="title is-2 is-size-3-mobile has-text-centered">Productos <strong className="has-text-primary">destacados</strong></h2>
                    <p className="subtitle is-5 has-text-centered marginTop">Siéntete bien con los mejores productos de esta temporada.</p>
                    </Fade>
                    
                    <div className="tile is-ancestor marginTop">
                        <div className="tile is-vertical is-7">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-softSkin box-shadow">
                                        <p className="title has-text-white">Bolsas ecológicas</p>
                                        <p className="subtitle has-text-white">Cuidemos juntos el planeta. Ve por la tuya a tu tienda favorita</p>
                                        <figure className="image is-1by1">
                                            <img src={bolsa}/>
                                        </figure>
                                    </article>
                                </div>

                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-liliana box-shadow">
                                        <p className="title has-text-white">Para mujeres</p>
                                        <p className="subtitle has-text-white">Para la mujer romántica que quiere destacar. Escoge tu aroma y disfruta.</p>
                                        <figure className="image is-1by1">
                                            <img src={liliana}/>
                                        </figure>
                                    </article>
                                </div>
                            </div>

                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-helloKitty box-shadow">
                                        <p className="title has-text-white is-size-4-fullhd">Soft Skin</p>
                                        <p className="subtitle has-text-white is-size-6-fullhd">Tu piel no volverá a ser la misma con nuestra nueva línea de cremas Soft Skin de Fraiche.</p>
                                        <figure className="image is-1by1">
                                            <img src={softSkin}/>
                                        </figure>
                                    </article>
                                </div>

                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-aromatizante box-shadow">
                                        <p className="title has-text-white is-size-4-fullhd">Aromatizante</p>
                                        <p className="subtitle has-text-white is-size-6-fullhd">Que tu aroma favorito sea el único que prevalezca en tus habitaciones.</p>
                                        <figure className="image is-1by1">
                                            <img src={aromatizante}/>
                                        </figure>
                                    </article>
                                </div>

                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-rollOn box-shadow">
                                        <p className="title has-text-white is-size-4-fullhd">Roll-on</p>
                                        <p className="subtitle has-text-white is-size-6-fullhd">¡Conoce nuestros desodorantes personalizables! ¿Cuál te llevará hoy a una aventura?</p>
                                        <figure className="image is-1by1">
                                            <img src={rollOn}/>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div className="tile is-vertical">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-spray box-shadow">
                                        <p className="title has-text-white is-4">Fraiche Secrets</p>
                                        <p className="subtitle has-text-white is-5">¡Disfruta de las vaciones y mantente fresca y relajada con Fraiche Secrets! Solo en Fraiche.</p>
                                        <figure className="image is-1by1">
                                            <img src={spraySecrets}/>
                                        </figure>
                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-axel box-shadow">
                                        <p className="title has-text-white is-4">Infantil</p>
                                        <p className="subtitle has-text-white is-5">El agua de colonia de Hello Kitty es una gran oportunidad de sorprender a las niñas.</p>
                                        <figure className="image is-1by1">
                                            <img src={toyStory}/>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-mango box-shadow">
                                        <p className="title has-text-white is-4">Perfumeros</p>
                                        <p className="subtitle has-text-white is-5">¿A qué parte llevarás tus perfumeros el día de hoy? Consíguelos únicamente en Fraiche.</p>
                                        <figure className="image is-1by1">
                                            <img src={perfumeros}/>
                                        </figure>
                                    </article>
                                </div>

                                <div className="tile is-parent">
                                    <article className="tile is-child notification has-background-coche box-shadow">
                                        <p className="title">Para el coche</p>
                                        <p className="subtitle">¡Haz que tu fragancia favorita te acompañe en tus viajes! Consíguelos solo en Fraiche.</p>
                                        <figure className="image is-1by1">
                                            <img src={coche}/>
                                        </figure>
                                    </article>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    

                </section>
            </div>
        );
    }
}
 
export default ProductSection;