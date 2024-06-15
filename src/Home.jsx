import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Sai from './Sai';
import Freeclass from './Freeclass';
import Leader from './Leader';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <br />
            <Sai></Sai>
            <br />
            <Leader></Leader>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;