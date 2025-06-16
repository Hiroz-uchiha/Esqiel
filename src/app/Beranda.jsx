'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { URLMysql, URLMongoDB } from './DataURL/DataUrl';

const Beranda = () => {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState(null); // Simpan ID yang dibuka

  const createSlug = (text) => {
    return text.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, "-")
      .replace(/-+/g, '-')
      .trim();
  };

  const mode = pathname.split('/')[1];
  if (mode === 'Tentang') return null;

  const allSections =
    mode === 'Mysql'
      ? URLMysql
      : mode === 'Mongodb'
      ? URLMongoDB
      : [];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="pt-3 text-black h-full w-[20%] overflow-y-auto bg-white shadow-md">
      <ul className="flex flex-col items-start" style={{ fontFamily: "'Roboto', cursive" }}>
        {allSections.map((section) => (
          <div key={section.id} className="w-full">

            {/* Bagian Title Accordion */}
            <div
              className={`flex justify-between items-center w-full cursor-pointer mt-2 hover:bg-[#8bab80] hover:text-white px-4 py-2`}
              onClick={() => section.tema ? toggleAccordion(section.id) : null}
            >
              <span className="font-semibold" style={{ fontFamily: "'Roboto', cursive" }}>{section.name}</span>
              {section.tema && (
                <span className={`transform transition-transform ${openAccordion === section.id ? 'rotate-90' : ''}`}>
                  ▶
                </span>
              )}
            </div>

            {/* Submenu Tema */}
            {section.tema && openAccordion === section.id && (
              <div className="">
                {section.tema.map((theme, tidx) => {
                  const linkHref = `/${mode}/${createSlug(section.slugAwal)}/${createSlug(theme.name)}`;
                  const isActive = pathname === linkHref;

                  return (
                    <Link key={tidx} href={linkHref} >
                      <h3
                        className={`
                          text-sm cursor-pointer pl-6
                          hover:bg-[#8bab80] hover:text-white p-1 mt-1
                          ${isActive ? 'bg-[#8bab80] text-white' : ''}
                        `}
                      >
                        {theme.name}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Beranda;
