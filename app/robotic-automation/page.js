import Breadcrumbs from "../ui/Breadcrumbs"
import { FaReact, FaArrowRight } from "react-icons/fa"
import { IoRocketSharp } from "react-icons/io5";
import { IoIosCloudDone } from "react-icons/io";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full px-24 py-8">
        <h1 className="text-5xl">Robotic Automation</h1>
        <hr className="w-full h-0.5 bg-slate-500 my-3"/>
        <Breadcrumbs/>
        <div className="p-6">
            <p className="text-2xl text-center">
            Go SaaS all the way with Automation Cloud Robots: the fastest, easiest way to build and run unattended robots in Automation Cloud
            </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between my-12">
            <div className="flex h-20 w-1/3">
                <FaReact className="w-full h-full"/>
                <p className="w-3/4">Instant, limitless robot power with zero infrastructure</p>
            </div>
            <div className="flex h-20 w-1/3">
                <IoRocketSharp className="w-full h-full text-orange-600"/>
                <p className="w-3/4">Serverless or VM-based</p>
            </div>
            <div className="flex h-20 w-1/3">
                <IoIosCloudDone className="w-full h-full text-blue-600"/>
                <p className="w-3/4">Delivered and managed from Automation Cloud</p>
            </div>
        </div>
        <div className="w-full flex items-center justify-center">
            <Link href='/' className="bg-blue-500 text-white px-6 py-4 rounded-lg group">
                <span>Learn more</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300 ease-out inline"/>
            </Link>
        </div>
        
    </div>
  )
}

export default page