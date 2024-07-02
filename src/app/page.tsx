/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Login1 from "./auth/login-1/page";
import Link from "next/link";

export default function Home() {
  const dataList = Array.from({ length: 22 }, (_, index) => ({
    id: index + 1,
    title: `Auth ${index + 1}`,
    imagePath: `/auth/login-${index + 1}.png`,
  }));
  return (
    <main className="landing-body text-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* <!-- Logo --> */}
          <div className="flex justify-center mb-8">
            <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v8H5V6z" clip-rule="evenodd" />
            </svg>
          </div>

          {/* <!-- Main Content --> */}
          <div className="text-center mb-16 rounded-xl p-8">
            <h1 className="text-5xl font-bold mb-6">20+ Auth Page Templates</h1>
            <p className="text-3xl mb-4">for <span className="line-through text-gray-500">$99</span> <span className="text-green-400 font-semibold">just $49!</span></p>
            <p className="text-xl mb-8">Best layouts, responsiveness, different styles and designs. Yours forever.</p>
            <p className="text-gray-400 text-sm mb-8">
              20+ authentication pages built with Next.js and Tailwind CSS.<br /> Boost your development speed and create beautiful, responsive auth experiences.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Get them now
            </button>
          </div>

          {/* <!-- Featured On Section --> */}
          <div className="mb-16 landing-glass rounded-xl p-8">
            <p className="text-center text-gray-400 mb-4">AUTHOR FEATURED ON</p>
            <div className="flex justify-center space-x-8">
              <img src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/4fe74f31-5a41-449a-a46b-b1016d6b06e3.png" alt="Product Hunt" className="h-14 opacity-50 hover:opacity-100 transition-opacity" />
              <img src="https://taskeo.co/blog/wp-content/uploads/2018/09/betalist-300x154.png" alt="Beta List" className="h-14 opacity-50 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* <!-- Template Previews --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataList.map((data) => (
              <Link key={data.id} href={`/auth/login-${data.id}`}>
                <div key={data.id} className="landing-glass p-4 rounded-lg">
                  <img src={data.imagePath} alt="Template 1" className="w-full rounded-lg mb-4" />
                  <p className="text-lg font-semibold">{data.title}</p>
                </div>
              </Link>

            ))}

          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <footer className="landing-glass mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2024 AuthTemplates. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>

  );
}
