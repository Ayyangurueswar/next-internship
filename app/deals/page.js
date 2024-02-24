import Breadcrumbs from "../ui/Breadcrumbs"
import RelatedDeals from "../ui/RelatedDeals";
import { API_URL } from "../config";

const page = async () => {
  const res = await fetch(`${API_URL}/api/relateDeals`);
  const deals = await res.json();
  return (
    <div className="w-full px-24 py-8">
        <h1 className="text-4xl">Best Deals</h1>
        <hr className="w-full h-0.5 bg-slate-500 mt-3"/>
        <Breadcrumbs/>
        <div className="w-full flex md:flex-row flex-col justify-between">
            {
              deals.map((item, i) => (
                <RelatedDeals key={i} data={item}/>
              ))
            }
        </div>
    </div>
  )
}

export default page