import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (<div>

            <div
                className="flex flex-col md:flex-row justify-between items-center px-20 md:h-28 p-4 border-b-2 border-gray-300">
                <div className="font-bold text-teal-600 text-2xl"><NavLink to="/">ULTRA</NavLink><span
                    className="text-orange-400"><NavLink to="/">Task</NavLink></span></div>
                <div className="flex">


                    <ul className="menu-horizontal space-x-4">
                        <li><NavLink to="/task"
                                  className="font-bold text-teal-600 border-2 border-teal-600 py-2 px-4 rounded-full hover:text-teal-700 hover:border-teal-700">Tasks
                            </NavLink>
                        </li>
                        <li><NavLink to="/login"
                                  className="font-bold text-teal-600 border-2 border-teal-600 py-2 px-4 rounded-full hover:text-teal-700 hover:border-teal-700">Log
                            In</NavLink>
                        </li>
                        <li><NavLink to="/signup"
                                  className="font-bold text-white bg-teal-600 py-2 px-4 rounded-full hover:bg-teal-700">Sign
                            Up</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        );};
export default HeaderComponent;