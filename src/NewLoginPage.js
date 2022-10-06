import React from 'react';

const NewLoginPage = () => {

    return (

        <div>

            <div className="flex flex-row text-orange-400 font-bold justify-center text-center">
                <p className="mx-2">Important</p>
                <p className="mx-2">Complete Tasks</p>
                <p className="mx-2">All Tasks</p>
                <p className="mx-2">Today's Tasks</p>
                <p className="mx-2">Upcoming Tasks</p>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl text-teal-600 font-bold mx-20">Public Task</span>

                </label>
                <textarea className="textarea textarea-bordered w-1/2 h-24 mx-20"
                          placeholder="Start typing your public task here"></textarea>


                <div className="form-control">

                    <div className="flex flex-row">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="checkbox" checked="checked" className="checkbox"/>
                            </label>
                        </div>
                        <button className="mx-12 mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="30px" height="30px">
                                <path fill="" d="M64,83H26V29h44v48C70,80.314,67.314,83,64,83z"/>
                                <path fill=""
                                      d="M61,30H35v-7c0-5.514,4.486-10,10-10h6c5.514,0,10,4.486,10,10V30z M41,24h14v-1 c0-2.206-1.794-4-4-4h-6c-2.206,0-4,1.794-4,4V24z"/>
                                <path fill="" d="M73,86H23V26h50V86z M29,80h38V32H29V80z"/>
                                <polygon fill="" points="77,90 29,90 29,80 67,80 67,31 77,31"/>
                                <rect width="66" height="10" x="17" y="24" fill="#ff8405"/>
                                <polygon fill=""
                                         points="60.295,63.477 51.587,56.075 59.295,49.523 56.705,46.477 48.5,53.451 40.295,46.477 37.705,49.523 45.413,56.075 36.705,63.477 39.295,66.523 48.5,58.699 57.705,66.523"/>
                            </svg>
                        </button>
                        <img className="w-8 h-8 mt-4 -mx-6" alt="svgImg"
                             src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDM1LjY4NzUgMiBDIDM1LjQ2MDkzOCAyLjAzMTI1IDM1LjI1IDIuMTQ0NTMxIDM1LjA5Mzc1IDIuMzEyNSBMIDkuMDkzNzUgMjguMjgxMjUgQyA4Ljk5NjA5NCAyOC4zOTA2MjUgOC45MTc5NjkgMjguNTE1NjI1IDguODc1IDI4LjY1NjI1IEwgMi4wNjI1IDQ2LjY1NjI1IEMgMS45Mjk2ODggNDcuMDE5NTMxIDIuMDE5NTMxIDQ3LjQyOTY4OCAyLjI5Njg3NSA0Ny43MDMxMjUgQyAyLjU3MDMxMyA0Ny45ODA0NjkgMi45ODA0NjkgNDguMDcwMzEzIDMuMzQzNzUgNDcuOTM3NSBMIDIxLjM0Mzc1IDQxLjEyNSBDIDIxLjQ4NDM3NSA0MS4wODIwMzEgMjEuNjA5Mzc1IDQxLjAwMzkwNiAyMS43MTg3NSA0MC45MDYyNSBMIDIzIDM5LjYyNSBDIDIzLjIzODI4MSAzOS41MjM0MzggMjMuNDI5Njg4IDM5LjMzMjAzMSAyMy41MzEyNSAzOS4wOTM3NSBMIDQ3LjY4NzUgMTQuOTA2MjUgQyA0Ny45ODQzNzUgMTQuNjY0MDYzIDQ4LjEyMTA5NCAxNC4yNzczNDQgNDguMDM1MTU2IDEzLjkwMjM0NCBDIDQ3Ljk0OTIxOSAxMy41MzEyNSA0Ny42NTYyNSAxMy4yMzgyODEgNDcuMjg1MTU2IDEzLjE1MjM0NCBDIDQ2LjkxMDE1NiAxMy4wNjY0MDYgNDYuNTIzNDM4IDEzLjIwMzEyNSA0Ni4yODEyNSAxMy41IEwgMjIuMzQzNzUgMzcuNDA2MjUgQyAyMS42MjUgMzcuMDc0MjE5IDIwLjUyNzM0NCAzNi43MDMxMjUgMTkuMTI1IDM2Ljc1IEMgMTkuMjg5MDYzIDM2LjMwNDY4OCAxOS41MzUxNTYgMzYuMDM5MDYzIDE5LjYyNSAzNS41IEMgMTkuODQzNzUgMzQuMTk5MjE5IDE5LjcyNjU2MyAzMi42MDE1NjMgMTguNTYyNSAzMS40Mzc1IEMgMTcuMzk0NTMxIDMwLjI2OTUzMSAxNS43ODUxNTYgMzAuMTYwMTU2IDE0LjQ2ODc1IDMwLjQwNjI1IEMgMTQuMDAzOTA2IDMwLjQ5MjE4OCAxMy43NzczNDQgMzAuNzMwNDY5IDEzLjM3NSAzMC44NzUgQyAxMy4zOTA2MjUgMzAuNzM0Mzc1IDEzLjQzMzU5NCAzMC43MTA5MzggMTMuNDM3NSAzMC41NjI1IEMgMTMuNDYwOTM4IDI5LjY5NTMxMyAxMy4yNTc4MTMgMjguNjIxMDk0IDEyLjU5Mzc1IDI3LjY1NjI1IEwgMzYuNSAzLjcxODc1IEMgMzYuNzk2ODc1IDMuNDMzNTk0IDM2Ljg4NjcxOSAyLjk5MjE4OCAzNi43MjY1NjMgMi42MTMyODEgQyAzNi41NzAzMTMgMi4yMzQzNzUgMzYuMTkxNDA2IDEuOTkyMTg4IDM1Ljc4MTI1IDIgQyAzNS43NSAyIDM1LjcxODc1IDIgMzUuNjg3NSAyIFogTSAxMS4wOTM3NSAyOS4xNTYyNSBDIDExLjM0Mzc1IDI5LjYxMzI4MSAxMS40NDkyMTkgMzAuMDU4NTk0IDExLjQzNzUgMzAuNSBDIDExLjQyMTg3NSAzMS4xNzk2ODggMTEuMjAzMTI1IDMxLjc2NTYyNSAxMS4wNjI1IDMyLjE1NjI1IEMgMTAuOTEwMTU2IDMyLjU3ODEyNSAxMS4wNTQ2ODggMzMuMDQ2ODc1IDExLjQxNzk2OSAzMy4zMDg1OTQgQyAxMS43ODEyNSAzMy41NzAzMTMgMTIuMjczNDM4IDMzLjU1ODU5NCAxMi42MjUgMzMuMjgxMjUgQyAxMi45MTAxNTYgMzMuMDU4NTk0IDEzLjg2MzI4MSAzMi41NTA3ODEgMTQuODEyNSAzMi4zNzUgQyAxNS43NjE3MTkgMzIuMTk5MjE5IDE2LjYwNTQ2OSAzMi4yOTI5NjkgMTcuMTU2MjUgMzIuODQzNzUgQyAxNy43MTA5MzggMzMuMzk4NDM4IDE3LjgxNjQwNiAzNC4yNDYwOTQgMTcuNjU2MjUgMzUuMTg3NSBDIDE3LjQ5NjA5NCAzNi4xMjg5MDYgMTcuMDAzOTA2IDM3LjA4MjAzMSAxNi44MTI1IDM3LjM0Mzc1IEMgMTYuNTM1MTU2IDM3LjY5NTMxMyAxNi41MjM0MzggMzguMTg3NSAxNi43ODUxNTYgMzguNTUwNzgxIEMgMTcuMDQ2ODc1IDM4LjkxNDA2MyAxNy41MTU2MjUgMzkuMDU4NTk0IDE3LjkzNzUgMzguOTA2MjUgQyAxOS4yMDcwMzEgMzguNTE5NTMxIDIwLjE5NTMxMyAzOC42NTYyNSAyMC44NzUgMzguODc1IEwgMjAuNDA2MjUgMzkuMzQzNzUgTCA5LjM3NSA0My41MzEyNSBMIDYuNSA0MC42MjUgTCAxMC42NTYyNSAyOS41OTM3NSBaIj48L3BhdGg+PC9zdmc+"/>
                    </div>
                </div>
                <label className="label">
                    <span className="label-text text-xl text-teal-600 font-bold mx-20">Public Task</span>

                </label>
                <textarea className="textarea textarea-bordered h-24 w-1/2 mx-20"
                          placeholder="Start typing your public task here"></textarea>


                <div className="flex flex-row">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" checked="checked" className="checkbox"/>
                        </label>
                    </div>
                    <button className="mx-12 mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="35px" height="35px">
                            <path fill="" d="M64,83H26V29h44v48C70,80.314,67.314,83,64,83z"/>
                            <path fill=""
                                  d="M61,30H35v-7c0-5.514,4.486-10,10-10h6c5.514,0,10,4.486,10,10V30z M41,24h14v-1 c0-2.206-1.794-4-4-4h-6c-2.206,0-4,1.794-4,4V24z"/>
                            <path fill="" d="M73,86H23V26h50V86z M29,80h38V32H29V80z"/>
                            <polygon fill="" points="77,90 29,90 29,80 67,80 67,31 77,31"/>
                            <rect width="66" height="10" x="17" y="24" fill="#ff8405"/>
                            <polygon fill=""
                                     points="60.295,63.477 51.587,56.075 59.295,49.523 56.705,46.477 48.5,53.451 40.295,46.477 37.705,49.523 45.413,56.075 36.705,63.477 39.295,66.523 48.5,58.699 57.705,66.523"/>
                        </svg>
                    </button>
                    <img className="w-8 h-8 mt-4 -mx-6" alt="svgImg"
                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDM1LjY4NzUgMiBDIDM1LjQ2MDkzOCAyLjAzMTI1IDM1LjI1IDIuMTQ0NTMxIDM1LjA5Mzc1IDIuMzEyNSBMIDkuMDkzNzUgMjguMjgxMjUgQyA4Ljk5NjA5NCAyOC4zOTA2MjUgOC45MTc5NjkgMjguNTE1NjI1IDguODc1IDI4LjY1NjI1IEwgMi4wNjI1IDQ2LjY1NjI1IEMgMS45Mjk2ODggNDcuMDE5NTMxIDIuMDE5NTMxIDQ3LjQyOTY4OCAyLjI5Njg3NSA0Ny43MDMxMjUgQyAyLjU3MDMxMyA0Ny45ODA0NjkgMi45ODA0NjkgNDguMDcwMzEzIDMuMzQzNzUgNDcuOTM3NSBMIDIxLjM0Mzc1IDQxLjEyNSBDIDIxLjQ4NDM3NSA0MS4wODIwMzEgMjEuNjA5Mzc1IDQxLjAwMzkwNiAyMS43MTg3NSA0MC45MDYyNSBMIDIzIDM5LjYyNSBDIDIzLjIzODI4MSAzOS41MjM0MzggMjMuNDI5Njg4IDM5LjMzMjAzMSAyMy41MzEyNSAzOS4wOTM3NSBMIDQ3LjY4NzUgMTQuOTA2MjUgQyA0Ny45ODQzNzUgMTQuNjY0MDYzIDQ4LjEyMTA5NCAxNC4yNzczNDQgNDguMDM1MTU2IDEzLjkwMjM0NCBDIDQ3Ljk0OTIxOSAxMy41MzEyNSA0Ny42NTYyNSAxMy4yMzgyODEgNDcuMjg1MTU2IDEzLjE1MjM0NCBDIDQ2LjkxMDE1NiAxMy4wNjY0MDYgNDYuNTIzNDM4IDEzLjIwMzEyNSA0Ni4yODEyNSAxMy41IEwgMjIuMzQzNzUgMzcuNDA2MjUgQyAyMS42MjUgMzcuMDc0MjE5IDIwLjUyNzM0NCAzNi43MDMxMjUgMTkuMTI1IDM2Ljc1IEMgMTkuMjg5MDYzIDM2LjMwNDY4OCAxOS41MzUxNTYgMzYuMDM5MDYzIDE5LjYyNSAzNS41IEMgMTkuODQzNzUgMzQuMTk5MjE5IDE5LjcyNjU2MyAzMi42MDE1NjMgMTguNTYyNSAzMS40Mzc1IEMgMTcuMzk0NTMxIDMwLjI2OTUzMSAxNS43ODUxNTYgMzAuMTYwMTU2IDE0LjQ2ODc1IDMwLjQwNjI1IEMgMTQuMDAzOTA2IDMwLjQ5MjE4OCAxMy43NzczNDQgMzAuNzMwNDY5IDEzLjM3NSAzMC44NzUgQyAxMy4zOTA2MjUgMzAuNzM0Mzc1IDEzLjQzMzU5NCAzMC43MTA5MzggMTMuNDM3NSAzMC41NjI1IEMgMTMuNDYwOTM4IDI5LjY5NTMxMyAxMy4yNTc4MTMgMjguNjIxMDk0IDEyLjU5Mzc1IDI3LjY1NjI1IEwgMzYuNSAzLjcxODc1IEMgMzYuNzk2ODc1IDMuNDMzNTk0IDM2Ljg4NjcxOSAyLjk5MjE4OCAzNi43MjY1NjMgMi42MTMyODEgQyAzNi41NzAzMTMgMi4yMzQzNzUgMzYuMTkxNDA2IDEuOTkyMTg4IDM1Ljc4MTI1IDIgQyAzNS43NSAyIDM1LjcxODc1IDIgMzUuNjg3NSAyIFogTSAxMS4wOTM3NSAyOS4xNTYyNSBDIDExLjM0Mzc1IDI5LjYxMzI4MSAxMS40NDkyMTkgMzAuMDU4NTk0IDExLjQzNzUgMzAuNSBDIDExLjQyMTg3NSAzMS4xNzk2ODggMTEuMjAzMTI1IDMxLjc2NTYyNSAxMS4wNjI1IDMyLjE1NjI1IEMgMTAuOTEwMTU2IDMyLjU3ODEyNSAxMS4wNTQ2ODggMzMuMDQ2ODc1IDExLjQxNzk2OSAzMy4zMDg1OTQgQyAxMS43ODEyNSAzMy41NzAzMTMgMTIuMjczNDM4IDMzLjU1ODU5NCAxMi42MjUgMzMuMjgxMjUgQyAxMi45MTAxNTYgMzMuMDU4NTk0IDEzLjg2MzI4MSAzMi41NTA3ODEgMTQuODEyNSAzMi4zNzUgQyAxNS43NjE3MTkgMzIuMTk5MjE5IDE2LjYwNTQ2OSAzMi4yOTI5NjkgMTcuMTU2MjUgMzIuODQzNzUgQyAxNy43MTA5MzggMzMuMzk4NDM4IDE3LjgxNjQwNiAzNC4yNDYwOTQgMTcuNjU2MjUgMzUuMTg3NSBDIDE3LjQ5NjA5NCAzNi4xMjg5MDYgMTcuMDAzOTA2IDM3LjA4MjAzMSAxNi44MTI1IDM3LjM0Mzc1IEMgMTYuNTM1MTU2IDM3LjY5NTMxMyAxNi41MjM0MzggMzguMTg3NSAxNi43ODUxNTYgMzguNTUwNzgxIEMgMTcuMDQ2ODc1IDM4LjkxNDA2MyAxNy41MTU2MjUgMzkuMDU4NTk0IDE3LjkzNzUgMzguOTA2MjUgQyAxOS4yMDcwMzEgMzguNTE5NTMxIDIwLjE5NTMxMyAzOC42NTYyNSAyMC44NzUgMzguODc1IEwgMjAuNDA2MjUgMzkuMzQzNzUgTCA5LjM3NSA0My41MzEyNSBMIDYuNSA0MC42MjUgTCAxMC42NTYyNSAyOS41OTM3NSBaIj48L3BhdGg+PC9zdmc+"/>
                </div>


            </div>
        </div>);
};

export default NewLoginPage;