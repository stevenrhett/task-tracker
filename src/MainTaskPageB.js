import React, {useState} from 'react';
import TaskCardB from "./TaskCardB";
import NewTaskCard from "./NewTaskCard";

const MainTaskPageB = () => {
    const ALL_TASK_DATA_API_URL ="https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?select=*"
    const ALL_COMPLETED_API_URL = "https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?completed=eq.true&select=*"
    const IMPORTANT_TASKS_API_URL ="https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?important=eq.true&select=*"

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
        <div>
            <div className="flex flex-row text-orange-400 font-bold justify-center text-center">
                <p onClick={async () => {await getImportantTasks()}} className="mx-2">Important</p>
                <p onClick={async () => {await getCompletedTasks()}} className="mx-2">Completed Tasks</p>
                <p onClick={async () => {await getTaskData()}} className="mx-2">All Tasks</p>
                <p className="mx-2">Today's Tasks</p>
                <p className="mx-2">Upcoming Tasks</p>
            </div>
            <p className="font-bold text-white bg-teal-600 py-2 px-4 rounded-full hover:bg-teal-700 w-36 text-center flex justify-center mx-auto mt-7">Create Task</p>
            {allTaskData.map(task => <NewTaskCard key="id" {...task} />)}
        </div>
    );
};

export default MainTaskPageB;