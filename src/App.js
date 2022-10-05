

import './index.css';
import PublicLoginPage from "./PublicLoginPage";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogInForm from "./LogInForm";

function App() {
    return (
        <div>

            <HeaderComponent/>
            <LogInForm/>
            <PublicLoginPage/>
            <FooterComponent/>

        </div>
    );
}

import React from 'react';

const PublicUserLogin = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody className="text-teal-600">
                    <tr >
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox bg-orange-400"/>
                            </label>
                        </th>
                        <td>12/05/2022</td>
                        <td>Learn what ARP means?</td>
                        <td>Computer Science</td>
                    </tr>

                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox bg-orange-400"/>
                            </label>
                        </th>
                        <td>12/07/2022</td>
                        <td>Read Moby Dick</td>
                        <td>English Lit</td>
                    </tr>

                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox bg-orange-400"/>
                            </label>
                        </th>
                        <td>12/09/2022</td>
                        <td>Learn times tables</td>
                        <td>Math</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PublicUserLogin;
