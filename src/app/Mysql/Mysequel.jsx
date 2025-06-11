import React from 'react'
import {TemaDetails} from "../DataURL/TemaDetails"
import Link from 'next/link'

const Mysequel = () => {

  const intro = TemaDetails.find( 
    (item) => item.parentId === 0 && item.temaId === 1
  )

  return (
    <div className=" text-black p-3 mx-auto w-[90%] mt-4">
      <h1 className=' text-xl text-center font-bold'>{intro.name}</h1>     
      <h1 className=' font-bold'>Pengertian</h1>
          <p className='mb-3'>{intro.deskripsi}</p>
          <h1 className=' font-bold'>Analogi</h1>
          <p className='mb-3'>{intro.analogi}</p>
          <h1 className=' font-bold'>Apa yang terjadi jika tidak sesuai</h1>
          <p className='mb-3'>{intro.tidakSesuai}</p>
          <h1 className=' font-bold'>Cocok digunakan untuk apa saja</h1>
          <p className='mb-3'>{intro.cocok}</p>
          <h1 className=' font-bold text-xl mt-4'>Komponen Wajib</h1>
          {intro.komponen.map((kmp,idx) => (
            <div key={idx}>
              <h1 className=' font-bold mt-3'> {kmp.id}.{kmp.name}</h1>
              <p className='ml-4'>{kmp.deskripsi}</p>
              {
                kmp.sintaks? <>
                  <h1 className=' font-bold mt-3'> Sintaks Wajib</h1>
                  <pre className=' bg-green-100 p-2 m-2'>{kmp.sintaks}</pre>
                </> : <></>
              }            
              <h1 className=' font-bold mt-3'>Contoh</h1>
              <pre className=' bg-gray-100 p-2 m-2'>{kmp.contoh}</pre>
            </div>
          ))}
          
    </div>
  )
}

export default Mysequel
