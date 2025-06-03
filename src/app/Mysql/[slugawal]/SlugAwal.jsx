'use client'
import React from 'react'
import { useParams } from 'next/navigation';
import { URLMysql } from '../../DataURL/DataUrl';
import Link from 'next/link';

const SlugAwal = () => {
    const params = useParams();
    const slug = params.slugawal;

    const createSlugAwal = (judul) => {
        return judul.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, "-")
        .replace(/-+/g, '-')
        .trim();
    }

    const detailData =  URLMysql.find(item => createSlugAwal(item.slugAwal) == slug);

  return (
    <div className=' '>
        <div className=' space-x-5 grid grid-cols-4 gap-3 space-y-5'>
            {detailData.tema.map((theme, idx) => ( 
                <Link href={`/Mysql/${slug}/${theme.name.toLowerCase()}`}  key={idx} className=' bg-white h-[100px] items-center justify-center flex rounded-md shadow-md'>
                    <h1 className=' text-center justify-center flex '>{theme.name}</h1>
                </Link >
            ))}
        </div>
    </div>
  )
}

export default SlugAwal
