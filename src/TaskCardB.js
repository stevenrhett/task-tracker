import React from 'react';

//The properties in this card will be determined by that pulled from the API, This is not meant to replace
//current work on the task card but to start getting some of the logic in place
const TaskCardB = ({title, description, privacy}) => {
    return (
        <div className="flex flex-col">
            <h1>{title}</h1>
            <div className="flex flex-row">
                <p>{privacy}</p>
                <div>
                    <p>{description}</p>
                </div>
                <input type="checkbox"/>
            </div>
        </div>
    );
};

export default TaskCardB;