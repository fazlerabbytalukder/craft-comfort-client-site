import React from 'react';
import Products from '../AllProducts/Products';
import Banner from '../Banner/Banner';
import ExclusiveOffer from '../ExclusiveOffer/ExclusiveOffer';
import Offer from '../Offer/Offer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExclusiveOffer></ExclusiveOffer>
            <Offer></Offer>
            <Products></Products>
        </div>
    );
};

export default Home;