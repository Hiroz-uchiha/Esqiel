'use client'
import React from 'react'
const { useParams } = require('next/navigation');
import { URLMysql } from '../../../DataURL/DataUrl';
import { TemaDetails } from '@/app/DataURL/TemaDetails';

const SlugKeduaMysql = () => {
    const params = useParams();
    const slugAwal = params.slugawal;
    const slugkedua = params.slugkedua;

    const createSlugAwal = (judul) => {
        return judul.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, "-")
        .replace(/-+/g, '-')
        .trim();
    }

    const parent = URLMysql.find(item => createSlugAwal(item.slugAwal)  === slugAwal)

    const temaItem = parent.tema.find(t => t.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').toLowerCase() === slugkedua);

    const detail = TemaDetails.find(td => td.parentId === parent.id && td.temaId === temaItem.id);

    return (
    <div>
      <h1 className=' font-bold text-center text-lg'>{detail?.name || temaItem.name}</h1>
      <h1 className=' font-bold'>1. Pengertian</h1>
      <p className='mb-3 ml-5'>{detail.deskripsi}</p>
      <h2 className=' font-bold'>2. Objek yang dimaksud </h2>
      
      {detail?.objek && ( 
        <div className=' mb-3'>
            {detail.objek.map((objek, idx) => (
                <li key={idx} className=' ml-8'>{objek}</li>
            ))}
        </div>
      )}

      <h2 className=' font-bold'>3. Sintaks Wajib</h2>
      {detail?.sintaks && ( 
        <div>
            {detail.sintaks.map((stx, idx) => (
                <div key={idx} className=' ml-5'>
                    <h2 className=' font-bold '>{stx.id}. {stx.name}</h2>
                    <h2 className=' ml-4 text-red-500'>Sintaks Wajib</h2>
                    <pre className=' bg-blue-100 p-2 ml-5 mb-2 inline-block px-4 '>{stx.db}</pre>
                    <h2 className='ml-4 text-red-500 font-bold'>Contoh</h2>
                    <pre className='ml-4 bg-green-100 p-2 inline-block px-5 mb-3'>{stx.contoh}</pre>
                </div>
            ))}
        </div>
      )}

      <h2 className=' font-bold mt-2'>4. Praktek</h2>
      <textarea name="" id="" className=' border-1 border-black w-full resize-none px-2 py-1 outline-none'></textarea>
      <button className='mb-3 bg-green-200 p-2 px-8 mt-1 hover:bg-green-300 rounded-lg'>Cek</button>
      
      <h2 className=' font-bold text-center'>Hasil</h2>
      <p className=' bg-green-50 p-3'></p>
    
    </div>
  )
}

export default SlugKeduaMysql
