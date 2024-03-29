import Hosting from "@/app/ui/Hosting"
import RelatedDeals from "@/app/ui/RelatedDeals";
import {data, relatedDeals} from '../../helperFunc/functions';

const page = async () => {
  return (
    <div className="w-screen md:px-24 py-8 px-10 md:w-full">
        <h1 className="text-5xl font-normal mb-4">Best Website builders in the US</h1>
        <Hosting data={data}/>
        <h1 className="text-3xl mb-8">Related deals you might like for</h1>
        <div className="flex md:flex-row flex-col md:justify-between gap-10 mx-auto w-full">
            {
              relatedDeals.map((item, i) => (
                <RelatedDeals key={i} data={item}/>
              ))
            }
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center mb-8">
            <p className="text-3xl text-slate-500 font-semibold w-2/5 mb-4 md:mb-0">Sign up and get exclusive special deals</p>
            <div className="flex items-center">
              <input className="h-14 p-5"/>
              <button className="bg-blue-500 text-white rounded-r-lg h-14 p-5 flex items-center justify-center">
                <span>Sign up</span>
              </button>
            </div>
        </div>
    </div>
  )
}

export default page