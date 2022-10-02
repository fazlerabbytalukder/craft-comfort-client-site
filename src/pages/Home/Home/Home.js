import React from 'react';
import Products from '../AllProducts/Products';
import Banner from '../Banner/Banner';
import ExclusiveOffer from '../ExclusiveOffer/ExclusiveOffer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExclusiveOffer></ExclusiveOffer>
            <Products></Products>
        </div>
    );
};

export default Home;