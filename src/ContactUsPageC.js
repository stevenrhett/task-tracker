import React from 'react';

const ContactUsPageC = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <input type="text"placeholder="Your Name"/>
                    <input type="text"placeholder="Your Email"/>
                </div>
                <div>
                    <input type="text" placeholder="Phone Number"/>
                    <input type="text" placeholder="Country"/>
                </div>
                <div>
                    <input type="text"placeholder="Company Name"/>
                    <input type="text"/>
                </div>
                <input type="text" placeholder="Message"/>
            </form>
        </div>
    );
};

export default ContactUsPageC;