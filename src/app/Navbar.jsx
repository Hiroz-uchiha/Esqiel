'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navbar = [
    {
      nama: "Mysql",
      path: "/Mysql/intro/intro",
    },
    {
      nama: "Mongodb",
      path: "/Mongodb/intro/intro",
    },
    {
      nama: "Tentang",
      path: "/Tentang",
    },
  ];

  return (
    <div
      className="bg-[#5a6e53] p-1 text-white flex"
      style={{ fontFamily: "'Montserrat', cursive" }}
    >
      <div className="lg:w-[9%]">
        <img src="/logoesqiel.png" className="w-full" alt="logo" />
      </div>

      <div className="items-center ml-5 flex px-2 w-[22%]">
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
    </div>
  );
};

export default Navbar;
