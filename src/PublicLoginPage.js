import React from 'react';

const PublicLoginPage = () => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/*<!-- head -->*/}
                    <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Public Task</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*<!-- row 1 -->*/}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <div className="font-bold">Davola</div>
                                    <div className="text-sm opacity-50">United States</div>
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
                    {/*<!-- row 2 -->*/}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <div className="font-bold">Justin</div>
                                    <div className="text-sm opacity-50">United States</div>
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
                    {/*<!-- row 3 -->*/}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <div className="font-bold">Steven</div>
                                    <div className="text-sm opacity-50">United States</div>
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
                    {/*<!-- row 4 -->*/}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://placeimg.com/80/80/people" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <div className="font-bold">Didier</div>
                                    <div className="text-sm opacity-50">United States</div>
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
                    {/*<!-- foot -->*/}
                    <tfoot>
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
            {/*END*/}

            <div className="overflow-x-auto">
                <table className="table w-full">


                    <tbody>

                    <tr>
                        <th>1</th>
                        <td>12/05/2022</td>
                        <td>Learn what ARP means?</td>
                        <td>Computer Science</td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td>12/07/2022</td>
                        <td>Read Moby Dick</td>
                        <td>English Lit</td>
                    </tr>

                    <tr>
                        <th>3</th>
                        <td>12/09/2022</td>
                        <td>Learn times tables</td>
                        <td>Math</td>
                    </tr>

                    <tr>
                        <th>4</th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>5</th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default PublicLoginPage;