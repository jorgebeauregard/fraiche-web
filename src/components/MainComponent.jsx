import React, { Component } from 'react';
import HeroSection from './../sections/MainSections/HeroSection';
import WhoSection from './../sections/MainSections/WhoSection';
import ProductSection from './../sections/MainSections/ProductSection';
import BranchSection from './../sections/MainSections/BranchSection';
import FAQSection from './../sections/MainSections/FAQSection'
import ScentsSection from './../sections/MainSections/ScentsSection';

class MainComponent extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <HeroSection/>
                <WhoSection/>
                <BranchSection/>
                <ProductSection/>
                <FAQSection/> 
                <ScentsSection/> 
            </div>
        );
    }
}
 
export default MainComponent;