'use client'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Login2() {
    const formRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.bg-white', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' })
            gsap.from('form > *', { duration: 0.6, y: 20, opacity: 0, stagger: 0.1, delay: 0.3 })
        }, formRef)

        return () => ctx.revert()
    }, [])

    return (
        <main className="font-poppins bg-gradient-to-br from-pastel-pink to-pastel-yellow min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
                <div className="bg-otake-primary text-white p-6 text-center">
                    <h1 className="text-3xl font-bold mb-2">Welcome Otake!</h1>
                    <p className="text-sm opacity-80">Enter your details to access your account</p>
                </div>
                <div className="p-8">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" id="email" placeholder='Email' name="email"
                                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-otake-primary focus:border-transparent transition duration-300 shadow-inner-glow" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" id="password"  placeholder='Password' name="password" 
                                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-otake-primary focus:border-transparent transition duration-300 shadow-inner-glow" />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" name="remember" className=" text-blackh-4 w-4 text-otake-primary focus:ring-otake-primary border-gray-300 rounded" />
                                <label className="ml-2 block text-sm text-gray-700">Remember me</label>
                            </div>
                            <a href="#" className="text-sm text-otake-secondary hover:text-otake-primary transition duration-300">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full bg-otake-primary text-white py-3 px-4 rounded-lg hover:bg-opacity-90 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-otake-primary">
                            Login
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 mb-4">or continue with</p>
                        <button type="button" className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}