import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import scents from '../../images/scents.pdf';


class FAQSection extends Component {
    state = {}
    render() {
        return (
            <div>
                <section className="section has-background-white-ter has-text-centered" id="scents">
                    <div className='container'>
                        <Fade top>
                            <br /><h2 className="title is-2 is-size-3-mobile">Genealogía de <span className='has-text-primary'>aromas</span>.</h2>
                            <p className="subtitle is-5 has-text-centered marginTop animated fadeIn">Descarga nuestra lista de aromas actualizada.</p>
                            <a className='button is-primary is-medium' href={scents}>Descargar</a>
                        </Fade>
                    </div>
                </section>
            </div>
        );
    }
}

export default FAQSection;