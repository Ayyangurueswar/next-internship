import Link from "next/link"


const Footer = () => {
  return (
    <div className="w-full h-3/5 bg-slate-950 flex justify-between text-slate-200 md:px-40 md:py-10">
        <div className="flex md:gap-32">
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
        <select className=" bg-transparent h-6 my-auto md:mr-24">
            <option value="US" className="text-black">United States</option>
            <option value="IN" className="text-black">India</option>
            <option value="UK" className="text-black">United Kingdom</option>
        </select>
    </div>
  )
}

export default Footer