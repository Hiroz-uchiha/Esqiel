const TemaDetails = [ 
    {
        parentId : 1,
        temaId : 1,
        name : "CREATE",
        deskripsi : "Digunakan untuk membuat objek baru di dalam sistem database.",
        objek : ["Database","Table","View","Index","User (Pada level admin)"],
        sintaks : [
            {   
                id : 1,
                name : "Database",
                db : "CREATE DATABASE nama_database;",
                contoh : `CREATE DATABASE sekolah;`
            },
            {   
                id : 2,
                name : "Table",
                db : `CREATE TABLE nama_tabel (
    nama_kolom1 tipe_data1,
    nama_kolom2 tipe_data2,
    ...
);`,
                contoh : `CREATE TABLE siswa (
    id INT PRIMARY KEY,
    nama VARCHAR(100),
    umur INT
);`
            },
            {   
                id : 3,
                name : "View",
                db : `CREATE VIEW nama_view AS
SELECT ... FROM ... WHERE ...;`,
                contoh : `CREATE VIEW v_siswa_kelas10 AS 
SELECT * FROM siswa WHERE kelas = '10';`
            },
            {   
                id : 4,
                name : "Index",
                db : `CREATE INDEX nama_index
ON nama_tabel (nama_kolom);`,
                contoh : `CREATE INDEX idx_nama ON siswa(nama);`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 2,
        name : "ALTER",
        deskripsi : "Digunakan untuk mengubah struktur objek yang sudah ada.",
        objek : ["TABLE (paling umum)","VIEW (terbatas, biasanya DROP + CREATE lagi)","INDEX (jarang, biasanya DROP + CREATE)","DATABASE (rename saja, tidak bisa alter struktur)"],
        sintaks : [
            {   
                id : 1,
                name : "Tambah Kolom",
                db : `ALTER TABLE nama_tabel
ADD nama_kolom tipe_data;`,
                contoh : `ALTER TABLE siswa ADD email VARCHAR(100);`
            },
            {   
                id : 2,
                name : "Ubah Kolom",
                db : `ALTER TABLE nama_tabel
MODIFY nama_kolom tipe_data_baru;`,
                contoh : `ALTER TABLE siswa MODIFY nama VARCHAR(150);`                
            },
            {   
                id : 3,
                name : "Hapus Kolom",
                db : `ALTER TABLE nama_tabel
DROP COLUMN nama_kolom;`,
                contoh : `ALTER TABLE siswa DROP COLUMN email;`
            },
            {   
                id : 4,
                name : "Ganti Nama Tabel",
                db : `ALTER TABLE nama_tabel
RENAME TO nama_baru;`,
                contoh : `ALTER TABLE siswa RENAME TO siswa_aktif;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 3,
        name : "DROP",
        deskripsi : "Menghapus objek secara permanen dari sistem database.",
        objek : ["DATABASE","TABLE","VIEW","INDEX","USER"],
        sintaks : [
            {   
                id : 1,
                name : "Drop Database",
                db : `DROP DATABASE nama_database;`,
                contoh : `DROP DATABASE sekolah;`
            },
            {   
                id : 2,
                name : "Drop Table",
                db : `DROP TABLE nama_tabel;`,
                contoh : `DROP TABLE siswa;`                
            },
            {   
                id : 3,
                name : "Drop View",
                db : `DROP VIEW nama_view;`,
                contoh : `DROP VIEW v_siswa_kelas10;`
            },
            {   
                id : 4,
                name : "Drop Index",
                db : `DROP INDEX nama_index ON nama_tabel;`,
                contoh : `DROP INDEX idx_nama ON siswa;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 4,
        name : "TRUNCATE",
        deskripsi : "Perintah SQL yang digunakan untuk menghapus semua data dari sebuah tabel, tanpa menghapus struktur tabelnya. ⚠️ Berbeda dengan DELETE, TRUNCATE tidak dapat dibatalkan (non-reversible) dan tidak memicu trigger.",
        objek : ["TABLE"],
        sintaks : [
            {   
                id : 1,
                name : "TRUNCATE",
                db : `TRUNCATE TABLE nama_tabel`,
                contoh : `TRUNCATE TABLE siswa;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 5,
        name : "INSERT",
        deskripsi : "Menambahkan data baru ke dalam tabel.",
        objek : ["TABLE"],
        sintaks : [
            {   
                id : 1,
                name : "INSERT ke Semua Kolom",
                db : `INSERT INTO nama_tabel
VALUES (nilai1, nilai2, ...);`,
                contoh : `INSERT INTO siswa VALUES (1, 'Ali', '10');`
            },
            {   
                id : 2,
                name : "INSERT ke kolom tertentu",
                db : `INSERT INTO nama_tabel (kolom1, kolom2)
VALUES (nilai1, nilai2);`,
                contoh : `INSERT INTO siswa (id, nama) VALUES (2, 'Budi');`                
            }
        ]
    },
    {
        parentId : 1,
        temaId : 6,
        name : "UPDATE",
        deskripsi : "Mengubah data pada satu atau lebih baris di tabel.",
        objek : ["TABLE"],
        sintaks : [
            {   
                id : 1,
                name : "Drop Database",
                db : `UPDATE nama_tabel SET kolom1 = nilai1, kolom2 = nilai2 WHERE kondisi;`,
                contoh : `UPDATE siswa SET nama = 'Ali Imran', kelas = '11' WHERE id = 1;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 7,
        name : "DELETE",
        deskripsi : "Menghapus satu atau lebih baris data dari tabel, bukan struktur tabelnya.",
        objek : ["Baris data dari TABLE"],
        sintaks : [
            {   
                id : 1,
                name : "Drop Database",
                db : `DELETE FROM nama_tabel WHERE kondisi;`,
                contoh : `DELETE FROM siswa WHERE kelas = '10';`
            }
        ]
    },
]


export {
    TemaDetails
}