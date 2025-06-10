'use client'
import { useState, useEffect } from 'react'
import initSqlJs from 'sql.js'

const SQL_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/'

export default function SqlRunner() {
  const [SQL, setSQL] = useState(null)
  const [db, setDb] = useState(null)
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      const sql = await initSqlJs({ locateFile: file => `${SQL_CDN}${file}` })
      setSQL(sql)
      setDb(new sql.Database())
    }
    load()
  }, [])

  const handleRun = () => {
    try {
      const res = db.exec(query)
      setResult(res)
      setError('')
    } catch (err) {
      setError(err.message)
      setResult([])
    }
  }

  return (
    <div className=" ">
      <textarea
        className="w-full pr-3 p-2 rounded-lg h-40 outline-none border"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Tulis query SQL di sini"
      />
      <button onClick={handleRun} className="bg-purple-500 text-white px-4 py-2 mt-2 rounded">
        Cek
      </button>

      {error && <pre className="text-red-600 mt-2">{error}</pre>}

      {result.map((res, idx) => (
        <table key={idx} className="table-auto w-full border">
          <thead>
            <tr>
              {res.columns.map(col => (
                <th key={col} className="border px-2 py-1 bg-gray-100">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {res.values.map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((val, cIdx) => (
                  <td key={cIdx} className="border px-2 py-1">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  )
}
