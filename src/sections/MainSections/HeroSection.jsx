import React, { Component } from 'react';
import paloma_transparente from '../../images/paloma_transparente.png';


const image = {
    width: "50px",
    height: "auto"
}

class HeroSection extends Component {
    state = {
        
    };

    render() {
        return (
            <div>
                <section className="hero is-primary is-small">
                    <div className="hero-head">
                    </div>

                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <img src={paloma_transparente} className={image}/>
                            <h1 className="title is-1 is-size-3-mobile">Perfumes Fraiche Veracruz</h1>
                            <p className="subtitle is-4">Distribuidor Autorizado</p>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}
         
export default HeroSection;