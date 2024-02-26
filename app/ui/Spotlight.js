import { GoTrophy } from "react-icons/go"
import { IoDiamondOutline } from "react-icons/io5"
import PropType from "prop-types"


const Spotlight = ({bestChoice, bestValue}) => {
  if(bestChoice){
    return (
        <div className="bg-orange-500 text-white rounded-r-xl w-32 px-1 py-2">
                    <GoTrophy className="inline"/> Best Choice
        </div>
    )
  }
  else if(bestValue){
    return (
        <div className="bg-orange-500 text-white rounded-r-xl w-32 px-1 py-2">
                    <IoDiamondOutline className="inline"/> Best Value
        </div>
    )
  }
  else{
    return null;
  }
}

Spotlight.propTypes = {
    bestChoice: PropType.bool,
    bestValue: PropType.bool
}

export default Spotlight