import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class FAQSection extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="section has-background-primary" id="faq">
                    <div className='container'>
                        <Fade top>
                            <br /><h2 className="title is-2 is-size-3-mobile has-text-centered has-text-white">Preguntas frecuentes</h2>
                            <p className="subtitle is-5 has-text-centered marginTop animated fadeIn has-text-white">Nuestro equipo está dispuesto a ayudarte.</p>
                        </Fade>
                        <div className='columns is-multiline marginTop'>
                            <div className='column is-half'>
                                <article className='media notification has-background-success box-shadow'>
                                    <figure className='media-left'>

                                    </figure>
                                    <div className='media-content'>
                                        <h3 className='title is-size-4 has-text-white'>
                                            ¿Cómo puedo ser distribuidor?
                                        </h3>
                                        <p className='is-size-5 has-text-white'>
                                        Convertirse en distribuidor es muy fácil, solo tienes que hacer una inversión mínima de $300. ¡Hazte distribuidor y goza de los beneficios, promociones y mucho más!
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className='column is-half'>
                                <article className='media notification has-background-info box-shadow'>
                                    <figure className='media-left'>

                                    </figure>
                                    <div className='media-content'>
                                        <h3 className='title is-size-4 has-text-white'>
                                            ¿Dónde puedo utilizar mi clave?
                                        </h3>
                                        <p className='is-size-5 has-text-white'>
                                            En cualquiera de nuestras cuatro sucursales en Veracruz y Xalapa. (Consulta nuestras direcciones y horarios dando click <a href="#branch">aquí</a>)
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className='column is-half'>
                                <article className='media notification has-background-danger box-shadow'>
                                    <figure className='media-left'>

                                    </figure>
                                    <div className='media-content'>
                                        <h3 className='title is-size-4 has-text-white'>
                                            ¿Cuál es la vigencia de mi clave?                                        
                                        </h3>
                                        <p className='is-size-5 has-text-white'>
                                            Tu clave tiene vigencia de 2 meses (el mes que compraste y el siguiente). Si tu clave es dada de baja, actívala nuevamente con la compra mínima.
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className='column is-half'>
                                <article className='media notification has-background-accent box-shadow'>
                                    <figure className='media-left'>

                                    </figure>
                                    <div className='media-content'>
                                        <h3 className='title is-size-4 has-text-white'>
                                            ¿Cuál es la diferencia entre distribuidor autorizado y franquicia?
                                        </h3>
                                        <p className='is-size-5 has-text-white'>
                                            En las franquicias se elabora el perfume en mostrador y con nosotros obtienes el producto listo y directo de fábrica.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default FAQSection;