
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";



export default function Home() {
 
  return (
    <div>
    <form className="px-[20%] py-12">
      <div>
        <div className="w-[180px] h-[180px] bg-blue-950 border rounded-md">
        </div>
      </div>
      <div className="flex">
        <div className="w-[200px] h-[200px] border-[4.5px] border-white rounded-full relative bottom-[95px] left-10">
        <div className="w-[200px] h-[200px] border-[5px] border-blue-950 rounded-full overflow-hidden absolute -left-[0.5px] top-[1px]">
          <img src="/img1.png" width={200} height={200} alt="" className="object-cover"/>
        </div>
        </div>
        <div className="relative bottom-20 left-[40px]">
          <h1 className="text-blue-950 uppercase text-5xl font-bold">Misbah <span className="relative top-14 right-40"> Shakeel</span></h1>
          <h3 className="mt-14 ml-28">Web Developer</h3>
        </div>
      </div>
      <div className="flex">
        {/* left side */}
        <div>
          {/* about */}
          <section>
            <div className="relative bottom-20 text-blue-950">
              <h2 className="ml-24 font-serif font-bpld text-xl">About Me</h2>
              <p className="w-[250px] h-[100px] leading-6 font-sans ml-11">Hi! I'm a <span className="text-orange-950 font-mono size-4 font-bold"> Web Developer</span> I completed my web development from <span>SMIT</span>
              . I have good experience in HTML, CSS, JavaScript, React and TypeScript</p>
           <div className="flex mt-10">
            <div>
              <ul className="flex flex-col gap-2">
              <li className="h-8 w-8 bg-blue-950 rounded-full"><FaPhone className="text-white mt-2 ml-2"/></li>
              <li className="h-8 w-8 bg-blue-950 rounded-full"><FaEnvelope className="text-white mt-2 ml-2"/></li>
              <li className="h-8 w-8 bg-blue-950 rounded-full"><FaHome className="text-white mt-2 ml-2"/></li>
              </ul>
            </div>
            <div>
            <ul className="flex flex-col gap-4 ml-4 mt-1">
              <li>+123 456 7890</li>
              <li>misbahshakeel984@gmail.com</li>
              <li>St-4 Karachi, Pkistan</li>
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
              <li>Arabic (basic) </li>
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
              <li>React</li>
            </ul>
          </div>
        </div>
       
        {/* right side */}
        <div>
          {/* Eperience */}
          <div className="relative bottom-20 left-20 text-blue-950">
            <div className="flex flex-col w-[300px] h-[40px] bg-blue-950 text-center justify-center">
              <h2 className="text-white font-bold">EXPERTISE</h2>
            </div>
            <div className="ml-10 mt-4">
            <h4 className="font-serif font-bold text-2xl">Web Developer</h4>
            <h4 className="font-semibold">2022-2023</h4>
            <p className="text-sm w-[280px]">I completed my Web Development From "Saylani Mass IT Tranning.
              I have 1 year of experience as "Front-End-Developer"</p>
            </div>
            </div>
            </div>
        {/* Education */}
        <div className="relative top-28 right-[230px] text-blue-950">
            <div className="flex flex-col w-[300px] h-[40px] bg-blue-950 text-center justify-center">
              <h2 className="text-white font-bold">EDUCATION</h2>
            </div>
            <div className="ml-10 mt-4">
            <h4 className="font-serif font-bold text-2xl">Private College</h4>
            <p className="font-semibold">Intermediate From Pre-Medical</p>
            <p className="text-sm">2020-2022</p>
            </div>
            <div  className="ml-10 mt-4" >
            <h4 className="font-serif font-bold text-2xl">SMIT</h4>
            <p className="font-semibold">Web and Mobile App Development</p>
            <p className="text-sm">2022-2023</p>
            </div>
            </div>
            {/* Skills */}
            <div className="relative top-[384px] right-[530px] text-blue-950">
            <div className="flex flex-col w-[300px] h-[40px] bg-blue-950 text-center justify-center">
              <h2 className="text-white font-bold">Skills</h2>
              </div>
            <div className="flex flex-row mt-8 gap-5">
              <h4 className="">HTML</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px] ml-7">
                <div className="bg-blue-950 h-4 w-[85%]"></div>
              </div>
              <h4>85%</h4>
            </div>
            <div className="flex flex-row mt-8 gap-5">
              <h4 className="">CSS</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px] ml-10">
                <div className="bg-blue-950 h-4 w-[75%]"></div>
              </div>
              <h4>75%</h4>
            </div>
            <div className="flex flex-row mt-8 gap-5">
              <h4 className="">JavaScript</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px]">
                <div className="bg-blue-950 h-4 w-[60%]"></div>
              </div>
              <h4>60%</h4>
            </div>
            <div className="flex flex-row mt-8 gap-5">
              <h4 className="">React</h4>
              <div className="bg-gray-200 w-full h-4 rounded-md overflow-hidden mt-[2px] ml-10">
                <div className="bg-blue-950 h-4 w-[70%]"></div>
              </div>
              <h4>70%</h4>
            </div>
            </div>
      </div>
      
    </form>
    </div>
  );
}
