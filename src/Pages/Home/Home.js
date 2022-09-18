import React from 'react';
import Blogs from './Blogs';
import Carousel from './Carousel';
import History from './History';

const Home = () => {
    return (
        <div>
            <Carousel />
            <History />
            <Blogs />
        </div>
    );
};

export default Home;