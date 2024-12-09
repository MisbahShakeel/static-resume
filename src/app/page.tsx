import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Section */}
          <div className="bg-gray-800 text-white p-8 space-y-6">
            {/* Profile Image */}
            <div className="flex justify-center">
              <Image
                src="/img1.png"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full border-4 border-white"
              />
            </div>

            {/* About Section */}
            <div>
              <h2 className="text-xl font-bold">About Me</h2>
              <p className="mt-4 text-sm">
                Hi! I'm a web Developer. I have good skills in HTML, CSS and JavaScript
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div>📞 +123-456-7890</div>
              <div>📧 hello@reallygreatsite.com</div>
              <div>📍 123 Anywhere St., Any City</div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl font-bold">Language</h2>
              <ul className="mt-4 space-y-2">
                <li>English</li>
                <li>Arabic(basic)</li>
                <li>Urdu</li>
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <h2 className="text-xl font-bold">Expertise</h2>
              <ul className="mt-4 space-y-2">
                <li>Management Skills</li>
                <li>Creativity</li>
                <li>Leadership</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-2 p-8">
            {/* Name and Role */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800">Misbah Shakeel</h1>
              <h4 className="text-lg text-gray-500 mt-2">Web Developer</h4>
            </div>

            {/* Experience */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
                Experience
              </h2>
              <div className="mt-4 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">
                    Web Developer
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    1 year of Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
                Education
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">
                    Private College
                  </h4>
                  <p className="text-gray-600">
                    Intermediate from Pre-Medical (2019-2021)
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">
                    Web Developer
                  </h4>
                  <p className="text-gray-600">
                    Saylani Mass IT Tranning (2022-2023)
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
                Skills Summary
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700">HTML</h4>
                  <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-2">
                    <div className="bg-blue-600 h-4 w-[78%]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700">CSS</h4>
                  <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-2">
                    <div className="bg-blue-600 h-4 w-[81%]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700">JavaScript</h4>
                  <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-2">
                    <div className="bg-blue-600 h-4 w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700">Typescript</h4>
                  <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-2">
                    <div className="bg-blue-600 h-4 w-[65%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
