'use client';
import Image from "next/image"
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useState } from "react";
import PropTypes from "prop-types";
import Spotlight from "./Spotlight";
import MainContent from "./MainContent";
import SideContent from "./SideContent";

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
        <Spotlight bestChoice={data.isBestChoice} bestValue={data.isBestValue}/>
        <div className="w-full h-3/5 flex gap-5 md:flex-row flex-col items-center justify-center">
        <div className="rounded-full border-2 h-9 w-10 text-center text-slate-500 mt-5 flex items-center justify-center">
            <span>{num+1}</span>
        </div>
        <div className="md:w-1/6 w-1/2 md:max-lg:w-1/3 mx-auto">
            <Image src={data.image} alt="Image" width={400} height={350} className="h-full w-full"/>
            <p className="text-center text-sm text-slate-500">{data.alt}</p>
        </div>
        <div className="w-full h-full flex justify-between md:flex-row flex-col gap-8 md:gap-0 max-md:items-center">
        <MainContent data={data} toggleHidden={setHidden} hidden={hidden}/>
        <SideContent data={data} stars={stars} />
        </div>
        
    </div>
    </div>
  )
}

Cards.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    offer: PropTypes.string,
    highlights: PropTypes.string,
    highlightRatings: PropTypes.object,
    isBestChoice: PropTypes.bool,
    isBestValue: PropTypes.bool,
    exclusiveFeatures: PropTypes.arrayOf(PropTypes.string),
    remarks: PropTypes.string,
  }),
  num: PropTypes.number.isRequired
}

export default Cards