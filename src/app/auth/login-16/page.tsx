/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Login16() {
    return (
        <main className="bg-white text-black min-h-screen flex items-center justify-center font-sans">
            <div className="w-full max-w-md p-8">
                <div className="mb-12">
                    <div className="flex justify-center items-center mb-8">
                        <div className="w-16 h-16 bg-[#FF0000] rounded-full"></div>
                        <div className="w-16 h-16 bg-[#0000FF] -ml-8"></div>
                        <div className="w-16 h-16 bg-[#FFFF00] -ml-8 rounded-full"></div>
                    </div>
                    <h1 className="text-4xl font-bold text-center uppercase tracking-widest">Login</h1>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wide mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#0000FF]" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wide mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#0000FF]" placeholder="Enter your password" />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-[#FF0000] border-2 border-black" />
                            <span className="ml-2 text-sm font-bold uppercase">Remember me</span>
                        </label>
                        <a href="#" className="text-sm font-bold uppercase text-[#0000FF] hover:underline">Forgot Password?</a>
                    </div>

                    <button type="submit" className="w-full py-3 bg-[#FF0000] text-white font-bold uppercase tracking-widest hover:bg-red-700 transition duration-300">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-sm uppercase">
                        Don&apos;t have an account?
                        <Link href="signup-16" className="ml-1 font-bold text-[#0000FF] hover:underline">Sign up</Link>
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <hr className="w-1/3 border-black" />
                    <span className="text-black uppercase">OR</span>
                    <hr className="w-1/3 border-black" />
                </div>

                <button className="mt-4 w-full py-3 bg-[#1E88E5] text-white font-bold uppercase flex items-center justify-center hover:bg-[#1E88E5]-600 transition duration-300">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                    </svg>
                    Continue with Google
                </button>
            </div>
        </main>
    )
}