/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Login18() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 font-sans bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 -right-20 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-20 w-72 h-72 bg-violet-800 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div style={{
                background: 'rgba(23, 25, 35, 0.6)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
            }} className="glassmorphism18 rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row relative z-10">
                {/* <!-- Left side - Image placeholder --> */}
                <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-black bg-opacity-20">
                    <div className="text-white text-center">
                        <div className="w-40 h-40 bg-white bg-opacity-10 rounded-full mx-auto flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-2">C Money</h2>
                        <p className="text-lg text-gray-300">Secure your financial future</p>
                    </div>
                </div>

                {/* <!-- Right side - Login form --> */}
                <div className="w-full md:w-1/2 p-8 glassmorphism18">
                    <h2 className="text-3xl font-bold mb-6 text-white">Welcome Back!</h2>
                    <form className="space-y-6">
                        <div>
                            <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg glassmorphism18 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg glassmorphism18 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]" />
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="flex items-center text-gray-300">
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-[#8B5CF6] rounded glassmorphism18" />
                                <span className="ml-2 text-sm">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-[#8B5CF6] hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full py-3 bg-[#8B5CF6] text-white rounded-lg font-semibold hover:bg-opacity-90 transition duration-300">
                            Sign In
                        </button>

                        <div className="relative flex items-center justify-center">
                            <div className="border-t border-gray-600 w-full opacity-20"></div>
                            <div className="absolute bg-transparent px-4 text-sm text-gray-400">Or continue with</div>
                        </div>

                        <div className="flex space-x-4">
                            <button type="button" className="flex-1 py-2 px-4 glassmorphism18 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center hover:bg-white hover:bg-opacity-10">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="currentColor" />
                                </svg>
                                Google
                            </button>
                            <button type="button" className="flex-1 py-2 px-4 glassmorphism18 text-white font-medium rounded-lg transition duration-300 flex items-center justify-center hover:bg-white hover:bg-opacity-10">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
                                </svg>
                                GitHub
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-center text-gray-400 text-sm">
                        Don&apos;t have an account?
                        <Link href="signup-18" className="text-[#8B5CF6] ml-1 font-semibold hover:underline">Create Account</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}