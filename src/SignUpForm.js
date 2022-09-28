import React from 'react';

const SignUpForm = () => {
    return (
        <div className="mx-auto w-1/5">
            <form className="flex flex-col space-y-4">
                <button className="btn btn-circle btn-outline w-full">Continue with Google</button>
                <button className="btn btn-circle btn-outline w-full">Continue with Linkedin</button>
                <hr/>
                <input className="border rounded-full border-black" type="text" placeholder="Full name"/>
                <input className="border rounded-full border-black" type="email" placeholder="Email"/>
                <input className="border rounded-full border-black" type="password" placeholder="Password"/>
                <p>By signing up, you agree to our Terms of Use and our Private Policy</p>
            </form>
        </div>
    );
};

export default SignUpForm