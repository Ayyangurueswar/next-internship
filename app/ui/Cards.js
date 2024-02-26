'use client';
import Image from "next/image"
import Link from "next/link";
import { IoIosStar, IoIosStarHalf, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";
import { useState } from "react";

const Cards = ({data, num}) => {
  const stars = [];
  let i;
  for (i = 0; i < Math.floor(data.stars); i++) {
    stars.push(<IoIosStar key={i}/>);
  }
  if(i !== data.stars){
    stars.push(<IoIosStarHalf key={i+1}/>);
  }
  const [hidden, setHidden] = useState(true);
  return (
    <div className={`${data.isBestChoice ? 'md:mb-10 mb-20' : 'mb-20'}`}>
        {
            data.isBestChoice && (
                <div className="bg-orange-500 text-white rounded-r-xl w-32 px-1 py-2">
                    <GoTrophy className="inline"/> Best Choice
                </div>
            )
        }
        {
            data.isBestValue && (
                <div className="bg-orange-500 text-white rounded-r-xl w-32 px-1 py-2">
                    <IoDiamondOutline className="inline"/> Best Value
                </div>
            )
        }
        <div className="w-full h-3/5 flex gap-5 md:flex-row flex-col items-center justify-center">
        <div className="rounded-full border-2 h-9 w-10 text-center text-slate-500 mt-5 flex items-center justify-center">
            <span>{num+1}</span>
        </div>
        <div className="md:w-1/6 w-1/2 md:max-lg:w-1/3 mx-auto">
            <Image src={data.image} alt="Image" width={400} height={350} className="h-full w-full"/>
            <p className="text-center text-sm text-slate-500">{data.alt}</p>
        </div>
        <div className="w-full h-full flex justify-between md:flex-row flex-col gap-8 md:gap-0 max-md:items-center">
        <div className="md:w-3/5 w-full">
            <div className="mb-2">
                <span className="font-bold text-slate-600">{data.title}</span> - <span className="text-slate-600">{data.description}</span>
            </div>
            {data.offer && (
                <span className="p-1 rounded bg-slate-200 text-blue-900">{`${data.offer} off`}</span>
            )}
            <h4 className="font-bold">Main highlights</h4> 
            <div className="p-2 mb-4">
                {
                    data.highlights ? (
                        <p className="text-slate-600">[What You Get]: {data.highlights}</p>
                    ) : (
                        <div className="rounded-lg p-2 bg-orange-50 flex gap-4 flex-col">
                            {
                                Object.keys(data.highlightRatings).map((rating, idx) => (
                                    <p key={idx}>
                                        <span className="bg-white text-blue-500 p-1 rounded">{data.highlightRatings[rating]}</span> <span className="text-slate-500">{rating}</span>
                                    </p>
                                ))
                            }
                        </div>
                    )
                }
            </div>
            {
                data.exclusiveFeatures && (
                    <div className="mt-2">
                        <h5>Why we love it</h5>
                        <ul className=" list-none my-2 text-slate-500">
                            {
                                data.exclusiveFeatures.map((feature, idx) => (
                                    <li key={idx}><FaCheckCircle className="inline text-blue-500"/> {feature}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
            <div className="text-blue-600">{data.isBestChoice || data.isBestValue ? (
                <button onClick={() => {setHidden(!hidden)}}>Show {hidden ? 'more' : 'less'} <IoIosArrowDown className={`${hidden ? 'inline' : 'hidden'}`} />
                <IoIosArrowUp className={`${hidden ? 'hidden' : 'inline'}`}/></button>
            ): (<button onClick={() => {setHidden(!hidden)}}>Show {hidden ? 'more' : 'less'}</button>)}</div>
            <div className={`${hidden ? 'hidden' : ''} mt-2 text-slate-500`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        <div className="md:w-1/3 flex flex-col items-center justify-between w-3/4">
            <div className="w-3/4 md:w-1/2 flex flex-col items-center justify-center gap-2 bg-blue-50 py-4 rounded mb-8 md:max-lg:w-3/4 md:mb-0 relative">
                <p className="text-4xl text-blue-900">{data.rating}</p>
                <p className="text-blue-900 text-center">{data.remarks}</p>
                <div className="flex text-yellow-400">
                    {
                        stars.map((star) => star)
                    }
                </div>
                {(data.isBestChoice || data.isBestValue) && (<GiInfo className="absolute top-2 right-6 text-xs text-slate-400" title="Info"/>)}
            </div>
            <Link href={data.url} className="text-white py-3 text-center bg-blue-600 rounded-xl w-full">View</Link>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default Cards