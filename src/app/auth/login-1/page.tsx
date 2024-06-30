'use client'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function  Login1() {
    const formRef = useRef(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate logo
            gsap.to('.logo', {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: 'bounce',
                delay: 0.2
            })

            // Animate welcome text
            gsap.to('h2, p', {
                duration: 1,
                y: 0,
                opacity: 1,
                delay: 0.5
            })

            // Animate form
            gsap.to('form', {
                duration: 1,
                y: 0,
                opacity: 1,
                delay: 0.8
            })

            // Animate social login
            gsap.to('.social-login', {
                duration: 1,
                y: 0,
                opacity: 1,
                delay: 1
            })
        }, formRef)

        return () => ctx.revert()
    }, [])

    return (
        <main className="bg-gray-900 min-h-screen flex items-center justify-center font-['Poppins']">
            <div ref={formRef} className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50"></div>
                <div className="absolute inset-0 backdrop-blur-3xl"></div>

                <div className="relative z-10">
                    <div className="text-center mb-8">
                        <div className="logo w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center p-1 animate-pulse opacity-0 translate-y-[-50px]">
                            <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-3xl font-semibold text-white mb-2 opacity-0 translate-y-[20px]">Welcome Back</h2>
                        <p className="text-gray-300 text-sm opacity-0 translate-y-[20px]">Don&apos;t have an account yet? <Link href="signup-1" className="text-blue-400 hover:text-blue-300 transition-colors">Sign up</Link></p>
                    </div>

                    <form className="space-y-6 opacity-0 translate-y-[20px]">
                        <div className="relative">
                            <input type="email" placeholder="Email address" className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <div className="relative">
                            <input type="password" placeholder="Password" className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300 transform hover:scale-105">Login</button>
                    </form>

                    <div className="social-login mt-8 text-center opacity-0 translate-y-[20px]">
                        <p className="text-gray-400 text-sm mb-4">Or continue with</p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </button>
                            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z" /></svg>
                            </button>
                            <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
