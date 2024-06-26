/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Login12() {

    return (
        <main className="bg-white min-h-screen flex items-center justify-center p-4 font-mono">
            <div style={{
                content: "",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "repeating-linear-gradient(45deg, #000, #000 10px, #ff0 10px, #ff0 20px)",
                opacity: 0.05,
                pointerEvents: "none"
            }}></div>
            <div className="w-full text-black max-w-md bg-white border-4 border-black">
                <div className="bg-black text-white p-4 text-center text-2xl font-bold">
                    LOGIN
                </div>

                <div className="p-6">
                    <div className="mb-6 text-center">
                        <span className="inline-block bg-black text-white p-2 text-xs">Welcome back</span>
                        <p className="mt-2 text-sm">Please enter your details to sign in</p>
                    </div>

                    <div className="flex justify-between mb-6">
                        <button className="flex-1 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 text-xs mr-2">
                            GOOGLE
                        </button>
                        <button className="flex-1 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 text-xs mr-2">
                            APPLE
                        </button>
                        <button className="flex-1 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-300 text-xs">
                            FACEBOOK
                        </button>
                    </div>

                    <div className="flex items-center mb-6">
                        <div className="flex-grow h-px bg-black"></div>
                        <span className="px-4 text-xs font-bold bg-white relative top-1">OR</span>
                        <div className="flex-grow h-px bg-black"></div>
                    </div>

                    <form>
                        <div className="mb-4">
                            <label className="block text-xs font-bold mb-1">EMAIL ADDRESS</label>
                            <input type="email" id="email" name="email" className="w-full p-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-sm" placeholder="Enter your email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-xs font-bold mb-1">PASSWORD</label>
                            <div className="relative">
                                <input type="password" id="password" name="password" className="w-full p-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black text-sm" placeholder="Enter your password" />
                                <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center text-xs">
                                    SHOW
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-6 text-xs">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" name="remember" className="h-4 w-4 border-2 border-black" />
                                <label className="ml-2 block font-bold">Remember for 30 days</label>
                            </div>
                            <a href="#" className="font-bold underline">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full py-2 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition duration-300 text-sm font-bold">
                            SIGN IN
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-center">
                        Don&apos;t have an account? <Link href="signup-12" className="font-bold underline">Create account</Link>
                    </p>
                </div>
            </div>

            <div className="fixed bottom-4 right-4 bg-black text-white p-2 text-xs">
                © 2024 BRUTALISM INC.
            </div>
        </main>
    )
}