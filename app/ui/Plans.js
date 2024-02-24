import Link from "next/link"
import { FaCheckCircle } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";

export const Plans = ({data}) => {
  return (
    <div className="h-full w-3/4 hover:shadow-xl hover:shadow-slate-400 hover:scale-105 transition-all duration-300 rounded">
        {
            data.isPopular && ( 
                    <div className="bg-purple-500 text-white rounded-r-xl rounded-l rounded-bl-none w-32 px-1 py-2">
                        <IoDiamondOutline className="inline"/> Best Value
                    </div>
                
                )
        }
        {
            data.title === 'Cloud startup' && ( 
                    <div className="bg-purple-500 text-white rounded-r-xl rounded-l rounded-bl-none w-32 px-1 py-2">
                        <GoTrophy className="inline"/> Best Choice
                    </div> 
                
                )
        }
        <div className={`rounded border-2 border-opacity-30 ${data.isPopular ? ' border-purple-500 rounded-tl-none' : 'border-slate-600'} p-4`}>
        <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="font-bold text-2xl mb-4">{data.title}</h2>
            <p className="text-slate-600 text-center">{data.description}</p>
            <p><del className="text-slate-500">{data.originalPrice}</del> 
            <span className="p-3 text-blue-800 bg-slate-200 rounded-xl ml-4">{data.offer}</span></p>
            <p className="text-center text-4xl font-semibold">{data.price}</p>
            <Link href='/plans' className="text-white bg-blue-600 p-3 text-center rounded-xl w-full">View Plan</Link>
            <hr className=" h-0.5 bg-slate-200 w-full"/>
            <h3 className="font-semibold">Top features</h3>
            <ul>
                {
                    data.features.map((feature, idx) => (
                        <li className="mb-4" key={idx}><FaCheckCircle className="inline text-green-500"/> {feature}</li>
                    ))
                }
            </ul>
        </div>
    </div>
    </div>
    
  )
}

export default Plans