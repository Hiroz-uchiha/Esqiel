'use client';
import Link from 'next/link'
import React from 'react'

const Beranda = () => {
  return (
    <div className=' bg-purple-100 mb-3 p-3 text-black'>
      <ul className=' flex space-x-10 justify-center'>
        <li>
           <Link href="/Mysql">Mysql</Link> 
        </li>
        <li>
          <Link href="/Mongodb">Mongodb</Link>
        </li>
        <li>
          <Link href="/Tentang">Tentang</Link>
        </li>
      </ul>
    </div>
  )
}

export default Beranda
