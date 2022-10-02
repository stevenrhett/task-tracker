import React from 'react';
import TaskCardB from "./TaskCardB";

const DisplayAllTasks = () => {

    //This data needs to be be pulled from the api, this is just placeholder data
    const fakeData = [
        {title:"hello", description: "blahblahblahblahb",privacy:"public"},
        {title:"hello2", description: "blahblahblahblahb2",privacy:"private"},
        {title:"hello3", description: "blahblahblahblahb3",privacy:"public"},
    ]


    return (

        //This function goes through the fakeData array and for every task object it calls the task card
        //component. This works because in the task card component it has the same properties as the data
        //pulled from the array above.
        <div>
            {fakeData.map(task => <TaskCardB {...task} />)}
        </div>
    );
};

export default DisplayAllTasks;