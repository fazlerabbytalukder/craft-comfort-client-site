import React from 'react';
import Products from '../AllProducts/Products';
import Banner from '../Banner/Banner';
import ExclusiveOffer from '../ExclusiveOffer/ExclusiveOffer';
import Offer from '../Offer/Offer';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ExclusiveOffer></ExclusiveOffer>
            <Offer></Offer>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;