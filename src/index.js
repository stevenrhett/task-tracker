import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import MainTaskPageB from "./MainTaskPageB";
import AboutUsPageB from "./AboutUsPageB";
import ContactUsPageC from "./ContactUsPageC";
import MeetTheTeam from "./MeetTheTeam";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <WelcomeComponent/>
            },
            {
                path: "/signup",
                element: <SignUpPage/>
            },
            {
                path: "/login",
                element: <LogInPage/>
            },
            {
                path: "/task",
                element: <MainTaskPageB/>
            },
            {
                path: "/about",
                element: <AboutUsPageB/>
            },
            {
                path: "/contact",
                element: <ContactUsPageC/>
            },
            {
                path: "/team",
                element: <MeetTheTeam/>
            },
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>

    </React.StrictMode>
);


