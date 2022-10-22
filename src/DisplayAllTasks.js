import React, {useState} from 'react';
import TaskCardB from "./TaskCardB";

const DisplayAllTasks = () => {
    const ALL_TASK_DATA_API_URL ="https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?select=*"
    const ALL_COMPLETED_API_URL = "https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?completed=eq.true&select=*"
    const IMPORTANT_TASKS_API_URL ="https://edimwgfgsphnlyquzwnq.supabase.co/rest/v1/TaskB?important=eq.true&select=*"

    const currentDate = Date()
    const [allTaskData, setAllTaskData] = useState([])


    const getTaskData = async () => {
        const response = await fetch(ALL_TASK_DATA_API_URL, {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ"
            },

        });
        const result = await response.json()
        setAllTaskData(result)
        console.log(result)
        //console.log(currentDate)
        return result


    }
    const getCompletedTasks = async () => {
        const response = await fetch(ALL_COMPLETED_API_URL, {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ"
            },

        });
        const result = await response.json()
        setAllTaskData(result)
        console.log(result)
        return result


    }
    const getImportantTasks = async () => {
        const response = await fetch(IMPORTANT_TASKS_API_URL, {
            method:"GET",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ"
            },

        });
        const result = await response.json()
        setAllTaskData(result)
        console.log(result)
        return result


    }




    //useEffect(() => {
    // console.log("change detected")
        //setAllTaskData()
   // },[allTaskData])

    return (

        //This function goes through the fakeData array and for every task object it calls the task card
        //component. This works because in the task card component it has the same properties as the data
        //pulled from the array above.
        <div>

            <p onClick={async () => {await getTaskData()}}>All tasks</p>
            <p onClick={async () => {await getCompletedTasks()}}>Completed Tasks</p>
            <p onClick={async () => {await getImportantTasks()}}>Important Tasks</p>

            {allTaskData.map(task => <TaskCardB key="id" {...task} />)}
        </div>
    );
};

export default DisplayAllTasks;