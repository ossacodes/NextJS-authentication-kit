import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';

export default function Signup6() {
    return (
        <main className="bg-white text-black min-h-screen flex items-center justify-center p-4">
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                {/* <!-- Left side - Promotional content --> */}
                <div className="w-full md:w-1/2 bg-black p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Banking That&apos;s Always On Your Side</h1>
                        <p className="text-gray-300 mb-8">Dex Bank serves as a financial platform for managing both your business finances and personal funds.</p>
                    </div>
                    <div className="bg-slate-700 rounded-xl p-4 mb-8">
                        <p className="text-gray-300 mb-4">&quot;Dex Bank has transformed the way I manage my finances, making it a delightful experience. It&apos;s been incredibly helpful for monitoring my spending and setting achievable financial objectives.&quot;</p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full mr-3">
                                <PersonIcon />
                            </div>
                            <div>
                                <p className="font-semibold text-white">Joe M.</p>
                                <p className="text-sm text-gray-300">Sales Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    </div>
                </div>

                {/* <!-- Right side - Login form --> */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Dex BANK</h2>
                    <p className="text-center text-gray-600 mb-8">Let&apos;s Sign You Up</p>
                    <form className="space-y-6 lg:px-20 text-sm">
                        <div>
                            <input type="text" placeholder="Username" className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email address" className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent" />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent" />
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">Sign up</button>
                    </form>
                    <div className="mt-8">
                        <p className="text-center text-sm text-gray-600 mb-4">Or sign up with</p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            </button>
                            <button className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-100 transition">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-sm text-gray-600">
                        Already have an account? <Link href="login-6" className="text-black font-semibold hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </main>
    )
}