'use client'
import { useEffect, useState } from 'react'
import initSqlJs from 'sql.js'

const SQL_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/'

export default function DefaultTable() {
  const [result, setResult] = useState([])

  useEffect(() => {
    const load = async () => {
      const sql = await initSqlJs({ locateFile: file => `${SQL_CDN}${file}` });
      const db = new sql.Database();

      const initSQL = `
  CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    nama TEXT,
    email TEXT,
    umur INTEGER,
    jenis_kelamin TEXT,
    kota TEXT,
    negara TEXT,
    aktif BOOLEAN,
    dibuat_pada TEXT,
    diperbarui TEXT
  );

  INSERT INTO users (nama, email, umur, jenis_kelamin, kota, negara, aktif, dibuat_pada, diperbarui) VALUES
    ('Ayu', 'ayu@example.com', 28, 'Perempuan', 'Jakarta', 'Indonesia', 1, '2024-01-01', '2024-01-10'),
    ('Budi', 'budi@example.com', 32, 'Laki-laki', 'Bandung', 'Indonesia', 1, '2024-02-05', '2024-02-06'),
    ('Citra', 'citra@example.com', 24, 'Perempuan', 'Surabaya', 'Indonesia', 0, '2024-01-15', '2024-02-20'),
    ('Dedi', 'dedi@example.com', 30, 'Laki-laki', 'Yogyakarta', 'Indonesia', 1, '2024-03-12', '2024-04-01'),
    ('Eka', 'eka@example.com', 35, 'Perempuan', 'Bali', 'Indonesia', 1, '2024-03-01', '2024-03-15'),
    ('Farah', 'farah@example.com', 29, 'Perempuan', 'Medan', 'Indonesia', 0, '2024-02-22', '2024-02-25'),
    ('Gilang', 'gilang@example.com', 27, 'Laki-laki', 'Jakarta', 'Indonesia', 1, '2024-04-05', '2024-04-08'),
    ('Hesti', 'hesti@example.com', 26, 'Perempuan', 'Bandung', 'Indonesia', 1, '2024-05-10', '2024-05-11'),
    ('Irwan', 'irwan@example.com', 31, 'Laki-laki', 'Semarang', 'Indonesia', 0, '2024-05-01', '2024-05-09'),
    ('Juwita', 'juwita@example.com', 33, 'Perempuan', 'Makassar', 'Indonesia', 1, '2024-01-20', '2024-02-01');
`;


      db.run(initSQL);
      const res = db.exec('SELECT * FROM users');
      setResult(res);
    }
    load();
  }, []);

  return (
    <>
      <h2 className='font-bold mt-2 mb-2 text-lg'>Tabel Awal (Tabel users)</h2>
      {result.length > 0 && (
        <table className="table-auto w-full border">
          <thead>
            <tr>
              {result[0].columns.map((col) => (
                <th key={col} className="border px-2 py-1 bg-[#f5faf2]">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result[0].values.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((val, cIdx) => (
                  <td key={cIdx} className="border px-2 py-1 ">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
