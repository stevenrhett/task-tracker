import React from 'react';

const NewTaskCard = ({title, description, privacy,id,created_at, completed, important}) => {


    const deleteTask = async () => {



        const response = await fetch(`https://edimwgfgsphnlyquzwnq.supabase.co/rest/v1/TaskB?id=eq.${id}`, {
            method:"DELETE",
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ5MjM4MTIsImV4cCI6MTk4MDQ5OTgxMn0.t8ayO5c6H2X0cZgeNkzbwtMzAkbs1xFlJeuumCboIlQ",

            },



        });



    }

    const completeTask = async () => {



        const response = await fetch(`https://hbrqywvuotrufdzvyden.supabase.co/rest/v1/TaskB?id=eq.${id}`, {
            method:"PATCH",
            body: JSON.stringify({completed:true}),
            //data: ({completed:true}),
            headers: {
                "Content-Type":"application/json",
                apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NDkyMzgxMiwiZXhwIjoxOTgwNDk5ODEyfQ.LmhHeYH22nGxE0XYkt5fP6KBk2MjK-RfSBHPW44Dtuc",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhicnF5d3Z1b3RydWZkenZ5ZGVuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NDkyMzgxMiwiZXhwIjoxOTgwNDk5ODEyfQ.LmhHeYH22nGxE0XYkt5fP6KBk2MjK-RfSBHPW44Dtuc",
                Prefer: "return=representation",

            },


        });
        const newResponse = await response.json()
        //console.log(id)
        console.log(response)
        console.log(newResponse)
    }





    return (

        <div className="flex justify-center">



            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-teal-600 font-bold mx-20">{privacy} task</span>

                </label>
                <div className={ completed ? "border-2 w-96 h-24 mx-20 border-teal-600" : "border-2 w-96 h-24 mx-20"}>
                    <p>{title}</p>
                    <p>{description}</p>
                    <div className="flex justify-between">
                    <p>{created_at}</p>
                        <p className={important ? "visible text-orange-600": "invisible"}>IMPORTANT</p>
                    </div>
                </div>


                <div className="form-control">


                    <label htmlFor="my-modal-3" className="btn modal-button bg-teal-600 w-96 mx-auto mt-3" onClick={async () => {await completeTask()}}>Mark as Complete</label>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                            <h3 className="text-lg font-bold text-center ">TASK MARKED AS COMPLETE</h3>
                            <p className="py-4 text-center">To see changes, please refresh the page or click on any of the filter buttons at the top</p>
                        </div>
                    </div>
                    <label htmlFor="my-modal-4" className="btn modal-button mt-3 w-96 mx-auto" onClick={async () => {await deleteTask()}}>Delete Task</label>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold text-center">TASK BEEN DELETED</h3>
                            <p className="py-4 text-center">To see changes, please refresh the page or click on any of the filter buttons at the top</p>
                        </div>
                    </div>
                </div>




            </div>
        </div>);
};

export default NewTaskCard;