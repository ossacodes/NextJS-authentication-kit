/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";

export default function Login13() {

    return (
        <main style={{
            backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px"
        }} className="bg-teal-200 text-black min-h-screen flex items-center justify-center p-4 font-['Press_Start_2P']">
        <div className="w-full max-w-md bg-white border-4 border-black retro-shadow">
            <div className="bg-purple-600 text-white p-4 text-center text-xl border-b-4 border-black">
                LOGIN.EXE
            </div>
            
            <div className="p-6 bg-gray-100">
                <div className="mb-6 text-center">
                    <img src="https://cdn.dribbble.com/userupload/14734806/file/original-663a321c94d2b21630735f4cf2ea7f15.png?resize=640x480&vertical=center" alt="Retro Computer" className="pixelated w-16 h-16 mx-auto mb-4"/>
                    <span className="inline-block bg-yellow-300 text-black p-2 text-xs">Welcome back, User!</span>
                    <p className="mt-2 text-xs">Enter your credentials</p>
                </div>
    
                <form>
                    <div className="mb-4">
                        <label  className="block text-xs mb-1">USERNAME:</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border-2 border-black bg-white text-sm" placeholder="_username"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-xs mb-1">PASSWORD:</label>
                        <input type="password" id="password" name="password" className="w-full p-2 border-2 border-black bg-white text-sm" placeholder="********"/>
                    </div>
                    <div className="flex items-center justify-between mb-6 text-xs">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="h-4 w-4 border-2 border-black"/>
                            <label className="ml-2 block">Remember me</label>
                        </div>
                        <a href="#" className="text-blue-600 underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full py-2 bg-green-500 text-white border-2 border-black retro-shadow hover:bg-green-600 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 text-sm">
                        ENTER SYSTEM
                    </button>
                </form>
                
                <p className="mt-6 text-xs text-center">
                    New user? <Link href="signup-13" className="text-blue-600 underline">Create account</Link>
                </p>
            </div>
        </div>
        
        <div className="fixed bottom-4 right-4 bg-black text-green-400 p-2 text-xs animate-pulse">
            © 1995 RETRO SYSTEMS
        </div>
    </main >
    )
}