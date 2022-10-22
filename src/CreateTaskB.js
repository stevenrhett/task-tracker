import React from 'react';
import {useState} from "react";

const CreateTaskB = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [privacy, setPrivacy] = useState('public');
    //const [completed, setCompleted] = useState('false');
    const [created_date, setDate] = useState(new Date());
    const [important, setImportant] = useState("false")
    const dateNow = Date()
    const ALL_TASK_DATA_API_URL ="https://edimwgfgsphnlyquzwnq.supabase.co/rest/v1/TaskB"

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handlePrivacy = (event) => {
        if (event.target.value === "on") {
            setPrivacy("private")
        }

        if (privacy === "private"){
            setPrivacy("public")
        }


        //setPrivacy(event.target.value)
        //console.log(privacy)
    }
    const handleImportant = (event) => {
        if (event.target.value === "on") {
            setImportant("true")
        }

        if (important === "true"){
            setPrivacy("false")
        }



    }

    const addNewTask = async () => {

        const newTask = [{title: title, description: description, privacy:privacy, important:important, created_at: "10/6/2022", completed:"false", user_id:2}]

        const response = await fetch(ALL_TASK_DATA_API_URL, {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",

            },
            body: JSON.stringify(newTask)


        });
        //const result = await response.json()
        //setAllTaskData(result)
        //console.log(result)
        //return result


    }


    return (
        <div>
            <div>
                <input onChange={handleTitle} type="text" placeholder="Title"/>
                <input onChange={handleDescription} type="text" placeholder="Description"/>
                <input onClick={handlePrivacy} type="checkbox"/>
                <input onClick={handleImportant} type="checkbox"/>
                <button onClick={async () => {await addNewTask()}}>ADD TASK</button>

            </div>
        </div>
    );
};

export default CreateTaskB;