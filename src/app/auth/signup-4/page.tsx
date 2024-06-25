import Link from "next/link";

export default function Signup4() {
    return (
        <main className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="flex flex-col w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-xl md:flex-row">
                <div className="w-full p-8 md:w-1/2 md:p-12">
                    <div className="mb-8">
                        <div className="flex items-center justify-center w-12 h-12 mb-6 bg-black shadow-lg bg-gradient-to-r rounded-xl">
                            <span className="text-xl font-bold text-white">M</span>
                        </div>
                        <h2 className="mb-2 text-3xl font-bold text-gray-800">Welcome back</h2>
                        <p className="text-gray-600">Please enter your details to sign in.</p>
                    </div>
                    <form className="space-y-6 text-black">
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
                            <input type="text" id="username" placeholder="Username" name="username" className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" placeholder="Email" name="email" className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Password" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" name="remember" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                                <label className="ml-2 text-sm text-gray-600">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-purple-600 transition hover:text-purple-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full py-3 text-white transition bg-black rounded-lg shadow-md bg-gradient-to-r hover:bg-slate-800">Sign up</button>
                    </form>
                    <p className="mt-8 text-sm text-center text-gray-600">
                        Already have an account? <Link href="login-4" className="font-medium text-purple-600 transition hover:text-purple-500">Login</Link>
                    </p>
                </div>

                {/* <!-- Right side - Gradient background with links --> */}
                <div className="flex flex-col justify-center w-full p-8 text-white bg-black md:w-1/2 bg-gradient-to-br to-red-500 md:p-12">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 cursor-pointer group">
                            <div className="p-3 bg-white rounded-full shadow-md bg-opacity-20">
                                <i className="text-lg fas fa-book"></i>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">Visit our Support Center</h3>
                                <p className="text-sm text-white text-opacity-80">Get guidance from our Support team.</p>
                            </div>
                            <div className="transition transform opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer group">
                            <div className="p-3 bg-white rounded-full shadow-md bg-opacity-20">
                                <i className="text-lg fas fa-clock"></i>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">View our Product Roadmap</h3>
                                <p className="text-sm text-white text-opacity-80">Browse and vote on what&apos;s next.</p>
                            </div>
                            <div className="transition transform opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer group">
                            <div className="p-3 bg-white rounded-full shadow-md bg-opacity-20">
                                <i className="text-lg fas fa-bell"></i>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">Check out the latest releases</h3>
                                <p className="text-sm text-white text-opacity-80">See new features and updates.</p>
                            </div>
                            <div className="transition transform opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 cursor-pointer group">
                            <div className="p-3 bg-white rounded-full shadow-md bg-opacity-20">
                                <i className="text-lg fas fa-users"></i>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">Join our Slack Community</h3>
                                <p className="text-sm text-white text-opacity-80">Discuss with hundreds of Corellium users.</p>
                            </div>
                            <div className="transition transform opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}