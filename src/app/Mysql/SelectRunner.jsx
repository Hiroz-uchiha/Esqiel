'use client'
import { useState, useEffect } from 'react'
import initSqlJs from 'sql.js'

const SQL_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/'

export default function SelectRunner() {
  const [db, setDb] = useState(null)
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('') // ⬅️ state tambahan

  useEffect(() => {
    const load = async () => {
      const sql = await initSqlJs({ locateFile: file => `${SQL_CDN}${file}` });
      const dbInstance = new sql.Database();

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

      
      dbInstance.run(initSQL);
      setDb(dbInstance);
    };
    load();
  }, []);

  const handleRun = () => {
    try {
      const trimmedQuery = query.trim();
      const command = trimmedQuery.split(' ')[0].toUpperCase();

      const res = db.exec(trimmedQuery);
      setResult(res);
      setError('');

      // Feedback sukses berdasarkan tipe query
      if (command === 'SELECT') {
        if (res.length === 0) {
          setSuccessMsg('Query berhasil, tapi tidak ada hasil yang ditampilkan.');
        } else {
          setSuccessMsg('Query SELECT berhasil.');
        }
      } else if (['INSERT', 'UPDATE', 'DELETE'].includes(command)) {
        setSuccessMsg(`Query ${command} berhasil dijalankan.`);
      } else if (['CREATE', 'DROP'].includes(command)) {
        setSuccessMsg(`Query ${command} berhasil dieksekusi.`);
      } else {
        setSuccessMsg('Query berhasil dijalankan.');
      }

    } catch (err) {
      setError(err.message);
      setResult([]);
      setSuccessMsg(''); // reset pesan sukses
    }
  };

  return (
    <div className="mt-6">
      <textarea
        className="w-full pr-3 p-2 rounded-lg h-40 outline-none border"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Tulis query SQL di sini"
      />
      <button
        onClick={handleRun}
        className="bg-[#5a6e53] text-white px-4 py-2 mt-2 rounded hover:bg-[#45573f] cursor-pointer"
      >
        Cek
      </button>

      {/* Notifikasi */}
      {error && <pre className="text-red-600 mt-2" style={{ fontFamily: "'Roboto', cursive" }}>{error}</pre>}
      {successMsg && <p className="text-green-600 mt-2" style={{ fontFamily: "'Roboto', cursive" }}>{successMsg}</p>}

      {result.length > 0 && (
        <div className='mt-4'>
          <h3 className='font-semibold mb-1'>Hasil:</h3>
          <table className="table-auto w-full border  mb-4">
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
                    <td key={cIdx} className="border px-2 py-1">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
