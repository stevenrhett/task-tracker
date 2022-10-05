import React from 'react';

const PublicLoginPage = () => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead className="text-orange-400">
                    <tr>
                        <th>
                        <label>
                         <input type="checkbox" className="checkbox"/>
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Public Task</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody className="text-teal-600">
                      <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox bg-orange-400"/>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                          <img src="https://placeimg.com/80/80/people" alt="alt"/>
                                            <img src="https://placeimg.com/80/80/people" alt="alt"/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <div className="font-bold">Davola</div>
                                    <div className="text-sm opacity-50 text-orange-400">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Finish science reading
                            <span className="badge badge-ghost badge-sm">Student</span>
                        </td>
                        <td>11/29/2022</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox bg-orange-400"/>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" alt="alt"/>
                                            <img src="https://placeimg.com/80/80/people" alt="alt"/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <div className="font-bold">Justin</div>
                                    <div className="text-sm opacity-50 text-orange-400">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            study for History test
                            <span className="badge badge-ghost badge-sm">Student</span>
                        </td>
                        <td>12/05/2022</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>             
                   <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox bg-orange-400"/>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                           <img src="https://placeimg.com/80/80/people" alt="alt"/>
                                            <img src="https://placeimg.com/80/80/people" alt="alt"/>
                                       </div>
                                    </label>
                                </div>
                                <div>
                                    <div className="font-bold">Steven</div>
                                    <div className="text-sm opacity-50 text-orange-400">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            practice speech
                            <span className="badge badge-ghost badge-sm">Student</span>
                        </td>
                        <td>12/02/2022</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>        
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox bg-orange-400"/>
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">

                                            <img src="https://placeimg.com/80/80/people" alt="alt"/>

                                            <img src="https://placeimg.com/80/80/people" alt="alt"/>

                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <div className="font-bold">Didier</div>
                                    <div className="text-sm opacity-50 text-orange-400">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            STUDY!!!!!

                            <span className="badge badge-ghost badge-sm">Student</span>
                        </td>
                        <td>12/10/2022</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                    </tbody>                   
                    <tfoot className="text-orange-400">
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Public Task</th>
                        <th>Subject</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    );
};

export default PublicLoginPage;