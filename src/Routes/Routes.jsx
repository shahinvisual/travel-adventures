import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../components/Home";
import UpdateProfile from "../components/UpdateProfile";
import Details from "../components/details";
import PrivateRoute from "../Private/PrivateRoute";
import LoginModal from "../components/LoginModal";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../travel.json')
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile />
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader: () => fetch('../travel.json')
            }
        ]
    },
    {
        path: '/loginModal',
        element: <LoginModal/>
    }
]);

export default router;