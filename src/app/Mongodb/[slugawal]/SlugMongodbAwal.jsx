'use client'
import { useParams } from 'next/navigation';
import React from 'react'
import { URLMongoDB } from '../../DataURL/DataUrl';
import Link from 'next/link';

const SlugMongodbAwal = () => {
  const params = useParams();
    const slug = params.slugawal;

    const createSlugAwal = (judul) => {
        return judul.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, "-")
        .replace(/-+/g, '-')
        .trim();
    }
    


    const detailData = URLMongoDB.find(item => createSlugAwal(item.slugAwal) == slug);
    console.log("Detail Data : ", detailData.tema)

    console.log("semua sluq data : ", URLMongoDB.map(item => createSlugAwal(item.slugAwal)))

  return (
    <div className=' '>
        <div className=' space-x-5 grid grid-cols-4 gap-3 space-y-5'>
            { detailData?.tema && detailData.tema.length > 0 ? 
            (
            detailData.tema?.map((theme, idx) => ( 
                <Link href={`/Mongodb/${slug}/${createSlugAwal(theme.name.toLowerCase())}`}  key={idx} className=' bg-white h-[100px] items-center justify-center flex rounded-md shadow-md'>
                    <h1 className=' text-center justify-center flex '>{theme.name}</h1>
                </Link >
            ))) : (
              <div className="col-span-4 text-center text-gray-500">
                Belum ada tema untuk <strong>{detailData?.name}</strong>
              </div>
            )}
        </div>
    </div>

  )
}

export default SlugMongodbAwal
