/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Signup14() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 font-sans bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
            </div>

            <div className="bg-gray-800 bg-opacity-30 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md z-10 shadow-xl border border-gray-700">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-100 mb-2">Welcome Back</h2>
                    <p className="text-gray-300">Please create an account to join</p>
                </div>

                <div className="flex space-x-4 mb-6">
                    <button className="flex-1 py-2 px-4 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg text-gray-200 hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                        </svg>
                        Google
                    </button>
                    <button className="flex-1 py-2 px-4 bg-gray-700 bg-opacity-50 backdrop-blur-md rounded-lg text-gray-200 hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        GitHub
                    </button>
                </div>

                <div className="flex items-center mb-6">
                    <div className="flex-grow h-px bg-gray-600"></div>
                    <span className="px-4 text-sm text-gray-400">Or</span>
                    <div className="flex-grow h-px bg-gray-600"></div>
                </div>

                <form>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Full name</label>
                        <input type="text" id="name" name="name" className="w-full p-3 rounded-lg bg-gray-700 bg-opacity-50 backdrop-blur-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your full name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input type="email" id="email" name="email" className="w-full p-3 rounded-lg bg-gray-700 bg-opacity-50 backdrop-blur-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-3 rounded-lg bg-gray-700 bg-opacity-50 backdrop-blur-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded" />
                            <label className="ml-2 block text-sm text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-300">
                        Already have an account?
                        <Link href="login-14" className="ml-1 text-blue-400 hover:text-blue-300 font-medium">Login</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}