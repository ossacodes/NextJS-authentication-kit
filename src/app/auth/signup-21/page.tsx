import Link from 'next/link';
import React from 'react';

export default function Signup21() {
    return (
        <div className="h-screen w-screen bg-black flex items-center justify-center relative overflow-hidden">
            {/* Large purple planet */}
            <div className="absolute right-0 w-2/3 h-2/3 bg-purple-600 rounded-full opacity-50 blur-2xl"></div>

            {/* Smaller purple orb */}
            <div className="absolute left-10 top-10 w-20 h-20 bg-purple-400 rounded-full opacity-30 blur-xl"></div>

            {/* Sign In Card */}
            <div className="z-10 bg-gray-900 bg-opacity-80 p-8 rounded-lg w-96 backdrop-blur-sm">
                <h2 className="text-white text-2xl font-bold mb-2">Sign Up</h2>
                <p className="text-gray-400 text-sm mb-6">Keep it all together and you&apos;ll be fine</p>

                <form>
                    <input
                        type="text"
                        placeholder="Full name"
                        className="w-full bg-gray-800 text-white p-3 rounded-md mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full bg-gray-800 text-white p-3 rounded-md mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="w-full bg-gray-800 text-white p-3 rounded-md mb-4"
                    />

                    <div className="relative mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-gray-800 text-white p-3 rounded-md pr-16"
                        />
                        <button className="absolute right-3 top-3 text-purple-500">Show</button>
                    </div>
                    <a href="#" className="text-purple-500 text-sm block mb-4">Forgot Password</a>
                    <button className="w-full bg-purple-600 text-white p-3 rounded-md mb-4">
                        Sign In
                    </button>
                </form>

                <div className="text-center text-gray-400 my-2">or</div>

                <button className="w-full bg-gray-800 text-white p-3 rounded-md flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2  fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Sign in with GitHub
                </button>

                <p className="text-gray-400 text-sm mt-6">
                    One Of XFade? <Link href="login-21" className="text-purple-500">Login</Link>
                </p>
            </div>
        </div>
    );
};
