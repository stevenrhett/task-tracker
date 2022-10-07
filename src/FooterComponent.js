import React from 'react';
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (<div>
        <div className="flex items-center justify-center space-x-4 font-bold text-lg text-teal-500
            p-4 primary-content text-base-content">
            <Link to="/about" className="text-teal-600 text-lg hover:text-teal-700">About</Link>
            <Link to="/contact" className="text-teal-600 text-lg hover:text-teal-700">Contact</Link>
            <Link to="/team" className="text-teal-600 text-lg hover:text-teal-700">Team</Link>

        </div>
        <div className="footer footer-center p-4 primary-content text-base-content">
            <p>Copyright © 2022 - All right reserved by Team-algo</p>
        </div>
    </div>);
};

export default FooterComponent;