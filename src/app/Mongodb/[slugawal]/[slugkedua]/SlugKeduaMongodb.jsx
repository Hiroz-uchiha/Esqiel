'use client'
import React from 'react'
const { useParams } = require('next/navigation');
import { URLMongoDB } from '../../../DataURL/DataUrl';
import { TemaDetailsMongodb } from '@/app/DataURL/TemaDetails';
import CodeBlock from '@/app/DataURL/CodeBlock';

const SlugKeduaMongodb = () => {
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

  const parent = URLMongoDB.find(item => createSlugAwal(item.slugAwal) === slugAwal)

  const temaItem = parent.tema.find(t => t.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '').toLowerCase() === slugkedua);

  const detail = TemaDetailsMongodb.find(td => td.parentId === parent.id && td.temaId === temaItem.id);
  console.log("Tema Item : ", temaItem)

  return (
    <div className=' overflow-y-auto h-screen w-full scrollbar-hide -mt-3 pt-4'>
      <h1 className=' font-bold text-center text-lg'>{detail?.name || temaItem.name}</h1>
      {
        detail.name !== "PERKENALAN" && (
          <>
            <h1 className=' font-bold'>1. Pengertian</h1>
            <p className='mb-3 ml-5'>{detail.deskripsi}</p>
            <h2 className=' font-bold'>2. Objek / Data yang bisa digunakan </h2>

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
                    <CodeBlock code={stx.db} language="sql" />
                    <h2 className='ml-4 text-black font-bold'>Contoh</h2>
                    <CodeBlock code={stx.contoh} language="sql" />
                    <h2 className='mt-3 font-bold'>Analogi jika dalam Mysql</h2>
                    <CodeBlock code={stx.analogi} language="sql" />
                  </div>
                ))}
              </div>
            )}
          </>
        )
      }

      {detail?.name === "PERKENALAN" && (
        <>
          <h1 className=' font-bold'>Pengertian</h1>
          <p className='mb-3'>{detail.deskripsi}</p>
          <h1 className=' font-bold'>Analogi</h1>
          <p className='mb-3'>{detail.analogi}</p>
          <h1 className=' font-bold'>Apa yang terjadi jika tidak sesuai</h1>
          <p className='mb-3'>{detail.tidakSesuai}</p>
          <h1 className=' font-bold'>Cocok digunakan untuk apa saja</h1>
          <p className='mb-3'>{detail.cocok}</p>
          <h1 className=' font-bold text-xl mt-4'>Komponen Wajib</h1>
          {detail.komponen.map((kmp,idx) => (
            <div key={idx}>
              <h1 className=' font-bold mt-3'> {kmp.id}.{kmp.name}</h1>
              <p className='ml-4'>{kmp.deskripsi}</p>
              {
                kmp.sintaks? <>
                  <h1 className=' font-bold mt-3'> Sintaks Wajib</h1>
                  <CodeBlock code={kmp.sintaks} language="sql" />
                </> : <></>
              }            
              <h1 className=' font-bold mt-3'>Contoh</h1>
              <CodeBlock code={kmp.contoh} language="sql" />
            </div>
          ))}
          

        </>
      )}


    </div>
  )
}

export default SlugKeduaMongodb
