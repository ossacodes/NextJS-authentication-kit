/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Login7() {
    return (
        <main className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full">
                <div className="flex flex-col md:flex-row">
                    {/* <!-- Image Section --> */}
                    <div className="md:w-1/2 bg-gradient-to-br text-black from-[#8A4FFF] to-[#63f7ef] p-8 flex items-center justify-center">
                        <div className="text-white text-center">
                            <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                            <p className="mb-6">Log in to continue your creative journey with MdUI</p>
                            <img src="https://plus.unsplash.com/premium_photo-1673480196507-e08ba4ed409f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D300/200" alt="MdUI visual" className="rounded-lg shadow-lg mx-auto" />
                        </div>
                    </div>

                    {/* <!-- Form Section --> */}
                    <div className="md:w-1/2 p-8 text-black">
                        <div className="flex justify-between items-center mb-6">
                            <img src="https://cdn.dribbble.com/userupload/12538308/file/original-3223a6117c86adfe63e0b7e10463d480.png?crop=54x19-785x568&resize=640x480&vertical=center" alt="MdUI logo" className="w-10 h-10" />
                            <span className="text-sm text-gray-600">New to MdUI? <Link href="signup-7" className="text-[#8A4FFF] font-semibold hover:underline">Sign up</Link></span>
                        </div>

                        <h1 className="text-2xl font-bold mb-2">Log in to your account</h1>
                        <p className="text-gray-600 mb-6">Enter your details below</p>

                        <button className="w-full py-2 px-4 mb-4 border border-gray-300 rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-300">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#4285F4" /></svg>
                            Log in with Google
                        </button>

                        <div className="relative flex py-3 items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <div className="space-y-4">
                            <input type="email" placeholder="Email address" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A4FFF] focus:border-transparent" />
                            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8A4FFF] focus:border-transparent" />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 text-[#8A4FFF] focus:ring-[#8A4FFF] border-gray-300 rounded" />
                                <label className="ml-2 block text-sm text-gray-700">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-[#8A4FFF] hover:underline">Forgot password?</a>
                        </div>

                        <button className="w-full py-2 px-4 mt-6 bg-[#FF4B4B] text-white rounded-lg hover:bg-red-600 transition duration-300 font-semibold">
                            Log in
                        </button>

                        <p className="text-xs text-gray-500 mt-4 text-center">
                            By logging in, you agree to our <a href="#" className="text-[#8A4FFF] hover:underline">Terms of Service</a> and <a href="#" className="text-[#8A4FFF] hover:underline">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>

        </main>
    )
}