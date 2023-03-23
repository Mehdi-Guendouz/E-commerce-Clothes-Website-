import React from 'react';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';
import Feature from '../../components/FeaturedProducts/Feature';
import Slider from '../../components/slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <Feature type={"Featured"} />
            <Categories />
            <Feature type={"Trending"} />
            <Contact />
        </div>
    );
}

export default Home;
