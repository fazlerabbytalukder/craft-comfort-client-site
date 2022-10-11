import React from 'react';
import Products from '../AllProducts/Products';
import Banner from '../Banner/Banner';
import ExclusiveOffer from '../ExclusiveOffer/ExclusiveOffer';
import Offer from '../Offer/Offer';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import NawArrivals from '../NewArrivals/NawArrivals';
import OfferBanner from '../OfferBanner/OfferBanner';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ExclusiveOffer></ExclusiveOffer>
            <Offer></Offer>
            <Products></Products>
            <OfferBanner></OfferBanner>
            <NawArrivals></NawArrivals>
            <Footer></Footer>
        </div>
    );
};

export default Home;