import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './WhoSection.css';

class WhoSection extends Component {
    state = {   
        firstCard: "media notification has-background-accent-dark box-shadow is-invisible",
        secondCard: "media notification has-background-accent box-shadow is-invisible",
        thirdCard: "media notification has-background-accent-light box-shadow is-invisible"
    };

    componentDidMount() {
        setTimeout( () =>{
            this.setState({firstCard: "media notification has-background-accent-dark box-shadow animated fadeIn"});
            }, 200);
        setTimeout( () => {
            this.setState({secondCard: "media notification has-background-accent box-shadow animated fadeIn"});
            }, 400);
        setTimeout( () =>{
            this.setState({thirdCard: "media notification has-background-accent-light box-shadow animated fadeIn"});
            }, 600);
    }


    render() { 
        return ( 
            <div>
                <section className="section has-background-white-ter" id="who">
                    <Fade top>
                    <br/><h2 className="title is-2 is-size-3-mobile has-text-centered">Acerca de <strong className="has-text-primary">nosotros</strong></h2>
                    <p className="subtitle is-5 has-text-centered marginTop animated fadeIn">Te invitamos a conocer un poco más de lo que hacemos.</p>
                    </Fade>
                    <div className="container">
                        <div className="columns marginTop">
                            <div className="column">
                                <article className={this.state.firstCard}>
                                    <figure className="media-left">
                                        <span className="icon"><i className="fas fa-2x fa-user has-text-white"></i></span>
                                    </figure>
                                    <div className="media-content">
                                        <h3 className="title is-size-4 has-text-white">¿Quiénes somos?</h3>
                                        <p className="is-size-5 has-text-white">
                                        Somos distribuidores autorizados de Fraiche, empresa 100% mexicana dedicada a la venta de productos de belleza. La calidad es lo que nos caracteriza.
                                        </p>
                                    </div>
                                </article>  
                            </div>
                            <div className="column">
                                <article className={this.state.secondCard}>
                                    <figure className="media-left">
                                        <span className="icon is-medium"><i className="fas fa-2x fa-map has-text-white"></i></span>
                                    </figure>
                                    <div className="media-content">
                                        <h3 className="title is-size-4 has-text-white">Misión</h3>
                                        <p className="is-size-5 has-text-white">
                                        Ofrecerle a nuestros clientes un servicio de calidad basado en la honestidad y principios, 
                                        mejorando día a día, consolidándonos como los favoritos 
                                        en nuestro ramo.
                                        </p>
                                    </div>
                                </article>   
                            </div>
                            <div className="column">
                                <article className={this.state.thirdCard}>
                                    <figure className="media-left">
                                        <span className="icon is-medium"><i className="fas fa-2x fa-binoculars has-text-white"></i></span>
                                    </figure>
                                    <div className="media-content">
                                        <h3 className="title is-size-4 has-text-white">Visión</h3>
                                        <p className="is-size-5 has-text-white">
                                        Crecer día a día colocándonos en el primer sitio en ventas a nivel 
                                        nacional teniendo como objetivo principal la preferencia de las familias mexicanas
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
 
export default WhoSection;