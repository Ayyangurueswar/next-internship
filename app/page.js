import { FcGoogle } from "react-icons/fc";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { SiTrustpilot, SiWebpack } from "react-icons/si";
import { FaWpbeginner, FaDatabase, FaRobot } from "react-icons/fa";
import Plans from "./ui/Plans";
import Link from "next/link";
import { plans } from "./helperFunc/functions";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between md:h-full md:w-full w-screen">
      <div className="w-full px-24 py-8">
        <h1 className="text-5xl font-normal">Best Website builders in the US</h1>
        <hr className="w-full h-0.5 bg-slate-500 mt-3"/>
        <div className="my-14">
          <h2 className="text-center text-3xl mb-8">Industry recogonised web hosting solutions</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-2">
              <p><FcGoogle className="inline"/> Google</p>
              <p className="text-yellow-500"><IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/></p>
              <p className="text-sm">Rating: <span className="font-bold">4.8/5</span> | <span className="font-bold">1,237</span> reviews</p>
            </div>
            <div className="flex flex-col gap-2">
              <p><SiTrustpilot className="inline text-green-500"/> Trustpilot</p>
              <p className="text-yellow-500"><IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStarHalf className="inline"/></p>
              <p className="text-sm">Rating: <span className="font-bold">4.5/5</span> | <span className="font-bold">1,245</span> reviews</p>
            </div>
            <div className="flex flex-col gap-2">
              <p><FaWpbeginner className="inline"/> wpbeginner</p>
              <p className="text-yellow-500"><IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/></p>
              <p className="text-sm">Rating: <span className="font-bold">4.6/5</span> | <span className="font-bold">1,537</span> reviews</p>
            </div>
            <div className="flex flex-col gap-2">
              <p><FcGoogle className="inline"/> Google</p>
              <p className="text-yellow-500"><IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/></p>
              <p className="text-sm">Rating: <span className="font-bold">4.7/5</span> | <span className="font-bold">1,227</span> reviews</p>
            </div>
          </div>
        </div>
        <h1 className="text-center text-3xl mb-8">Pick your plan</h1>
        <div className="flex flex-col items-center justify-between md:flex-row w-full gap-8 h-full">
            {
              plans.map((plan, idx) => (
                <Plans data={plan} key={idx}/>
              ))
            }
        </div>
        <h1 className="text-center text-3xl my-10" id="services">Services</h1>
        <div className="flex w-full items-center justify-between mb-8">
            <div className="flex items-center justify-center flex-col gap-4 w-1/4">
              <SiWebpack className="text-5xl" />
              <h5>Hosting for all</h5>
              <p className="text-slate-500">We offer a wide range of services to help you get your website online.</p>
              <Link href='/hosting-for-all' className="text-white bg-blue-600 p-3 text-center rounded-xl w-full">View more</Link>
            </div>
            <div className="flex items-center justify-center flex-col gap-4 w-1/4">
              <FaDatabase className="text-5xl text-blue-700" />
              <h5>Data center</h5>
              <p className="text-slate-500">We offer a wide range of services to help you get your website online.</p>
              <Link href='/data-center' className="text-white bg-blue-600 p-3 text-center rounded-xl w-full">View more</Link>
            </div>
            <div className="flex items-center justify-center flex-col gap-4 w-1/4">
              <FaRobot className="text-5xl text-red-600" />
              <h5>Robotic Automation</h5>
              <p className="text-slate-500">We offer a wide range of services to help you get your website online.</p>
              <Link href='/robotic-automation' className="text-white bg-blue-600 p-3 text-center rounded-xl w-full">View more</Link>
            </div>
        </div>
      </div>
    </main>
  );
}
