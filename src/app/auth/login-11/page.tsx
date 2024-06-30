/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Login11() {
    return (
        <main className="bg-[#FFE14C] text-black min-h-screen flex items-center justify-center p-8 font-sans">
            <div className="bg-white border-4 border-black rounded-none shadow-neo p-2 px-8 w-full max-w-md relative" style={{ transform: 'rotate(-1deg)' }}>
                <div className="absolute -top-4 -left-4 bg-[#FF90E8] border-4 border-black py-2 px-4 font-bold transform rotate-6">
                    Login Now!
                </div>

                <div className="text-center mb-8 mt-6">
                    <div className="inline-block p-3 bg-[#23A094] border-4 border-black rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold">Welcome back</h2>
                    <p className="text-gray-700 mt-2">Please enter your details to sign in</p>
                </div>

                <div className="flex justify-between mb-6 gap-4">
                    <button className="flex-1 py-2 px-4 bg-white border-4 border-black rounded-none shadow-neo hover:bg-gray-100 transition duration-300 font-bold">
                        G
                    </button>
                    <button className="flex-1 py-2 px-4 bg-white border-4 border-black rounded-none shadow-neo hover:bg-gray-100 transition duration-300 font-bold">
                        a
                    </button>
                    <button className="flex-1 py-2 px-4 bg-white border-4 border-black rounded-none shadow-neo hover:bg-gray-100 transition duration-300 font-bold">
                        f
                    </button>
                </div>

                <div className="flex items-center my-6">
                    <div className="flex-grow h-1 bg-black"></div>
                    <span className="px-4 text-lg font-bold">OR</span>
                    <div className="flex-grow h-1 bg-black"></div>
                </div>

                <form>
                    <div className="mb-4">
                        <label className="block text-lg font-bold text-gray-700 mb-2">Email address</label>
                        <input type="email" id="email" name="email" className="w-full p-3 border-4 border-black rounded-none focus:outline-none focus:ring-4 focus:ring-[#FF90E8]" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-bold text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <input type="password" id="password" name="password" className="w-full p-3 border-4 border-black rounded-none focus:outline-none focus:ring-4 focus:ring-[#FF90E8]" placeholder="••••••••" />
                            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="h-5 w-5 text-[#23A094] focus:ring-[#FF90E8] border-4 border-black rounded-none" />
                            <label className="ml-2 block text-sm font-bold text-gray-700">Remember for 30 days</label>
                        </div>
                        <a href="#" className="text-sm font-bold text-[#23A094] hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full py-3 px-4 bg-[#23A094] text-white font-bold border-4 border-black rounded-none shadow-neo hover:bg-[#FF90E8] hover:text-black transition duration-300">
                        Sign in
                    </button>
                </form>

                <p className="my-4 mt-4 text-lg text-center font-bold">
                    Don&apos;t have an account? <Link href="signup-11" className="text-[#23A094] hover:underline">Create account</Link>
                </p>
            </div>
        </main>
    )
}