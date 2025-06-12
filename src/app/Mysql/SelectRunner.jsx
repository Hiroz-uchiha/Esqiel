'use client'
import { useState } from 'react'

export default function SelectRunner({ db }) {
  const [selectQuery, setSelectQuery] = useState('')
  const [selectResult, setSelectResult] = useState([])
  const [selectError, setSelectError] = useState('')

  const handleSelectRun = () => {
    try {
      if (!selectQuery.trim().toUpperCase().startsWith('SELECT')) {
        setSelectError('Hanya query SELECT yang diperbolehkan di sini.')
        setSelectResult([])
        return
      }

      const res = db.exec(selectQuery)
      setSelectResult(res)
      setSelectError('')
    } catch (err) {
      setSelectError(err.message)
      setSelectResult([])
    }
  }

  return (
    <div className="mt-4">
      <textarea
        className="w-full pr-3 p-2 rounded-lg h-32 outline-none border"
        value={selectQuery}
        onChange={e => setSelectQuery(e.target.value)}
        placeholder="Tulis query SELECT untuk melihat hasil, misalnya: SELECT * FROM users"
      />
      <button
        onClick={handleSelectRun}
        className="bg-[#446E53] text-white px-4 py-2 mt-2 rounded"
      >
        Tampilkan Tabel
      </button>

      {selectError && <pre className="text-red-600 mt-2">{selectError}</pre>}

      {selectResult.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Hasil SELECT:</h3>
          <table className="table-auto w-full border">
            <thead>
              <tr>
                {selectResult[0].columns.map(col => (
                  <th key={col} className="border px-2 py-1 bg-gray-100">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectResult[0].values.map((row, idx) => (
                <tr key={idx}>
                  {row.map((val, i) => (
                    <td key={i} className="border px-2 py-1">{val}</td>
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
