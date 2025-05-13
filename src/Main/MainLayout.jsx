import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Slide from '../components/Slide';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <Toaster/>
            <Slide/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;