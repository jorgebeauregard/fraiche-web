import React, { Component } from 'react';
import HeroSection from './../sections/MainSections/HeroSection';
import WhoSection from './../sections/MainSections/WhoSection';
import ProductSection from './../sections/MainSections/ProductSection';
import BranchSection from './../sections/MainSections/BranchSection';
import FAQSection from './../sections/MainSections/FAQSection'
import ScentsSection from './../sections/MainSections/ScentsSection';
import domicilio from './../images/domicilio.png'
import Fade from 'react-reveal/Fade';


class MainComponent extends Component {
    state = {
        modalIsActive: true
    }

    renderIsActive() {
        return this.state.modalIsActive ? "modal is-active" : "modal";
    }

    toggleIsActive = () => {
        this.setState({modalIsActive: false});
    }

    render() {
        console.log(this.state.modalIsActive);
        return (
            <div>
                <Fade>
                <div className={this.renderIsActive()}>
                    <div className="modal-background" onClick={this.toggleIsActive}></div>
                    <div className="modal-card">
                        <section className="modal-card-body has-text-centered no-side-padding">
                            <p className="title is-3">¡Contamos con <b className="has-text-primary">servicio a domicilio</b>!</p>
                            <p className="subtitle is-4 has-text-weight-bold">Llámanos a nuestras oficinas al (229) 985 29 45</p>
                            <img src={domicilio}></img>
                            <a className="button is-primary" onClick={this.toggleIsActive}>Cerrar</a>
                        </section>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={this.toggleIsActive}></button>
                </div>
                </Fade>
                <HeroSection />
                <WhoSection />
                <BranchSection />
                <ProductSection />
                <FAQSection />
                <ScentsSection />
            </div>
        );
    }
}

export default MainComponent;