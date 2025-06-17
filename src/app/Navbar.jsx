'use client';
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { URLMysql, URLMongoDB } from "../app/DataURL/DataUrl";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const navbar = [
    { nama: "Mysql", path: "/Mysql/intro/perkenalan" },
    { nama: "Mongodb", path: "/Mongodb/intro/perkenalan" },
    { nama: "Tentang", path: "/Tentang" },
  ];

  const createSlug = (judul) => {
    return judul
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, "-")
      .replace(/-+/g, '-')
      .trim();
  }

  const allTopics = [
    ...URLMysql.flatMap(u => u.tema.map(t => ({ name: t.name, type: 'Mysql', slugAwal: u.slugAwal }))),
    ...URLMongoDB.flatMap(u => u.tema.map(t => ({ name: t.name, type: 'Mongodb', slugAwal: u.slugAwal })))
  ];

  const filteredTopics = allTopics.filter(topic =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (topic) => {
    router.push(`/${topic.type}/${createSlug(topic.slugAwal)}/${createSlug(topic.name)}`);
    setSearch("");
  };

  return (
    <div
      className="bg-[#5a6e53] p-1 text-white flex items-center"
      style={{ fontFamily: "'Montserrat', cursive" }}
    >
      <div className="lg:w-[9%] w-[20%]">
        <img src="/logoesqiel.png" className="w-full" alt="logo" />
      </div>

      <div className="ml-5 flex px-2 lg:w-[22%] w-[70%] items-center">
        <ul className="flex justify-between mx-auto text-lg w-full items-center">
          {navbar.map((nb, idx) => {
            const slug = nb.path.split("/")[1]?.toLowerCase();
            const isActive = pathname.toLowerCase().startsWith(`/${slug}`);
            return (
              <li key={idx}>
                <Link href={nb.path}>
                  <span
                    className={`cursor-pointer hover:underline decoration underline-offset-10 ${
                      isActive ? "underline font-bold underline-offset-10 decoration" : ""
                    }`}
                  >
                    {nb.nama}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="ml-auto relative">
        <input
          type="text"
          className="rounded-full px-2 py-1 text-black bg-white mr-10 pl-4 outline-none w-[90%]"
          placeholder="Cari topik..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && filteredTopics.length > 0 && (
          <div className="absolute h-[200px] bg-white text-black rounded-md mt-1 w-[250px] overflow-y-auto shadow-lg">
            {filteredTopics.map((topic, idx) => (
              <div
                key={idx}
                className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelect(topic)}
              >
                <span className="font-semibold">[{topic.type}]</span> {topic.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
