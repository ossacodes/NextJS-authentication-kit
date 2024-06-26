/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Signup9() {
    return (
        <main className="flex items-center justify-center min-h-screen p-4 bg-white text-[#333333]">
            <div className="w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full p-8 md:w-1/2 bg-[#EEEDEB]">
                        <div className="flex items-center mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-2 text-[#2F3645]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="text-2xl font-bold text-[#2F3645]">BOLT</span>
                        </div>

                        <h2 className="mb-2 text-3xl font-bold">Create Your Account</h2>
                        <p className="mb-8 text-gray-600">Join Bolt and elevate your project management</p>

                        <div className="mb-6 space-y-4">
                            <button className="flex items-center justify-center w-full px-4 py-3 font-medium transition duration-300 bg-white rounded text-[#333333] hover:bg-gray-100">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#4285F4" />
                                </svg>
                                Sign up with Google
                            </button>
                            <button className="flex items-center justify-center w-full px-4 py-3 font-medium transition duration-300 bg-white rounded text-[#333333] hover:bg-gray-100">
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#181717" />
                                </svg>
                                Sign up in with GitHub
                            </button>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <span className="px-4 text-sm text-gray-500">or</span>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        <form>
                            <div className="mb-4">
                                <input type="name" id="name" name="name" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2F3645]" placeholder="Full Name" />
                            </div>
                            <div className="mb-4">
                                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2F3645]" placeholder="Email Address" />
                            </div>
                            <div className="mb-6">
                                <input type="password" id="password" name="password" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2F3645]" placeholder="Password" />
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember" name="remember" className="w-4 h-4 border-gray-300 rounded text-[#2F3645] focus:ring-[#2F3645]" />
                                    <label className="ml-2 text-sm">Remember me</label>
                                </div>
                                <a href="#" className="text-sm text-[#2F3645] hover:underline">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full px-4 py-3 font-medium text-white transition duration-300 rounded bg-[#2F3645] hover:bg-slate-800">
                                Create Account
                            </button>
                        </form>

                        <p className="mt-8 text-sm text-center">
                            Already have an account? <Link href="login-9" className="font-semibold text-[#2F3645] hover:underline">Login</Link>
                        </p>
                    </div>
                    <div className="flex items-center w-full p-8 text-white md:w-1/2 bg-[#2F3645]">
                        <div>
                            <h3 className="mb-4 text-2xl font-bold">Boost Your Productivity</h3>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Streamlined project management
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Collaborative team workspace
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                    Insightful analytics dashboard
                                </li>
                            </ul>
                            <p className="text-sm italic">&quot;Bolt has revolutionized how we manage projects. It&apos;s intuitive, powerful, and indispensable for our team.&quot;</p>
                            <p className="mt-2 text-sm font-semibold">- Sarah Johnson, Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}