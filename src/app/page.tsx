'use client'

import Image from "next/image";
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";




export default function Home() {

 
 
  return (
    <div id="resume" className="main bg-white h-full">
    <form className="px-2 md:px-[20%] py-12">
      <div>
        <div className="w-[180px] h-[180px] bg-blue-950 border rounded-md">
        </div>
      </div>
      <div className="flex">
        <div className="w-[250px] sm:w-[200px] md:w-[275px] lg:w-[200px] h-[200px] border-[4.5px] border-white  rounded-full relative bottom-[95px] left-10">
        <div className="w-[200px] h-[200px] border-[5px] border-blue-950 rounded-full overflow-hidden absolute -left-[0.5px] top-[1px]">
        <Image src="/my_img.jpg" alt="img" width={200} height={200} className="object-cover"/>
        </div>
        </div>
        <div className="relative bottom-[160px] sm:bottom-20 lg:left-[40px] sm:left-[100px] right-10 sm:right-0">
          <h1 className="w-[100px] sm:w-full text-blue-950 uppercase text-3xl sm:text-5xl font-bold">Misbah <span className="lg:relative top-14 right-40"> Shakeel</span></h1>
          <h3 className="w-full sm:mt-4 ml-4 lg:mt-14 lg:ml-28">Web Developer</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* left side */}
        <div>
          {/* about */}
          <section>
            <div className="relative bottom-20 text-blue-950">
              <h2 className="ml-24 font-serif font-bpld text-xl">About Me</h2>
              <p className="w-[250px] h-[100px] leading-6 font-sans ml-11">Hi! I am a <span className="text-orange-950 font-serif size-4 font-bold uppercase"> Web Developer</span> I completed my web development from <span>SMIT</span>
              . I have good experience in HTML, CSS, JavaScript, React and TypeScript and NextJS. I am a student of <span className="font-bold uppercase">Govrnor Initiative</span></p>
           <div className="flex mt-24 ml-4">
            <div>
              <ul className="flex flex-col gap-4">
              <li className="h-8 w-8 bg-blue-950 rounded-full"><FaPhone className="text-white mt-2 ml-2"/></li>
              <li className="h-8 w-8 bg-blue-950 rounded-full"><FaEnvelope className="text-white mt-2 ml-2"/></li>
              <li className="h-8 w-8 bg-blue-950 rounded-full"><FaGithub className="text-white mt-2 ml-2"/></li>
              </ul>
            </div>
            <div>
            <ul className="flex flex-col gap-6 ml-4 mt-1">
              <li>+92 318-2312715</li>
              <li>misbahshakeel984@gmail.com</li>
              <li><a href="https://github.com/MisbahShakeel">github.com/MisbahShakeel</a></li>
            </ul>
            </div>
           </div>
            </div>
          </section>
          {/* Languages */}
          <div className="text-blue-950">
            <div className="flex flex-col w-[270px] h-[40px] bg-blue-950 text-center justify-center">
              <h2 className="text-white font-bold">LANGUAGES</h2>
            </div>
            <ul className="mt-6 list-disc ml-10">
              <li>English</li>
              <li>Urdu</li>
            </ul>
          </div>
           {/* Expertise  */}
           <div className="mt-10 text-blue-950">
            <div className="flex flex-col w-[270px] h-[40px] bg-blue-950 text-center justify-center">
              <h2 className="text-white font-bold">EXPERTISE</h2>
            </div>
            <ul className="mt-6 list-disc ml-10">
              <li>HML & CSS</li>
              <li>JavaScript</li>
              <li>TypeScript </li>
              <li>React.JS</li>
              <li>Next.JS</li>
            </ul>
          </div>
        </div>
       
        {/* right side */}
        <div  className="flex flex-col gap-4 text-blue-950">
            
        {/* Education */}
        <div>
            <div className="flex flex-col w-[300px] h-[40px] bg-blue-950 text-center justify-center">
              <h2 className="text-white font-bold">EDUCATION</h2>
            </div>
            <div className="ml-10 mt-4">
            <h4 className="font-serif font-bold text-2xl">Private College</h4>
            <p className="font-semibold">Intermediate From Pre-Medical</p>
            <p className="text-sm">2020-2022</p>
            </div>
            <div className="ml-10 mt-4">
            <h4 className="font-serif font-bold text-2xl">GIAIC</h4>
            <p className="font-semibold">Web 3.0, Metaverse and AI</p>
            <p className="text-sm">2024-2026</p>
            </div>
            </div>
            {/* Skills */}
            <div className="mb-[320px] sm:mb-10">
            <div className="flex flex-col w-[300px] h-[40px] bg-blue-950 text-center justify-center">
              <h2 className="text-white font-bold">Skills</h2>
              </div>
            <div className="flex flex-row mt-8 gap-6">
              <h4>HTML</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px] ml-7">
                <div className="bg-blue-950 h-4 w-[85%]"></div>
              </div>
              <h4>85%</h4>
            </div>
            <div className="flex flex-row mt-8 gap-6">
              <h4>CSS</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px] ml-10">
                <div className="bg-blue-950 h-4 w-[75%]"></div>
              </div>
              <h4>75%</h4>
            </div>
            <div className="flex flex-row mt-8 gap-6">
              <h4>JavaScript</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px]">
                <div className="bg-blue-950 h-4 w-[80%]"></div>
              </div>
              <h4>80%</h4>
            </div>
            <div className="flex flex-row mt-8 gap-4">
              <h4>React</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px] ml-10">
                <div className="bg-blue-950 h-4 w-[80%]"></div>
              </div>
              <h4>80%</h4>
            </div>
            <div className="flex flex-row mt-8 gap-4">
              <h4>Next.JS</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px] ml-6">
                <div className="bg-blue-950 h-4 w-[80%]"></div>
              </div>
              <h4>80%</h4>
            </div>
            </div>
            </div>
      </div>
      
    </form>
   
    </div>
  );

}

