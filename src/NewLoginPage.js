import React from 'react';

const NewLoginPage = () => {

    return (

        <div>

            <div className="flex flex-row bg-blue-200 font-bold justify-center">
                <p className="mx-2">one</p>
                <p className="mx-2">two</p>
                <p className="mx-2">three</p>
                <p className="mx-2">four</p>
                <p className="mx-2">five</p>
            </div>
            <div className="form-control">
                <label className="flex flex-col text-xl font-bold mt-10 mx-2 px-2 text-teal-600">Public List
                    <input type="text" placeholder="Start typing your public task here......."
                        className="input-bordered border border-black input w-full h-40 max-w-lg"/>
                    <button onClick={() => ({})} className="x-button">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="40px" height="40px"><path fill="#4b4dff" d="M64,83H26V29h44v48C70,80.314,67.314,83,64,83z"/><path fill="#4343bf" d="M61,30H35v-7c0-5.514,4.486-10,10-10h6c5.514,0,10,4.486,10,10V30z M41,24h14v-1 c0-2.206-1.794-4-4-4h-6c-2.206,0-4,1.794-4,4V24z"/><path fill="#4343bf" d="M73,86H23V26h50V86z M29,80h38V32H29V80z"/><polygon fill="#3abcf8" points="77,90 29,90 29,80 67,80 67,31 77,31"/><rect width="66" height="10" x="17" y="24" fill="#ff8405"/><polygon fill="#edf7f5" points="60.295,63.477 51.587,56.075 59.295,49.523 56.705,46.477 48.5,53.451 40.295,46.477 37.705,49.523 45.413,56.075 36.705,63.477 39.295,66.523 48.5,58.699 57.705,66.523"/></svg>
                    </button>
                </label>
            </div>

            <div className="form-control">
                <label className="flex flex-col text-xl font-bold mt-10 mx-2 px-2 text-teal-600">Public List
                    <button onClick={() => ({})} className="x-button">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="40px" height="40px"><path fill="#4b4dff" d="M64,83H26V29h44v48C70,80.314,67.314,83,64,83z"/><path fill="#4343bf" d="M61,30H35v-7c0-5.514,4.486-10,10-10h6c5.514,0,10,4.486,10,10V30z M41,24h14v-1 c0-2.206-1.794-4-4-4h-6c-2.206,0-4,1.794-4,4V24z"/><path fill="#4343bf" d="M73,86H23V26h50V86z M29,80h38V32H29V80z"/><polygon fill="#3abcf8" points="77,90 29,90 29,80 67,80 67,31 77,31"/><rect width="66" height="10" x="17" y="24" fill="#ff8405"/><polygon fill="#edf7f5" points="60.295,63.477 51.587,56.075 59.295,49.523 56.705,46.477 48.5,53.451 40.295,46.477 37.705,49.523 45.413,56.075 36.705,63.477 39.295,66.523 48.5,58.699 57.705,66.523"/></svg>
                    </button>
                    <input type="text" placeholder="Start typing your public task here......."
                           className="input-lg text-orange-400 border border-black w-full h-40 max-w-lg"/>
                </label>
            </div>


        </div>

    );
};

export default NewLoginPage;