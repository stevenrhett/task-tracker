import React from 'react';

//The properties in this card will be determined by that pulled from the API, This is not meant to replace
//current work on the task card but to start getting some of the logic in place
const TaskCardB = ({title, description, privacy}) => {
    return (
        <div>
            <h1 className="justify-center flex mr-96">{title}</h1>
            <div className="flex items-center justify-center">
                <p>{privacy}</p>
                <div className="flex border w-1/3 h-24 bg-gray-100">

                    <div>
                        <p>{description}</p>
                    </div>
                </div>
                <input type="checkbox"/>
            </div>

        </div>
    );
};

export default TaskCardB;