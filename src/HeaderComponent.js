import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>

            <div className="flex justify-between p-4 border-b-2 border-gray-300">
                <div className="font-bold text-teal-600 text-2xl"><Link to="/">ULTRA<span className="text-orange-400">Task</span></Link></div>
                <div className="flex">

                    <ul className="menu-horizontal space-x-4">
                        <li><Link to="/loginpage" className="font-bold text-teal-600 border-2 border-teal-600 py-2 px-4 rounded-full hover:text-teal-700 hover:border-teal-700">Log In</Link>
                        </li>
                        <li><Link to="/signuppage" className="font-bold text-white bg-teal-600 py-2 px-4 rounded-full hover:bg-teal-700">Sign Up</Link></li>

            <div
                className="flex flex-col md:flex-row justify-between items-center px-20 md:h-28 justify-between p-4 border-b-2 border-gray-300">
                <div className="font-bold text-teal-600 text-2xl">ULTRA<span className="text-orange-400">Task</span>
                </div>
                <div className="flex">

                    <ul className="menu-horizontal space-x-4">
                        <li className="font-bold text-teal-600 border-2 border-teal-600 py-2 px-4 rounded-full hover:text-teal-700 hover:border-teal-700">
                            <a href="#">Log in</a>
                        </li>
                        <li className="font-bold text-white bg-teal-600 py-2 px-4 rounded-full hover:bg-teal-700"><a
                            href="#">Sign up</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;