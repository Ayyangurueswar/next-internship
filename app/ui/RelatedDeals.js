import Image from "next/image"
import Link from "next/link"

const RelatedDeals = ({data}) => {
  return (
    <div className="flex flex-col">
        <div className="mx-auto">
            <Image src={data.image} alt="Image" width={140} height={100}/>
        </div>
        <div className="flex gap-4 mt-5">
        <span className="p-1 rounded bg-slate-200 text-blue-900">{`${data.offer} off`}</span>
        {data.isLimited && <span className="p-1 rounded bg-slate-200 text-blue-900">Limited time</span>}
        </div>
        <h1 className="text-slate-500 font-bold my-2 text-center">{data.title}</h1>
        <p className="text-slate-500">{data.description}</p>
        <div className="flex gap-3 items-baseline my-2">
            <span className="text-slate-500 text-xl">{data.price}</span>
            <span className="text-slate-400 text-sm">{data.originalPrice}</span>
            <span className=" text-pink-600 text-sm">({data.offer} off)</span>
        </div>
        <Link href='/' className="text-white bg-blue-600 p-3 text-center rounded-xl">View Deal</Link>
    </div>
  )
}

export default RelatedDeals