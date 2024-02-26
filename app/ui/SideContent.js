import Link from "next/link"
import { GiInfo } from "react-icons/gi"
import PropTypes from "prop-types"

const SideContent = ({data, stars}) => {
  return (
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
  )
}

SideContent.propTypes = {
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
    stars: PropTypes.arrayOf(PropTypes.element),
}

export default SideContent