import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import sinfondo from './../../images/sinfondo.png'


class BranchSection extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="section has-background-primary" id="branch">
                    <Fade top>
                        <br /><h2 className="title is-2 is-size-3-mobile has-text-centered has-text-white">Conoce nuestras distintas sucursales</h2>
                        <p className="subtitle is-5 has-text-centered marginTop animated fadeIn has-text-white">Da click en las direcciones para saber cómo llegar</p>
                    </Fade>
                </section>
                <section className="section has-background-white-ter">
                    <div className="container">
                        <div className="columns is-multiline">
                            <div className="column has-text-centered is-full">
                                <p className="title">Veracruz:</p>
                            </div>
                            <div className="column is-3 has-text-centered">
                                <a href="https://goo.gl/maps/psSpn2gEbUu"><p className="title has-text-primary is-4">2 de abril #367 <span className="icon"><i className="fas fa-directions has-text-primary"></i></span></p></a>
                                <p className="subtitle has-text-size-4">entre Tuero Molina y Orizaba</p>
                                <p className="is-size-5">Tel: (229) 937-84-04</p>
                                <p className="is-size-5">Cel: (229) 985-29-45</p>
                            </div>
                            <div className="column is-3 has-text-centered">
                                <a href="https://goo.gl/maps/Zb9BLc5P2112"><p className="title has-text-primary is-4">Cortés #498 <span className="icon"><i className="fas fa-directions has-text-primary"></i></span></p></a>
                                <p className="subtitle has-text-size-4">entre Guerrero y Allende</p>
                                <p className="is-size-5">Tel: (229) 284-72-80</p>
                            </div>
                            <div className="column is-3 has-text-centered">
                                <a href="https://goo.gl/maps/wQSvhB4A4ZCm3kJH9"><p className="title has-text-primary is-4">Alacio Pérez #533 <span className="icon"><i className="fas fa-directions has-text-primary"></i></span></p></a>
                                <p className="subtitle has-text-size-4">entre 1° de Mayo y Carranza</p>
                                <p className="is-size-5">Tel: (229) 931-07-35</p>

                            </div>

                            <div className="column is-3 has-text-centered">
                                <a href="https://goo.gl/maps/5GCsAzhKJhz"><p className="title has-text-primary is-4">Murillo #785 <span className="icon"><i className="fas fa-directions has-text-primary"></i></span></p></a>
                                <p className="subtitle has-text-size-4">entre Matamoros y Aldama</p>
                                <p className="is-size-5">Tel: (229) 165-07-55</p>

                            </div>
                        </div>
                        <div className="columns marginTop">
                            <div className="column is-half has-text-centered">
                                <p className="title has-text-black">Xalapa:</p>
                                <div className="columns">
                                    <div className="column">
                                        <a href="https://goo.gl/maps/ZMYNriFST4T2"><p className="title has-text-primary is-4">Clavijero #141<span className="icon"><i className="fas fa-directions has-text-primary"></i></span> </p></a>
                                        <p className="subtitle has-text-size-4">entre Ocampo y Jesús Díaz</p>
                                        <p className="is-size-5">Tel: (228) 815-15-77</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half has-text-centered">
                                <p className="title has-text-black">Cardel:</p>
                                <div className="columns">
                                    <div className="column">
                                        <a href="https://goo.gl/maps/i7GhaXvzTqz"><p className="title has-text-primary is-4">Emiliano Zapata S/N<span className="icon"><i className="fas fa-directions has-text-primary"></i></span></p></a>
                                        <p className="subtitle has-text-size-4">entre Ferrer Guardia y Las Vias</p>
                                        <p className="is-size-5">Tel: (296) 962-38-64</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section has-background-primary">
                    <div className="columns has-text-centered">
                        <div className="column">
                            <img src={sinfondo} className='smallImg'/>
                        </div>
                        <div className="column">
                            <br/>
                            <p className="has-text-centered title has-text-white is-4">Contamos con servicio a domicilio. <br/><br /> Llámanos a nuestras oficinas al <br/>(229) 985 29 45 </p>
                        </div>
                        <div className="column">
                            <img src={sinfondo} className='smallImg'/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BranchSection;