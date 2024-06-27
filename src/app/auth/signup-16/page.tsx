/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Signup16() {
    return (
        <main className="bg-white text-black min-h-screen flex items-center justify-center font-sans">
            <div className="w-full max-w-md p-8">
                <div className="mb-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-[#E53935] rounded-full"></div>
                        <div className="absolute inset-0 bg-[#1E88E5] rounded-full" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}></div>
                        <div className="absolute inset-0 bg-[#FDD835] rounded-full" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}></div>
                    </div>
                    <h1 className="text-4xl font-bold text-black mb-2">CREATE ACCOUNT</h1>
                    <p className="text-[#1E88E5] uppercase tracking-wide">Join the movement</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <input type="text" placeholder="FULL NAME" className="w-full p-3 border-2 border-black text-black placeholder-black uppercase" />
                    </div>
                    <div>
                        <input type="email" placeholder="EMAIL ADDRESS" className="w-full p-3 border-2 border-black text-black placeholder-black uppercase" />
                    </div>
                    <div>
                        <input type="password" placeholder="PASSWORD" className="w-full p-3 border-2 border-black text-black placeholder-black uppercase" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="form-checkbox h-5 w-5 text-[#E53935] border-2 border-black" />
                        <label className="ml-2 text-sm text-black uppercase">I agree to the terms</label>
                    </div>
                    <button type="submit" className="w-full py-3 bg-[#E53935] text-white font-bold uppercase hover:bg-[#E53935]-600 transition duration-300">
                        Sign Up
                    </button>
                </form>
                <p className="mt-3 text-center text-black">
                    Already have an account? <Link href="login-16" className="text-[#E53935] font-bold uppercase">Log in</Link>
                </p>

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