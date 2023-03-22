import React from 'react';
import Feature from '../../components/FeaturedProducts/Feature';
import Slider from '../../components/slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <Feature type={"Featured"} />
        </div>
    );
}

export default Home;
