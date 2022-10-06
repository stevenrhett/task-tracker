import React from 'react';
import backgroundImage from './images/Sandy_Bus-27_Single-09.jpg';
import backgroundImageTwo from './images/Sandy_Tech-22_Single-09.jpg';

const WelcomeComponent = () => {
    return (<div>
            <div className="flex flex-col justify-center items-center pt-6 space-y-4">
                <div className="">
                    <h1 className="text-teal-600 font-bold text-4xl text-center">Organize your <br/> work and life,
                        finally.</h1>
                </div>

                <div className="text-center">
                    <h2>Become focused, organized, and calm with TaskTracker. The<br/> world’s #1 task manager and to-do
                        list app.</h2>
                </div>

                <div className="">
                    <button
                        className="font-normal text-2xl text-white bg-teal-600 py-2 px-4 rounded hover:bg-teal-700">Try
                        for free
                    </button>

                </div>
            </div>
            {/*svg image in thr background*/}
            <div className="flex p-4 h-fit">

                <div className="w-1/2"><img src={backgroundImage} alt=""/></div>
                <div className="w-1/2"><img src={backgroundImageTwo} alt=""/></div>

                <div className="w-1/2"><img src={backgroundImage} alt="alt"/></div>
                <div className="w-1/2"><img src={backgroundImageTwo} alt="alt"/></div>

            </div>

        </div>

    );
};

export default WelcomeComponent;
