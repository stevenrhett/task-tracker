import React from 'react';

const NewLoginPage = () => {
    return (
        <div>
            <div className="flex flex-row bg-blue-200 justify-center">
                <p className="mx-2">one</p>
                <p className="mx-2">two</p>
                <p className="mx-2">three</p>
                <p className="mx-2">four</p>
                <p className="mx-2">five</p>
            </div>
            <div
                className="space-x-40  pl-2.5 pb-8 bg-gray-100 bg-opacity-40 border border-black border-opacity-50"
               >
                <p className="text-base font-semibold line-through text-black text-opacity-90">Frozen Veggies (Corn,
                    Peas, Broccoli,
                    etc)
                    <br/>Juice Concentrate
                    <br/>Pizza or Other Convenience Meals
                </p>
                <img className="w-6 h-6" src="https://via.placeholder.com/25x25" alt="alt"/>
                <img className="w-8 h-1/4" src="https://via.placeholder.com/32.727272033691406x20" alt="alt"/>
            </div>
            </div>

    );
};

export default NewLoginPage;