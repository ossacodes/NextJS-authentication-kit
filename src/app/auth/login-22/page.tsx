import Link from 'next/link';
import React, { useState } from 'react';

export default function Login22() {

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600 flex items-center justify-center relative overflow-hidden p-4">

            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

            <div className="relative bg-gray-900 bg-opacity-40 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-gray-700">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">

                </div>

                <h1 className="text-white text-3xl font-bold mb-6 text-center mt-4">Welcome To Location Tracker</h1>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-purple-300 mb-2">Email address</label>
                        <input type="email" id="email" placeholder="Email address" className="w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 rounded-lg py-2 px-4 focus:ring-2 focus:ring-purple-500 outline-none" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-purple-300 mb-2">Password</label>
                        <input type="password" id="password" placeholder="Password" className="w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 rounded-lg py-2 px-4 focus:ring-2 focus:ring-purple-500 outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg py-2 px-4 hover:from-purple-600 hover:to-indigo-600 transition duration-300">Log In</button>
                </form>

                <div className="text-center mt-4">
                    <a href="#" className="text-purple-300 hover:text-purple-400 text-sm">Forgot your password?</a>
                </div>

                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-600"></div>
                    <span className="px-3 text-gray-400">or</span>
                    <div className="flex-grow h-px bg-gray-600"></div>
                </div>

                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white rounded-lg py-2 px-4 mb-2 flex items-center justify-center transition duration-300">
                    <svg className="w-5 h-5 mr-2  fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg> Login with Google
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white rounded-lg py-2 px-4 flex items-center justify-center transition duration-300">
                    <svg className="w-5 h-5 mr-2  fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg> Login with GitHub
                </button>

                <p className="text-gray-400 mt-6 text-center">
                    Don&apos;t have an account yet? <Link href="signup-22" className="text-purple-400 hover:text-purple-300">Register</Link>
                </p>
            </div>
        </div>
    );
};
