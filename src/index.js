import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import MainTaskPageB from "./MainTaskPageB";


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
                path: "/signuppage",
                element: <SignUpPage/>
            },
            {
                path: "/loginpage",
                element: <LogInPage/>
            },
            {
                path: "/maintaskpage",
                element: <MainTaskPageB/>
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


