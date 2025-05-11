import React from 'react';
import { Outlet } from 'react-router-dom';
import Slide from '../components/Slide';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Slide/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;