'use client';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Login5() {

    return (
        <div className="bg-gray-100 text-black flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <div className="text-center  mb-6">
                    <Image className="mx-auto mb-4" src="/logo.png" alt="Next.js Logo" width={64} height={64} />

                    <h2 className="text-2xl font-semibold">
                        Welcome back
                    </h2>
                    <p className="text-gray-600">
                        Please enter your details to sign in.
                    </p>
                </div>
                <div className="flex justify-center space-x-4 mb-6">
                    <>
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <GoogleIcon className='fill-black' />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                            <GitHubIcon className='fill-black'  />
                        </div>
                    </>
                </div>
                <div className="flex items-center mb-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-3 text-gray-500">
                        OR
                    </span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">
                            E-Mail Address
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" placeholder="Enter your email..." type="email" />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="password" placeholder="Enter your password..." type="password" />
                        <i className="fas fa-eye absolute right-3 top-10 text-gray-500 cursor-pointer">
                        </i>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <label className="flex items-center">
                            <input className="form-checkbox text-blue-500" type="checkbox" />
                            <span className="ml-2 text-gray-700">
                                Remember me
                            </span>
                        </label>
                        <a className="text-blue-500" href="#">
                            Forgot password?
                        </a>
                    </div>
                    <button type='submit' className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200">
                        Sign in
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Don&apos;t have an account yet?
                        <Link className="text-blue-500 ml-1" href="/auth/signup-5">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
