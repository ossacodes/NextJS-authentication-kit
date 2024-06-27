/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Signup15() {
    return (
        <main style={{ backgroundImage: "radial-gradient(circle at top left, #4a3f35, #1f2937 50%)" }} className="min-h-screen flex items-center justify-center font-['Inter'] text-white">
            <div className="w-full max-w-md p-8 space-y-5">
                <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 bg-gray-600 rounded-2xl mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4C6.48 4 2 8.48 2 14C2 17.85 4.19 21.17 7.43 22.94C7.59 23.03 7.77 23 7.89 22.88L10.12 20.65C10.29 20.48 10.29 20.2 10.12 20.03C9.63 19.54 9.29 18.9 9.16 18.18C9.12 17.96 8.93 17.79 8.71 17.79H7.47C6.66 17.79 6 17.13 6 16.32V15.21C6 14.4 6.66 13.74 7.47 13.74H8.71C8.93 13.74 9.12 13.57 9.16 13.35C9.29 12.63 9.63 11.99 10.12 11.5C10.29 11.33 10.29 11.05 10.12 10.88L7.89 8.65C7.77 8.53 7.59 8.5 7.43 8.59C4.19 10.36 2 13.68 2 17.53C2 19.99 3.51 22.06 5.64 22.94C6.86 23.45 8.2 23.73 9.6 23.73C14.12 23.73 17.88 19.97 17.88 15.45C17.88 14.05 17.6 12.71 17.09 11.49C16.21 9.36 14.14 7.85 11.68 7.85C10.28 7.85 8.94 8.13 7.72 8.64C7.56 8.73 7.53 8.91 7.65 9.03L9.88 11.26C10.05 11.43 10.33 11.43 10.5 11.26C10.99 10.77 11.63 10.43 12.35 10.3C12.57 10.26 12.74 10.07 12.74 9.85V8.61C12.74 7.8 13.4 7.14 14.21 7.14H15.32C16.13 7.14 16.79 7.8 16.79 8.61V9.85C16.79 10.07 16.96 10.26 17.18 10.3C17.9 10.43 18.54 10.77 19.03 11.26C19.2 11.43 19.48 11.43 19.65 11.26L21.88 9.03C22 8.91 21.97 8.73 21.81 8.64C20.59 8.13 19.25 7.85 17.85 7.85C15.39 7.85 13.32 9.36 12.44 11.49C11.93 12.71 11.65 14.05 11.65 15.45C11.65 19.97 15.41 23.73 19.93 23.73C21.33 23.73 22.67 23.45 23.89 22.94C26.02 22.06 27.53 19.99 27.53 17.53C27.53 13.68 25.34 10.36 22.1 8.59C21.94 8.5 21.76 8.53 21.64 8.65L19.41 10.88C19.24 11.05 19.24 11.33 19.41 11.5C19.9 11.99 20.24 12.63 20.37 13.35C20.41 13.57 20.6 13.74 20.82 13.74H22.06C22.87 13.74 23.53 14.4 23.53 15.21V16.32C23.53 17.13 22.87 17.79 22.06 17.79H20.82C20.6 17.79 20.41 17.96 20.37 18.18C20.24 18.9 19.9 19.54 19.41 20.03C19.24 20.2 19.24 20.48 19.41 20.65L21.64 22.88C21.76 23 21.94 23.03 22.1 22.94C25.34 21.17 27.53 17.85 27.53 14C27.53 8.48 23.05 4 17.53 4H12Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">Create your account</h2>
                    <p className="text-gray-400">Get Started for free</p>
                </div>

                <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg glassmorphism border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="email" placeholder="Email address" className="w-full p-3 rounded-lg glassmorphism border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="password" placeholder="Password" className="w-full p-3 rounded-lg glassmorphism border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="password" placeholder="Confirm Password" className="w-full p-3 rounded-lg glassmorphism border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <div className="flex items-center">
                    <input type="checkbox" id="terms" className="form-checkbox h-4 w-4 text-blue-600" />
                    <label className="ml-2 text-sm text-gray-400">I agree to the <a href="#" className="text-blue-400 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a></label>
                </div>

                <button className="w-full py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
                    Sign Up
                </button>

                <p className="text-center text-gray-400 text-sm">
                    Already have an account? <Link href="login-15" className="text-blue-400 hover:underline">Log in</Link>
                </p>

                <div className="flex items-center justify-center space-x-4">
                    <hr className="w-full border-gray-600" />
                    <span className="text-gray-400 text-sm px-4">or</span>
                    <hr className="w-full border-gray-600" />
                </div>

                <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-opacity-90 transition duration-300">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
                    Continue with Google
                </button>


            </div>
        </main>
    )
}