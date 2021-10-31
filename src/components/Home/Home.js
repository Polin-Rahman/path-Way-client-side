import React from 'react';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Packages></Packages>
        </div>
    );
};

export default Home;