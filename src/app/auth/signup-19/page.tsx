/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Signup19() {
    return (
        <main className="bg-yellow-300 min-h-screen flex items-center justify-center p-4" style={{ fontFamily: 'Roboto Mono, monospace' }}>
            <div className="w-full max-w-4xl bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                <div className="flex flex-col md:flex-row">
                    {/* <!-- Left side - Image and branding --> */}
                    <div className="w-full md:w-1/2 bg-pink-500 p-8 border-b-4 md:border-b-0 md:border-r-4 border-black flex flex-col justify-center items-center">
                        <div className="text-black text-center">
                            <div className="w-40 h-40 bg-white border-4 border-black rounded-full flex items-center justify-center mb-4 shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl mb-2 mt-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>C MONEY</h2>
                            <p className="text-lg font-bold">BRUTALLY SECURE</p>
                        </div>
                    </div>

                    {/* <!-- Right side - Login form --> */}
                    <div className="w-full md:w-1/2 p-8 bg-blue-400">
                        <h2 className="text-2xl mb-6 text-black" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>SIGN UP NOW!</h2>
                        <form className="space-y-6">
                            <div>
                                <input type="name" placeholder="FULL NAME" className="w-full px-4 py-3 bg-white border-4 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-400 shadow-[5px_5px_0_0_rgba(0,0,0,1)]" />
                            </div>
                            <div>
                                <input type="email" placeholder="EMAIL" className="w-full px-4 py-3 bg-white border-4 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-400 shadow-[5px_5px_0_0_rgba(0,0,0,1)]" />
                            </div>
                            <div>
                                <input type="password" placeholder="PASSWORD" className="w-full px-4 py-3 bg-white border-4 border-black text-black placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-400 shadow-[5px_5px_0_0_rgba(0,0,0,1)]" />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="flex items-center text-black">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500 border-4 border-black" />
                                    <span className="ml-2 text-sm">REMEMBER ME</span>
                                </label>
                                <a href="#" className="text-sm text-black underline">FORGOT PASSWORD?</a>
                            </div>
                            <button type="submit" className="w-full py-3 bg-green-400 text-black font-bold border-4 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:bg-green-500 transition duration-300">
                                SMASH TO START
                            </button>

                            <div className="relative flex items-center justify-center">
                                <div className="border-t-4 border-black w-full"></div>
                                <div className="absolute bg-blue-400 px-4 text-sm text-black font-bold">OR ELSE</div>
                            </div>

                            <div className="flex space-x-4">
                                <button type="button" className="flex-1 py-2 px-4 bg-white text-black font-bold border-4 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="currentColor" />
                                    </svg>
                                    GOOGLE
                                </button>
                                <button type="button" className="flex-1 py-2 px-4 bg-white text-black font-bold border-4 border-black shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:bg-gray-100 transition duration-300 flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor" />
                                    </svg>
                                    GITHUB
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 text-center text-black text-sm font-bold">
                            HAVE ACCOUNT?
                            <Link href="login-19" className="ml-1 underline">LOGIN NOW!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}