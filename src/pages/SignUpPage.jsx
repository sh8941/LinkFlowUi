import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
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
                    <h1 className='text-5xl font-bold'>Create Account 🚀</h1>
                    <h3 className='text-2xl text-gray-700'>Sign up to get started</h3>
                </div>

                {/* form container */}
                <div>
                    <form className="w-full p-6">

                        {/* Name */}
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-700"
                            />
                        </div>
                        
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-violet-700"
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
                            Sign up
                        </button>

                    </form>
                </div>

                {/* last text container */}

                <div className='w-full text-center'>
                    Already have an account? <Link to="/login" className='text-violet-700 font-semibold'>Log in</Link>
                </div>

            </div>
        </div>
    );
}

export default SignUpPage;
