import React from 'react';

import PageRoot from '../../components/PageRoot';
import Slider from '../../components/Slider';

import imgBG from '../../assets/images/objects.svg'
import './styles.css'


function HomePage() {   
    return (
        <PageRoot>
            <Slider />
            <div className="img-background">
                <img src={imgBG} alt="Nossa formula" />
            </div>
        </PageRoot>
    );
};


export default HomePage;