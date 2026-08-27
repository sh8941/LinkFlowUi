import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authApi';

const LoginPage = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        const data = {
            username: username,
            password: password
        };

        console.log(data);

        try {
            

            const response = await loginUser(data);


            

            navigate('/');
            

        } catch (error) {

            console.log(error);
            
        }
        
    };


    return (
        <div className='w-full h-screen bg-white flex'>
            {/* left bar */}
            <div className='w-1/3 h-full bg-violet-800 p-8'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-full h-1/4 text-white flex flex-col justify-between'>
                        <h1 className='text-5xl font-semibold'>LinkFlow</h1>
                        <p className='text-2xl'>Shorten, share and track your links with ease</p>
                    </div>
                </div>
            </div>

            {/* form container */}
            <div className='w-2/3 h-full bg-white p-16 flex flex-col justify-between'>

                {/* greet container */}
                <div>
                    <h1 className='text-5xl font-bold'>Welcome Back 👏</h1>
                    <h3 className='text-2xl text-gray-700'>Login to your account</h3>
                </div>

                {/* form container */}
                <div>
                    <form className="w-full p-6" onSubmit={onSubmitHandler}>

                        {/* Username */}
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700">
                                Username
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-700"
                                onChange={(e) => {setUsername(e.target.value)}}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-2">
                            <label className="block mb-2 text-gray-700">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-700"
                                 onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </div>

                        {/* Forgot password */}
                        <div className="text-right mb-5">
                            <a
                                href="/forgot-password"
                                className="text-sm text-violet-700 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Login button */}
                        <button
                            type="submit"
                            className="w-full py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-800"
                        >
                            Login
                        </button>

                    </form>
                </div>

                {/* last text container */}

                <div className='w-full text-center'>
                    Don't have an account? <Link to="/signup" className='text-violet-700 font-semibold'>Sign up</Link>
                </div>

            </div>
        </div>
    );
}

export default LoginPage;
