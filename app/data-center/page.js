import Link from "next/link"
import Breadcrumbs from "../ui/Breadcrumbs"
import Image from "next/image"
import { FaArrowAltCircleRight } from "react-icons/fa"

const page = () => {
  return (
    <div className="w-full px-24 py-8">
        <h1 className="text-5xl">Data Center</h1>
        <hr className="w-full h-0.5 bg-slate-500 my-3"/>
        <Breadcrumbs/>
        <div className="w-full rounded-xl border-2 border-slate-300 hover:shadow-xl hover:shadow-slate-300
         transition-shadow duration-300 ease-in px-7 py-9 my-5">
            <h1 className="text-4xl mb-10 text-center">
                About our Data Centers
            </h1>
            <p className="text-slate-500">We own and operate data centers all over the world, helping to keep the internet humming 24/7. Learn how our relentless focus on innovation has made our data centers some of the most high-performing, secure, reliable, and efficient data centers in the world.</p>
        </div>
        <div className="w-full flex md:flex-row flex-col h-90 my-10">
            <Image src='/World-Map-PNG-Image.png' alt="map" width={600} height={700}/>
            <div className="my-auto flex flex-col justify-center h-full gap-4">
                <h4 className="text-3xl">Discover our data center locations</h4>
                <p className="text-slate-500">Our data centers are located in 100+ countries and cities across the globe. We offer a wide range of services to help you get your website online.</p>
                <div className="text-blue-500 flex gap-2 items-center group">
                    <Link href='/'>View all locations</Link>
                    <FaArrowAltCircleRight className="inline group-hover:translate-x-1 transition-all duration-300 ease-out"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page