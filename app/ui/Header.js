'use client';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import Link from 'next/link';

const Header = () => {
  const [term, setTerm] = useState('');
  return (
    <div className="w-full bg-slate-950 text-white h-1/5 p-4 flex items-center justify-center">
        <div className="h-full flex md:flex-row justify-evenly items-center w-4/5 flex-col">
            <div className=" w-60 relative">
              <input className="w-full bg-white text-black p-2 rounded-lg active:z-50" 
              onChange={(e) => {
                setTerm(e.target.value);
              }}/>
              <FaSearch className={`absolute top-1/3 left-0 text-black w-9 ${term ? 'hidden' : ''}`}/>
            </div>
            <div className='flex md:flex-row flex-col gap-8 items-center'>
              <Link href='/#services' className='text-white'>Categories</Link>
              <Link href='/hosting-for-all/hosting' className='text-white'>Website builders</Link>
              <Link href='/deals' className='text-white md:ml-4'>Today&apos;s deals</Link>
            </div>
        </div>
    </div>
  )
}

export default Header