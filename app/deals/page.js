import Breadcrumbs from "../ui/Breadcrumbs"
import RelatedDeals from "../ui/RelatedDeals";
import { relatedDeals } from "../helperFunc/functions";

const page = async () => {
  return (
    <div className="w-full px-24 py-8">
        <h1 className="text-4xl">Best Deals</h1>
        <hr className="w-full h-0.5 bg-slate-500 mt-3"/>
        <Breadcrumbs/>
        <div className="w-full flex md:flex-row flex-col justify-between">
            {
              relatedDeals.map((item, i) => (
                <RelatedDeals key={i} data={item}/>
              ))
            }
        </div>
    </div>
  )
}

export default page