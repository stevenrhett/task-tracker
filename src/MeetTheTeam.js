import React from 'react';

const MeetTheTeam = () => {
    return (<div>
        <div className="divider lg:divider-horizontal font-bold">Didier</div>
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-orange-400 rounded-box place-items-center">
                <div className="avatar">
                    <div className="w-24 rounded mx-4">
                        <img src="https://placeimg.com/192/192/people" alt="alt"/>
                    </div>
                </div>
            </div>
            {/*...*/}
            <div className="divider lg:divider-horizontal font-bold">Steve</div>
            <div className="grid flex-grow h-32 card bg-teal-500 rounded-box place-items-center">
                <div className="avatar">
                    <div className="w-24 rounded mx-4">
                        <img src="https://placeimg.com/192/192/people" alt="alt"/>
                    </div>
                </div>
            </div>
        </div>
        {/*...*/}
        <div className="divider lg:divider-horizontal font-bold">Davola</div>
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-orange-400 rounded-box place-items-center">
                <div className="avatar">
                    <div className="w-24 rounded mx-4">
                        <img src="https://placeimg.com/192/192/people" alt="alt"/>
                    </div>
                </div>
            </div>
            {/*...*/}
            <div className="divider lg:divider-horizontal font-bold">Justin</div>
            <div className="grid flex-grow h-32 card bg-teal-500 rounded-box place-items-center">
                <div className="avatar">
                    <div className="w-24 rounded mx-4">
                        <img src="https://placeimg.com/192/192/people" alt="alt"/>
                    </div>
                </div>
            </div>
        </div>


    </div>);
};

export default MeetTheTeam;


