import React from 'react';

const SignUpForm = () => {
    return (
        <div>
            <form>
                <button>Continue with Google</button>
                <button>Continue with Linkedin</button>
                <hr/>
                <input type="text" placeholder="Full name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
            </form>
        </div>
    );
};

export default SignUpForm