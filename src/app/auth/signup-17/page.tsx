/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Signup17() {
    return (
        <main className="flex text-black items-center justify-center min-h-screen p-4 font-sans bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
            <div className="relative w-full max-w-4xl">
                {/* <!-- Background shapes for added aesthetics --> */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute w-32 h-32 bg-pink-300 rounded-full -bottom-8 left-20 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <div style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                }} className="relative z-10 flex flex-col overflow-hidden shadow-2xl glass-effect rounded-3xl md:flex-row">
                    {/* <!-- Left side - Image placeholder --> */}
                    <div
                        className="lg:w-1/2 md:w-1/2 flex items-center justify-center  p-8 bg-gradient-to-br from-gray-900 to-gray-700 text-center text-white"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1702529939203-04c666ee2b7f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                            backgroundSize: 'cover',
                        }}
                    >
                        {/* Remove the img tag since the image is now a background */}
                    </div>

                    {/* <!-- Right side - Login form --> */}
                    <div className="w-full md:w-1/2  p-8 bg-white bg-opacity-40">
                        <div className="mb-8">
                            {/* <!-- Logo placeholder --> */}
                            <div className="w-12 h-12 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-lg mb-4 shadow-lg"></div>
                            <h2 className="text-3xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]">Welcome!</span>
                            </h2>
                            <p className="text-xl text-gray-700">
                                Start using <span className="font-semibold">V Ten</span>.
                            </p>
                        </div>


                        <form className="space-y-4">
                            <div>
                                <input type="text" placeholder="Full name" className="w-full rounded-2xl px-4 py-3 transition duration-300 bg-white bg-opacity-50 border border-gray-300focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" className="w-full rounded-2xl px-4 py-3 transition duration-300 bg-white bg-opacity-50 border border-gray-300focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]" />
                            </div>
                            <div>
                                <input type="password" placeholder="Password" className="w-full px-4 py-3 transition duration-300 bg-white bg-opacity-50 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]" />
                            </div>
                            <div className="flex flex-col items-start justify-between space-y-2 sm:flex-row sm:items-center sm:space-y-0">
                                <label className="flex items-center">
                                    <input type="checkbox" className="w-4 h-4 form-checkbox text-[#8B5CF6]" />
                                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-[#3B82F6 hover:underline">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white rounded-lg py-3 font-semibold hover:opacity-90 transition duration-300 shadow-lg">
                                Create Account
                            </button>

                            <div className="relative flex items-center justify-center">
                                <div className="w-full border-t border-gray-300"></div>
                                <div className="absolute px-4 text-sm text-gray-500 bg-white">Or continue with</div>
                            </div>

                            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <button type="button" className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-700 transition duration-300 bg-white bg-opacity-50 border border-gray-300 rounded-lg sm:w-1/2 hover:bg-opacity-100">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#4285F4" />
                                    </svg>
                                    Google
                                </button>
                                <button type="button" className="flex items-center justify-center w-full px-4 py-2 font-medium text-gray-700 transition duration-300 bg-white bg-opacity-50 border border-gray-300 rounded-lg sm:w-1/2 hover:bg-opacity-100">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#24292F" />
                                    </svg>
                                    GitHub
                                </button>
                            </div>
                        </form>

                        <p className="mt-6 text-sm text-center text-gray-600">
                            Already have an account yet?
                            <Link href="login-17" className="ml-1 font-semibold text-[#3B82F6 hover:underline">Login</Link>
                        </p>

                        <p className="mt-8 text-xs text-center text-gray-500">
                            ©2024 V Ten
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}