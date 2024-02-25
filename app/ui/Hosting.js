'use client';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GiInfo } from "react-icons/gi";
import Breadcrumbs from "./Breadcrumbs"; 
import Cards from "./Cards";
import { useState } from "react";
import Link from "next/link";


const Hosting = ({data}) => {
  const [displayData, setdisplayData] = useState(data);
  const [classNames, setClassNames] = useState(['bg-slate-50 rounded', 'bg-slate-50 rounded', 'bg-slate-50 rounded', 'bg-slate-50 rounded', 'bg-slate-50 rounded', 'bg-slate-50 rounded']);
  const handleClassNameChange = (i) => {
    setClassNames(classNames.map((cls, idx) => {
      if(idx == i){
        return 'bg-blue-500 text-white rounded'
      }
      return 'bg-slate-50 rounded';
    }));
  }
  const handleChange = (e) => {
    const criteria = e.target.value;
    if(criteria === 'topRatings'){
      setdisplayData(data.sort((a, b) => b.ratings - a.ratings));
    }
    else if(criteria === 'bestChoice'){
      setdisplayData(data.filter((item) => item.isBestChoice));
    }
    else if(criteria === 'bestValue'){
      setdisplayData(data.filter((item) => item.isBestValue));
    }
    else{
      setdisplayData(data);
    }
  }
  const handleButtonChange = (i) =>{
    setdisplayData(data.slice(i, i+2));
  }
  return (
    <div className="w-full">
        <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center border-y-2 border-slate-300 p-4">
          <div className="flex gap-8">
            <div className=" text-slate-500">
                <IoIosCheckmarkCircleOutline className="inline mr-1 text-xl"/> Last updated - February 2022
            </div>
            <div className=" text-slate-500">
                <GiInfo className="inline mr-1 text-xl"/> <Link href='/'>Advertising Disclosure</Link> 
            </div>
          </div>
          <div>
            <select className="text-slate-500 bg-transparent" onChange={handleChange}>
              <option value="topRelevant">Top relevant</option>
              <option value="topRatings">Top ratings</option>
              <option value="bestChoice">Best Choice</option>
              <option value="bestValue">Best Value</option>
            </select>
          </div>
          
        </div>
        <div className="flex flex-col text-slate-500 lg:gap-14 lg:p-5 gap-4 p-2 md:flex-row h-3/4 w-full">
            <button onClick={() => {handleButtonChange(0); handleClassNameChange(0)}} className={`${classNames[0]} p-3`}>
              Tools</button>
            <button onClick={() => {handleButtonChange(1); handleClassNameChange(1)}} className={`${classNames[1]} p-3`}>
              AWS Builder</button>
            <button onClick={() => {handleButtonChange(2); handleClassNameChange(2)}} className={`${classNames[2]} p-3`}>
              Start Build</button>
            <button onClick={() => {handleButtonChange(1); handleClassNameChange(3)}} className={`${classNames[3]} p-3`}>
              Build Supplies</button>
            <button onClick={() => {handleButtonChange(0); handleClassNameChange(4)}} className={`${classNames[4]} p-3`}>
              Tooling</button>
            <button className={`${classNames[5]} p-3`} onClick={() => {handleButtonChange(0); handleClassNameChange(5)}}>
              BlueHosting</button>
        </div>
        <Breadcrumbs />
        <div className="w-full flex flex-col mt-4">
            {
                displayData.map((item, index) => 
                     <Cards key={index} data={item} num={index}/>
                )
            }
        </div>
    </div>
  )
}

export default Hosting