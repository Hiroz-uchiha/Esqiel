'use client'
import { useState, useEffect } from 'react'
import initSqlJs from 'sql.js'

const SQL_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/'

export default function SqlQueryRunner() {
  const [db, setDb] = useState(null)
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])
  const [allTables, setAllTables] = useState([])
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

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

INSERT INTO users (id, nama, email, umur, jenis_kelamin, kota, negara, aktif, dibuat_pada, diperbarui) VALUES
  (1, 'Ayu', 'ayu@example.com', 28, 'Perempuan', 'Jakarta', 'Indonesia', 1, '2024-01-01', '2024-01-10'),
  (2, 'Budi', 'budi@example.com', 32, 'Laki-laki', 'Bandung', 'Indonesia', 1, '2024-02-05', '2024-02-06'),
  (3, 'Citra', 'citra@example.com', 24, 'Perempuan', 'Surabaya', 'Indonesia', 0, '2024-01-15', '2024-02-20'),
  (4, 'Dedi', 'dedi@example.com', 30, 'Laki-laki', 'Yogyakarta', 'Indonesia', 1, '2024-03-12', '2024-04-01'),
  (5, 'Eka', 'eka@example.com', 35, 'Perempuan', 'Bali', 'Indonesia', 1, '2024-03-01', '2024-03-15'),
  (6, 'Farah', 'farah@example.com', 29, 'Perempuan', 'Medan', 'Indonesia', 0, '2024-02-22', '2024-02-25'),
  (7, 'Gilang', 'gilang@example.com', 27, 'Laki-laki', 'Jakarta', 'Indonesia', 1, '2024-04-05', '2024-04-08'),
  (8, 'Hesti', 'hesti@example.com', 26, 'Perempuan', 'Bandung', 'Indonesia', 1, '2024-05-10', '2024-05-11'),
  (9, 'Irwan', 'irwan@example.com', 31, 'Laki-laki', 'Semarang', 'Indonesia', 0, '2024-05-01', '2024-05-09'),
  (10, 'Juwita', 'juwita@example.com', 33, 'Perempuan', 'Makassar', 'Indonesia', 1, '2024-01-20', '2024-02-01');

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  kode_order TEXT,
  tanggal TEXT,
  total INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO orders (id, user_id, kode_order, tanggal, total) VALUES
  (1, 1, 'ORD-001', '2024-06-01', 120000),
  (2, 2, 'ORD-002', '2024-06-01', 230000),
  (3, 3, 'ORD-003', '2024-06-02', 340000),
  (4, 1, 'ORD-004', '2024-06-03', 110000),
  (5, 2, 'ORD-005', '2024-06-03', 150000),
  (6, 4, 'ORD-006', '2024-06-04', 90000),
  (7, 5, 'ORD-007', '2024-06-05', 210000),
  (8, 6, 'ORD-008', '2024-06-06', 350000),
  (9, 7, 'ORD-009', '2024-06-07', 180000),
  (10, 3, 'ORD-010', '2024-06-08', 270000);

CREATE TABLE payments (
  id INTEGER PRIMARY KEY,
  order_id INTEGER,
  metode TEXT,
  amount INTEGER,
  paid_at TEXT,
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

INSERT INTO payments (id, order_id, metode, amount, paid_at) VALUES
  (1, 1, 'Transfer', 120000, '2024-06-01'),
  (2, 2, 'Kartu Kredit', 230000, '2024-06-01'),
  (3, 3, 'E-Wallet', 340000, '2024-06-02'),
  (4, 4, 'Transfer', 110000, '2024-06-03'),
  (5, 5, 'Cash', 150000, '2024-06-03'),
  (6, 6, 'E-Wallet', 90000, '2024-06-04'),
  (7, 7, 'Transfer', 210000, '2024-06-05'),
  (8, 8, 'Cash', 350000, '2024-06-06'),
  (9, 9, 'E-Wallet', 180000, '2024-06-07'),
  (10, 10, 'Kartu Kredit', 270000, '2024-06-08');
`;

      dbInstance.run(initSQL);

      // Query all 3 tables
      const usersRes = dbInstance.exec("SELECT * FROM users;");
      const ordersRes = dbInstance.exec("SELECT * FROM orders;");
      const paymentsRes = dbInstance.exec("SELECT * FROM payments;");

      setAllTables([
        { name: "users", data: usersRes[0] },
        { name: "orders", data: ordersRes[0] },
        { name: "payments", data: paymentsRes[0] }
      ]);

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
      setSuccessMsg('');
    }
  };

  return (
    <div className="mt-6">
      {/* TAMPILKAN SEMUA TABEL */}
      <div className="flex flex-col gap-4 mb-6">
        {allTables.map((tbl) => (
          tbl.data && (
            <div key={tbl.name} className="border p-2 rounded shadow">
              <h2 className="font-bold mb-2 text-center uppercase">{tbl.name}</h2>
              <table className="table-auto w-full border mb-4 text-xs">
                <thead>
                  <tr>
                    {tbl.data.columns.map((col) => (
                      <th key={col} className="border px-1 py-1 bg-[#f5faf2]">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tbl.data.values.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((val, cIdx) => (
                        <td key={cIdx} className="border px-1 py-1">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ))}
      </div>

      {/* SQL QUERY RUNNER */}
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
