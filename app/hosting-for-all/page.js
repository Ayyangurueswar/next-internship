import Link from "next/link"
import Breadcrumbs from "../ui/Breadcrumbs"
import { FaUser } from "react-icons/fa"
import { IoIosStar } from "react-icons/io"
import Faq from "../ui/Faq"
import { FaArrowRight } from "react-icons/fa"

export const page = () => {
  return (
    <div className="w-full px-24 py-8">
        <h1 className="text-5xl font-normal text-center">Premium Web hosting services</h1>
        <hr className="w-full h-0.5 bg-slate-500 my-3"/>
        <Breadcrumbs/>
        <div className="w-full mt-8 flex flex-col justify-center items-center"> 
            <h3 className="text-4xl mb-5">Join 29,993 website owners</h3>
            <Link href='/hosting-for-all/hosting' className="w-1/5 text-white bg-blue-600 py-3 px-9 text-center rounded-md group">
                <span>Get started</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-all ease-out duration-300 inline"/>
            </Link>
        </div>
        <div className="flex w-full gap-8 my-14">
            <div className="flex flex-col justify-between h-60 w-1/2 border-2 border-slate-300 rounded p-5">
                <div className="flex flex-col">
                    <div className="flex gap-4 items-center mb-5">
                        <div className="rounded-full p-3 border-2 border-slate-300">
                            <FaUser />
                        </div>
                        <p>User 1</p>
                    </div>
                    <p>
                    Firstclass Hosting experience specially for WordPress websites and prompt support over chat.
                    </p>
                </div>
                <p className="text-yellow-500"><IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/></p>
            </div>
            <div className="flex flex-col justify-between h-60 w-1/2 border-2 border-slate-300 rounded p-5">
                <div className="flex flex-col">
                    <div className="flex gap-4 items-center mb-5">
                        <div className="rounded-full p-3 border-2 border-slate-300">
                            <FaUser />
                        </div>
                        <p>User 1</p>
                    </div>
                    <p>
                    Firstclass Hosting experience specially for WordPress websites and prompt support over chat.
                    </p>
                </div>
                <p className="text-yellow-500"><IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/></p>
            </div>
            <div className="flex flex-col justify-between h-60 w-1/2 border-2 border-slate-300 rounded p-5">
                <div className="flex flex-col">
                    <div className="flex gap-4 items-center mb-5">
                        <div className="rounded-full p-3 border-2 border-slate-300">
                            <FaUser />
                        </div>
                        <p>User 1</p>
                    </div>
                    <p>
                    Firstclass Hosting experience specially for WordPress websites and prompt support over chat.
                    </p>
                </div>
                <p className="text-yellow-500"><IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/> <IoIosStar className="inline"/></p>
            </div>
        </div>
        <Faq />
    </div>
  )
}

export default page