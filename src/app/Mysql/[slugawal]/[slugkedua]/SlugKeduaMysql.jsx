'use client'
import React from 'react'
const { useParams } = require('next/navigation');
import { URLMysql } from '../../../DataURL/DataUrl';
import { TemaDetails } from '@/app/DataURL/TemaDetails';
import SqlQueryRunner from '../../SqlRunner'; // rename to avoid confusion!
import CodeBlock from '@/app/DataURL/CodeBlock';
import DefaultTable from '../../DefaultTable';
import SelectRunner from '../../SelectRunner';

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

  const parent = URLMysql.find(item => createSlugAwal(item.slugAwal) === slugAwal)
  const temaItem = parent.tema.find(t =>
    t.name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '') === slugkedua
  );
  const detail = TemaDetails.find(td => td.parentId === parent.id && td.temaId === temaItem.id);

  // Deteksi topik relasi/join
  const relasiJoinsTopics = [
    'RELASI & JOINS', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'CROSS JOIN', 'SELF JOIN', 'UNION'
  ];
  const isRelasiJoin = relasiJoinsTopics.includes(detail?.name?.toUpperCase());

  // Daftar fitur yang tidak didukung
  const unsupported = [
    'TRUNCATE', 'GRANT', 'REVOKE', 'RIGHT JOIN', 'ALTER VIEW', 'UPDATE VIEW',
    'SUBSTRING', 'CURDATE', 'DATEDIFF', 'DATEFORMAT', 'CONVERT', 'SHOW INDEX',
    "CREATE"
  ];
  const isUnsupported = unsupported.includes(detail?.name?.toUpperCase());

  return (
    <div className='overflow-y-auto h-screen w-full scrollbar-hide -mt-3 pt-4'>
      <h1 className='font-bold text-center text-lg'>{detail?.name || temaItem.name}</h1>

      {detail.name !== "PERKENALAN" && (
        <>
          <h1 className='font-bold'>1. Pengertian</h1>
          <p className='mb-3 ml-5'>{detail.deskripsi}</p>
          <h2 className='font-bold'>2. Objek yang dimaksud</h2>

          {detail?.objek && (
            <div className='mb-3'>
              {detail.objek.map((objek, idx) => (
                <li key={idx} className='ml-8'>{objek}</li>
              ))}
            </div>
          )}

          {/* 3. Sintaks Wajib */}
          {Array.isArray(detail?.sintaks) && detail.sintaks.some(stx => stx.db) && (
            <div>
              <h2 className='font-bold'>3. Sintaks Wajib</h2>
              {detail.sintaks.map((stx, idx) =>
                stx.db ? (
                  <div key={idx} className='ml-5 mb-6'>
                    <h2 className='font-bold'>{stx.id}. {stx.name}</h2>
                    <CodeBlock code={stx.db} language="sql" />
                    {stx.contoh && (
                      <>
                        <h2 className='ml-4 font-bold'>Contoh</h2>
                        <CodeBlock code={stx.contoh} language="sql" />
                      </>
                    )}
                  </div>
                ) : null
              )}
            </div>
          )}

          {/* Contoh Saja */}
          {Array.isArray(detail?.sintaks) && detail.sintaks.some(stx => !stx.db && stx.contoh) && (
            <div>
              <h2 className='font-bold'>Contoh</h2>
              {detail.sintaks.map((stx, idx) =>
                !stx.db && stx.contoh ? (
                  <div key={idx} className='ml-5 mb-6'>
                    <h2 className='font-bold'>{stx.id}. {stx.name}</h2>
                    <CodeBlock code={stx.contoh} language="sql" />
                  </div>
                ) : null
              )}
            </div>
          )}

          {/* 4. Praktek */}
          {isUnsupported ? (
            <div className='text-red-600 font-semibold ml-5 mt-2'>
              Fitur ini tidak didukung untuk bagian ini.
            </div>
          ) : (
            <>
              <h2 className='font-bold mt-2'>4. Praktek</h2>
              {isRelasiJoin ? <SqlQueryRunner /> : 
              <>
              <DefaultTable />  
              <SelectRunner />
              </>
              }
            </>
          )}
        </>
      )}

      {/* Bagian Perkenalan */}
      {detail?.name === "PERKENALAN" && (
        <>
          <h1 className='font-bold'>Pengertian</h1>
          <p className='mb-3'>{detail.deskripsi}</p>
          <h1 className='font-bold'>Analogi</h1>
          <p className='mb-3'>{detail.analogi}</p>
          <h1 className='font-bold'>Apa yang terjadi jika tidak sesuai</h1>
          <p className='mb-3'>{detail.tidakSesuai}</p>
          <h1 className='font-bold'>Cocok digunakan untuk apa saja</h1>
          <p className='mb-3'>{detail.cocok}</p>
          <h1 className='font-bold text-xl mt-4'>Komponen Wajib</h1>
          {detail.komponen.map((kmp, idx) => (
            <div key={idx}>
              <h1 className='font-bold mt-3'> {kmp.id}.{kmp.name}</h1>
              <p className='ml-4'>{kmp.deskripsi}</p>
              {kmp.sintaks && (
                <>
                  <h1 className='font-bold mt-3'>Sintaks Wajib</h1>
                  <CodeBlock code={kmp.sintaks} language="sql" />
                </>
              )}
              <h1 className='font-bold mt-3'>Contoh</h1>
              <CodeBlock code={kmp.contoh} language="sql" />
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default SlugKeduaMysql
