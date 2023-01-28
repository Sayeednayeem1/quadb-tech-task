import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import PerDataDetails from "../components/DetailsData/PerDataDetails";
import Home from "../components/Home/Home";
import Main from "../layout/Main";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PerDataDetails></PerDataDetails>
            }
        ]
    }
])