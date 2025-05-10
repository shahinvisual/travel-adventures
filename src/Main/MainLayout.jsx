import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Slide from '../components/Slide';

const MainLayout = () => {
    return (
        <div>
            <Slide/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;