import { FaCheckCircle } from "react-icons/fa";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import PropTypes from "prop-types";

const MainContent = ({data, toggleHidden, hidden}) => {
  return (
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
                <button onClick={() => {toggleHidden(!hidden)}}>Show {hidden ? 'more' : 'less'} <IoIosArrowDown className={`${hidden ? 'inline' : 'hidden'}`} />
                <IoIosArrowUp className={`${hidden ? 'hidden' : 'inline'}`}/></button>
            ): (<button onClick={() => {toggleHidden(!hidden)}}>Show {hidden ? 'more' : 'less'}</button>)}</div>
            <div className={`${hidden ? 'hidden' : ''} mt-2 text-slate-500`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
  )
}

MainContent.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string,
        originalPrice: PropTypes.string,
        isBestChoice: PropTypes.bool,
        isBestValue: PropTypes.bool,
        exclusiveFeatures: PropTypes.array,
        offer: PropTypes.string,
        highlights: PropTypes.string,
        highlightRatings: PropTypes.object,
    }),
    toggleHidden: PropTypes.func.isRequired,
    hidden: PropTypes.bool.isRequired
}

export default MainContent