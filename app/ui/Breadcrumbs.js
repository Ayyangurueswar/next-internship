'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const path = usePathname();
  const pathName = path.split('/').filter((path) => path);
  return (
    <div className="w-full p-2 text-slate-500 flex gap-3">
      <Link href="/">
        Home
      </Link>
      {
        pathName.map((path, index) => {
            const route = `/${pathName.slice(0, index+1).join('/')}`;
            const displayText = path.split('-').reduce((acc, text, idx) => {
                if(idx === 0){
                    return acc + text.charAt(0).toUpperCase() + text.slice(1);
                }
                return acc + ' ' + text;
            }, '');
            return (
              <Link href={route} key={index}>
                <span className="mr-3">&gt;</span>
                {displayText}
              </Link>
            )
        })
      }
    </div>
  )
}

export default Breadcrumbs