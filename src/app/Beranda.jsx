'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { URLMysql, URLMongoDB } from './DataURL/DataUrl';

const Beranda = () => {
  const pathname = usePathname();

  const createSlug = (text) => {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, "-")
      .replace(/-+/g, '-')
      .trim();
  };

  const mode = pathname.split('/')[1]; 

  // Hide sidebar if mode is "Tentang"
  if (mode === 'Tentang') return null;

  const allSections =
    mode === 'Mysql'
      ? URLMysql
      : mode === 'Mongodb'
      ? URLMongoDB
      : [];

  return (
    <div className="pt-3 text-black h-full w-[20%] overflow-y-auto bg-white shadow-md">
      <ul className="flex flex-col items-start" style={{ fontFamily: "'Roboto', cursive" }}>
        {allSections.map((section, sidx) => (
          <div key={sidx} className="w-full">
            {section.tema?.map((theme, tidx) => {
              const linkHref = `/${mode}/${createSlug(section.slugAwal)}/${createSlug(theme.name)}`;
              const isActive = pathname === linkHref;

              return (
                <Link key={tidx} href={linkHref}>
                  <h3
                    className={`
                      text-sm cursor-pointer
                      hover:bg-[#8bab80] hover:text-white p-1 pl-6 mt-1
                      ${isActive ? 'bg-[#8bab80] text-black' : ''}
                    `}
                  >
                    {theme.name.toUpperCase()}
                  </h3>
                </Link>
              );
            })}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Beranda;
