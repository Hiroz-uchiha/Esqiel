'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { URLMysql, URLMongoDB } from './DataURL/DataUrl';

const Beranda = () => {
  const pathname = usePathname();
  const Judul = ["Mysql", "Mongodb"];

  const createSlugAwal = (judul) => {
    return judul.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, "-")
      .replace(/-+/g, '-')
      .trim();
  };

  const getAllDataByJudul = (judul) => {
    const jdlSlug = createSlugAwal(judul);
    if (jdlSlug === 'mysql') return URLMysql;
    if (jdlSlug === 'mongodb') return URLMongoDB;
    return [];
  };

  return (
    <div className='pt-10 p-3 text-black h-full w-[20%] overflow-y-auto bg-purple-100'>
      <ul className='space-y-3 flex flex-col items-start'>

        {Judul.map((jdl, idx) => {
          const allSections = getAllDataByJudul(jdl);

          return (
            <div key={idx} className='w-full'>
              <h2 className='text-xl font-bold mb-1'>{jdl}</h2>

              {allSections.map((section, sidx) => (
                <div key={sidx}>
                  {section.tema?.map((theme, tidx) => {
                    const linkHref = `/${jdl}/${createSlugAwal(section.slugAwal)}/${createSlugAwal(theme.name.toLowerCase())}`;
                    const isActive = pathname === linkHref;

                    return (
                      <Link key={tidx} href={linkHref}>
                        <h3 className={`
                          pl-3 text-sm pb-2 cursor-pointer
                          hover:bg-purple-400 hover:w-full mt-1 hover:text-white hover:p-1 hover:pl-3
                          ${isActive ? 'bg-purple-400 text-white p-1' : ''}
                        `}>
                          {theme.name.toLocaleUpperCase()}
                        </h3>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          );
        })}

        {/* Tautan Tentang */}
        <div className='mt-4'>
          <Link href="/Tentang">
            <h2 className={`text-xl font-semibold hover:text-purple-600 ${pathname === '/Tentang' ? 'text-purple-600 underline' : ''}`}>Tentang</h2>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Beranda;
