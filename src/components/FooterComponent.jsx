import React, { Component } from 'react';
import transparent_logo_small from '../images/transparent_logo_small.png';

class FooterComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <footer className="footer has-background-primary is-medium" id="contact">
                    <div className="container">
                        <div className="content">
                            <div className="columns">
                                <div className="column">
                                    <div className="columns is-multiline">
                                        <div className="column is-full">
                                            <img src={transparent_logo_small}/>
                                        </div>
                                        <div className="column is-full">
                                            <p className="has-text-white">Fraiche Veracruz &copy; 2018. 
                                            2 de abril #338 <br/> entre Tuero 
                                            Molina y Orizaba. Veracruz, <br/>
                                            Veracruz. C.P. 91910 <br/><br/>

                                            Tel: (229) 937-84-04 <br/>
                                            Cel: (229) 985-29-45</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    
                                </div>
                                <div className="column has-text-right-fullhd">
                                    <a href="https://www.facebook.com/Perfumes-Fraiche-Veracruz-130834194115/">
                                        <span className="icon is-large">
                                            <i className="fab fa-2x fa-facebook has-text-white"></i>
                                        </span>
                                    </a>
                                    <a href="mailto:clientes@fraicheveracruz.com.mx">
                                        <span className="icon is-large">
                                            <i className="fas fa-2x fa-envelope has-text-white"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
         );
    }
}
 
export default FooterComponent;