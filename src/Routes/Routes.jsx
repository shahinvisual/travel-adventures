import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main/MainLayout";
import Home from "../components/Home";
import UpdateProfile from "../components/UpdateProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile/>
            }
        ]
    }
]);

export default router;