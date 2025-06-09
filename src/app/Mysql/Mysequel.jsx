import React from 'react'
import {URLMysql} from "../DataURL/DataUrl"
import Link from 'next/link'

const Mysequel = () => {
  return (
    <div className=" text-black p-3 mx-auto w-[90%] lg:grid lg:grid-cols-3 lg:gap-3">
        {URLMysql.map((item) => (
            <Link href={`/Mysql/${item.slugAwal}`} key={item.id} className=' bg-white mt-2 p-3 rounded-lg h-32 text-center items-center justify-center flex shadow-md'>
                <h2 className=' text-xl'>{item.name}</h2>
            </Link> 
        ))}

    </div>
  )
}

export default Mysequel
