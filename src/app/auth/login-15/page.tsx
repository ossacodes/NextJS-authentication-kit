/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Login15() {
    return (
        <main style={{ backgroundImage: "radial-gradient(circle at top left, #4a3f35, #1f2937 50%)" }} className="min-h-screen flex items-center justify-center font-['Inter'] text-white">
            <div className="w-full max-w-md p-8 space-y-6">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-gray-600 rounded-2xl mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold">Create your account</h2>
                    <p className="text-gray-400">Get Started for free</p>
                </div>

                <input type="email" placeholder="Email address" className="w-full p-3 rounded-lg glassmorphism border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="password" placeholder="Password" className="w-full p-3 rounded-lg glassmorphism border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <div className="flex justify-between items-center">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                        <span className="ml-2 text-sm text-gray-400">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-gray-400 hover:text-white">Forgot Password</a>
                </div>

                <button className="w-full py-3 bg-white text-gray-800 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
                    Login
                </button>
                <p className="text-center text-gray-400 text-sm">
                    Don&apos;t have an account? <Link href="signup-15" className="text-blue-400 hover:underline">Sign up</Link>
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