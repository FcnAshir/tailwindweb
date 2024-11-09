import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-[#A29875] p-6'>
        <h1 className='text-[#FFFFFF] text-4xl font-extrabold text-pretty'>Purity</h1>
        <ul className='flex text-end justify-end gap-8 font-extralight text-white'><li><Link href={"/home"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/contact"}>Contact Us</Link></li></ul>

    </div>
  )
}
export default Header;