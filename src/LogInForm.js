import React from 'react';
import {Link} from "react-router-dom";

const LogInForm = () => {
    return (
        <div className="flex md:flex-row mx-auto w-1/5 mt-10">
            <form className="flex flex-col space-y-4">

                <div className="flex border border-black rounded-full p-3 shadow-lg cursor-pointer">
                    <svg width="45" height="24" viewBox="0 0 45 33" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <g clipPath="url(#clip0_122_24)">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M22.4999 6.38C26.7249 6.38 29.5749 7.71833 31.1999 8.83667L37.5499 4.29C33.6499 1.63167 28.5749 0 22.4999 0C13.6999 0 6.0999 3.70333 2.3999 9.09333L9.6749 13.2367C11.4999 9.25833 16.5499 6.38 22.4999 6.38Z"
                                  fill="#EA4335"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M44.1 16.8667C44.1 15.51 43.95 14.52 43.625 13.4933H22.5V19.6167H34.9C34.65 21.1383 33.3 23.43 30.3 24.97L37.4 29.0033C41.65 26.125 44.1 21.89 44.1 16.8667Z"
                                  fill="#4285F4"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M9.7 19.7633C9.225 18.7367 8.95 17.6367 8.95 16.5C8.95 15.3633 9.225 14.2633 9.675 13.2367L2.4 9.09332C0.875 11.33 0 13.8417 0 16.5C0 19.1583 0.875 21.67 2.4 23.9067L9.7 19.7633Z"
                                  fill="#FBBC05"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M22.4998 33C28.5748 33 33.6748 31.5333 37.3998 29.0033L30.2998 24.97C28.3998 25.9417 25.8498 26.62 22.4998 26.62C16.5498 26.62 11.4998 23.7417 9.6998 19.7633L2.4248 23.9067C6.1248 29.2967 13.6998 33 22.4998 33Z"
                                  fill="#34A853"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_122_24">
                                <rect width="45" height="33" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                        <p className="ml-4 text-xl font-bold">Continue with Google</p>
                </div>
                <div className="flex border border-black rounded-full p-3 shadow-lg cursor-pointer">
                    <svg width="47" height="24" viewBox="0 0 47 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M25.4303 15.1432V15.0965C25.4166 15.1122 25.3976 15.1279 25.3857 15.1432H25.4303Z"
                              fill="#3B82F6"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0.61377 0.603119V32.9791H46.4403V0.603119H0.61377ZM14.8675 27.5002H8.06848V13.0487H14.8675V27.5002ZM11.468 11.0763H11.4231C9.14234 11.0763 7.664 9.96618 7.664 8.57864C7.664 7.16064 9.18554 6.08199 11.5125 6.08199C13.84 6.08199 15.2703 7.16064 15.3148 8.57864C15.3148 9.96618 13.84 11.0763 11.468 11.0763ZM39.3901 27.5002H32.5892V19.7686C32.5892 17.8267 31.6066 16.5011 29.1452 16.5011C27.2654 16.5011 26.1483 17.3937 25.6562 18.2582C25.4773 18.567 25.4306 18.9963 25.4306 19.4294V27.5003H18.6284C18.6284 27.5003 18.7196 14.4045 18.6284 13.0488H25.4306V15.0966C26.3343 14.1142 27.9471 12.7095 31.5599 12.7095C36.0355 12.7095 39.3901 14.7745 39.3901 19.213V27.5002Z"
                              fill="#3B82F6"/>

                    </svg>
                    <p className="hidden lg:block flex-1 ml-4 text-md font-bold">Continue with Google</p>
                </div>


                <div className="flex-1 border border-black rounded-full p-3 shadow-lg cursor-pointer">

                    <svg className="" width="47" height="24" viewBox="0 0 47 33" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M25.4303 15.1432V15.0965C25.4166 15.1122 25.3976 15.1279 25.3857 15.1432H25.4303Z"
                              fill="#3B82F6"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0.61377 0.603119V32.9791H46.4403V0.603119H0.61377ZM14.8675 27.5002H8.06848V13.0487H14.8675V27.5002ZM11.468 11.0763H11.4231C9.14234 11.0763 7.664 9.96618 7.664 8.57864C7.664 7.16064 9.18554 6.08199 11.5125 6.08199C13.84 6.08199 15.2703 7.16064 15.3148 8.57864C15.3148 9.96618 13.84 11.0763 11.468 11.0763ZM39.3901 27.5002H32.5892V19.7686C32.5892 17.8267 31.6066 16.5011 29.1452 16.5011C27.2654 16.5011 26.1483 17.3937 25.6562 18.2582C25.4773 18.567 25.4306 18.9963 25.4306 19.4294V27.5003H18.6284C18.6284 27.5003 18.7196 14.4045 18.6284 13.0488H25.4306V15.0966C26.3343 14.1142 27.9471 12.7095 31.5599 12.7095C36.0355 12.7095 39.3901 14.7745 39.3901 19.213V27.5002Z"
                              fill="#3B82F6"/>
                    </svg>
                    <p className="hidden lg:block ml-4 text-md font-bold flex-1">Continue with Linkedin</p>
                </div>
                {/* This can be removed, just left it here for reference.
                <button className="btn btn-circle btn-outline w-full">Continue with Google</button>
                <button className="btn btn-circle btn-outline w-full">Continue with Linkedin</button>
                */}
                <hr/>
                <input className="border rounded-full border-black pl-3 p-3" type="email" placeholder="Email"/>
                <input className="border rounded-full border-black pl-3 p-3" type="password" placeholder="Password"/>
                <button className="btn-md text-white text-lg font-bold bg-[#2A9D8F] rounded-full border-0">Log in
                </button>
                <p className="text-xs text-center">Don't have an account?<Link to="/signuppage"><u
                    className="text-orange-500 underline pl-1 cursor-pointer">Sign up</u></Link></p>
                <hr/>

            </form>
        </div>
);
};

export default LogInForm;