import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"


const Footer = () => {
  return (
    <div className="w-full bg-slate-950 flex md:justify-between justify-around text-slate-200 md:px-24 md:py-10 px-2 py-2 items-center">
        <div className="flex md:gap-32 gap-4">
            <div>
                <h4 className="font-semibold">CATEGORIES</h4>
                <ul className="text-sm gap-4 list-none">
                    <li className="my-4"><Link href='/hosting-for-all/hosting'>Web builder</Link></li>
                    <li className="mb-4"><Link href='/hosting-for-all'>Hosting</Link></li>
                    <li className="mb-4"><Link href='/data-center'>Data Center</Link></li>
                    <li className="mb-4"><Link href='/robotic-automation'>Robotic-Automation</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold">CONTACT</h4>
                <ul className="text-sm gap-4 list-none">
                    <li className="my-4"><Link href='/'>Contact</Link></li>
                    <li className="mb-4"><Link href='/'>Privacy Policy</Link></li>
                    <li className="mb-4"><Link href='/'>Terms Of Service</Link></li>
                    <li className="mb-4"><Link href='/'>Categories</Link></li>
                    <li className="mb-4"><Link href='/'>About</Link></li>
                </ul>
            </div>
        </div>
        <div className="relative text-white">
            <select className="bg-transparent appearance-none w-32 md:w-40">
              <option value="US" className="text-black">United States</option>
              <option value="IN" className="text-black">India</option>
              <option value="UK" className="text-black">United kingdom</option>
            </select>
            <IoIosArrowDown className="absolute text-2xl top-0 pointer-events-none right-0"/>
          </div>
    </div>
  )
}

export default Footer