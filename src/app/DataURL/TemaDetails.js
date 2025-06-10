const TemaDetails = [ 
    {
        parentId : 0,
        temaId : 1,
        name : "INTRO",
        deskripsi : "MySQL adalah sistem manajemen basis data relasional (RDBMS) berbasis SQL (Structured Query Language). Data disimpan dalam bentuk tabel yang saling berelasi. MySQL adalah cara menyimpan data yang rapi, terstruktur, dan berurutan. Cocok kalau kamu tahu persis data apa yang mau disimpan, dan datanya punya bentuk yang konsisten.",
        analogi : "Misalnya, kalau kamu punya lemari arsip di kantor, lalu setiap map di dalamnya harus berisi formulir dengan kolom-kolom yang sudah ditentukan, kolom untuk nama, alamat, dan nomor telepon. Setiap data harus lengkap dan ditulis di tempat yang sesuai. Misalnya, kalau kamu sedang membuat sistem pendaftaran siswa, maka setiap siswa harus punya data yang sama: nama, umur, alamat. Semuanya harus masuk dalam format yang telah ditentukan sejak awal. Karena itu, MySQL cocok buat menyimpan data yang bentuknya seragam dan tidak berubah-ubah.",
        tidakSesuai : "Kalau kamu mencoba memasukkan data yang tidak sesuai dengan aturan yang sudah dibuat (misalnya isi umur pakai teks, atau kolom wajib kamu kosongkan), MySQL akan langsung menolak data tersebut dan memberi pesan error. Ini karena MySQL memang dibuat untuk menjaga data tetap konsisten, rapi, dan sesuai format. Jadi, salah sedikit saja, baik dari jenis data, panjang teks, atau kolom yang kosong, sistem bisa langsung protes.",
        cocok : " MySQL cocok dipakai untuk aplikasi yang membutuhkan data terstruktur dan konsisten, seperti aplikasi kasir, sistem absen karyawan, pencatatan transaksi, sistem keuangan, manajemen sekolah, dan lain-lain. Pokoknya, semua sistem yang butuh urutan data yang jelas, lengkap, dan tidak berubah-ubah formatnya dari waktu ke waktu.",
        komponen : [
            {
                id : 1, 
                name : "Database",
                deskripsi : "Database adalah tempat utama untuk menyimpan semua data. Bisa dibayangkan seperti sebuah lemari besar yang di dalamnya kamu taruh banyak map atau dokumen. Di dalam MySQL dan MongoDB, semua data disimpan di dalam database sebagai wadah utama.",
                sintaks : "CREATE DATABASE nama_database;",
                contoh : "CREATE DATABASE toko_online;",
            },
            {
                id : 2, 
                name : "Tabel",
                deskripsi : "Tabel adalah tempat di dalam database untuk menyimpan data yang rapi dan terstruktur. Bisa dibayangkan seperti formulir berbaris yang semua kolomnya sudah ditentukan.",
                sintaks : `CREATE TABLE nama_tabel (
  kolom1 TipeData,
  kolom2 TipeData,
  ...
);`,
                contoh : `CREATE TABLE pelanggan (
  id INT,
  nama VARCHAR(100),
  email VARCHAR(100)
);
`,
            },
            {
                id : 3, 
                name : "Baris",
                deskripsi : "Baris adalah satu data utuh di dalam tabel. Misalnya, satu baris bisa berisi data satu pelanggan lengkap (nama, umur, email).",
                sintaks : `INSERT INTO nama_tabel (kolom1, kolom2) VALUES (data1, data2);`,
                contoh : `INSERT INTO pelanggan (nama, email) VALUES ('Siti', 'siti@email.com');`,
            },
            {
                id : 4, 
                name : "Kolom",
                deskripsi : "Kolom adalah tipe data tertentu dalam sebuah tabel, misalnya kolom untuk nama, kolom untuk umur, kolom untuk email, dsb. Semua baris harus mengikuti kolom yang sudah dibuat.",
                sintaks : `nama_kolom TipeData`,
                contoh : `nama VARCHAR(100)`,
            },
            {
                id : 5, 
                name : "Schema",
                deskripsi : "Skema adalah aturan atau struktur yang mendefinisikan bentuk data: kolom apa saja yang ada, jenis datanya apa, boleh kosong atau tidak.",
                sintaks : `CREATE TABLE produk (
  id INT NOT NULL,
  nama VARCHAR(50),
  harga DECIMAL(10,2)
);
`,
                contoh : `const ProdukSchema = new Schema({
  nama: String,
  harga: Number
});
`,
            },
            {
                id : 6, 
                name : "Query",
                deskripsi : "Query adalah perintah untuk mengambil atau memanipulasi data. Bisa untuk mencari data, menambah, mengubah, atau menghapus.",
                contoh : `SELECT * FROM pelanggan WHERE nama = 'Budi';`,
            },
        ]
    },
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
                name : "Delete Database",
                db : `DELETE FROM nama_tabel WHERE kondisi;`,
                contoh : `DELETE FROM siswa WHERE kelas = '10';`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 8,
        name : "SELECT",
        deskripsi : "Digunakan untuk mengambil data dari tabel di database.",
        objek : ["Tabel","Kolom"],
        sintaks : [
            {   
                id : 1,
                name : "Select Data",
                db : `SELECT kolom1, kolom2 FROM nama_tabel;`,
                contoh : `SELECT nama, usia FROM karyawan;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 9,
        name : "WHERE",
        deskripsi : "Memfilter data berdasarkan kondisi tertentu.",
        objek : ["Kolom"],
        sintaks : [
            {   
                id : 1,
                name : "Filter",
                db : `SELECT * FROM nama_tabel WHERE kondisi;`,
                contoh : `SELECT * FROM karyawan WHERE usia > 30;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 10,
        name : "ORDER BY",
        deskripsi : "Mengurutkan data hasil query.",
        objek : ["Kolom"],
        sintaks : [
            {   
                id : 1,
                name : "Pengurutan",
                db : `SELECT * FROM nama_tabel ORDER BY kolom ASC | DESC;`,
                contoh : `SELECT * FROM karyawan ORDER BY nama ASC;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 11,
        name : "LIMIT & OFFSET",
        deskripsi : "LIMIT : Membatasi jumlah baris yang ditampilkan. \nOFFSET : Melewati sejumlah baris awal.",
        objek : ["Hasil Query"],
        sintaks : [
            {   
                id : 1,
                name : "Pembatasan Data",
                db : `SELECT * FROM nama_tabel LIMIT jumlah OFFSET jumlah;`,
                contoh : `SELECT * FROM karyawan LIMIT 5 OFFSET 10;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 12,
        name : "DISTINCT",
        deskripsi : "Mengambil data yang unik (tidak duplikat).",
        objek : ["Kolom"],
        sintaks : [
            {   
                id : 1,
                name : "Data Unik",
                db : `SELECT DISTINCT kolom FROM nama_tabel;`,
                contoh : `SELECT DISTINCT departemen FROM karyawan;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 13,
        name : "IN",
        deskripsi : "Memeriksa apakah sebuah nilai ada dalam daftar.",
        objek : ["Nilai pada Kolom"],
        sintaks : [
            {   
                id : 1,
                name : "Filter",
                db : `SELECT * FROM nama_tabel WHERE kolom IN (nilai1, nilai2, ...);`,
                contoh : `SELECT * FROM karyawan WHERE departemen IN ('IT', 'HR')`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 14,
        name : "BETWEEN",
        deskripsi : "Memeriksa apakah nilai berada di antara dua nilai.",
        objek : ["Kolom Angka atau tanggal"],
        sintaks : [
            {   
                id : 1,
                name : "Filter",
                db : `SELECT * FROM nama_tabel WHERE kolom BETWEEN nilai1 AND nilai2;`,
                contoh : `SELECT * FROM karyawan WHERE usia BETWEEN 25 AND 35;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 15,
        name : "LIKE",
        deskripsi : "Mencari data berdasarkan pola/teks.",
        objek : ["Kolom teks"],
        sintaks : [
            {   
                id : 1,
                name : "Pattern Matching",
                db : `SELECT * FROM nama_tabel WHERE kolom LIKE 'pola';`,
                contoh : `SELECT * FROM karyawan WHERE nama LIKE 'A%';`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 16,
        name : "IS NULL",
        deskripsi : "Memeriksa apakah nilai di kolom adalah NULL.",
        objek : ["Kolom"],
        sintaks : [
            {   
                id : 1,
                name : "Pattern Matching",
                db : `SELECT * FROM nama_tabel WHERE kolom IS NULL;`,
                contoh : `SELECT * FROM karyawan WHERE alamat IS NULL;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 17,
        name : "GROUP BY",
        deskripsi : "Mengelompokkan data berdasarkan kolom tertentu.",
        objek : ["Kolom"],
        sintaks : [
            {   
                id : 1,
                name : "Agregasi",
                db : `SELECT kolom, COUNT(*) FROM nama_tabel GROUP BY kolom;`,
                contoh : `SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 18,
        name : "HAVING",
        deskripsi : "Menyaring hasil dari GROUP BY (berbasis agregat).",
        objek : ["Fungsi Agregat"],
        sintaks : [
            {   
                id : 1,
                name : "Filter setelah GROUP BY",
                db : `SELECT kolom, COUNT(*) FROM nama_tabel GROUP BY kolom HAVING COUNT(*) > x;`,
                contoh : `SELECT departemen, COUNT(*) FROM karyawan GROUP BY departemen HAVING COUNT(*) > 3;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 19,
        name : "ALIAS",
        deskripsi : "Memberi nama sementara pada kolom atau tabel.",
        objek : ["Kolom", "Tabel"],
        sintaks : [
            {   
                id : 1,
                name : "Alias / Pemberian Nama",
                db : `SELECT kolom AS alias_kolom FROM nama_tabel AS alias_tabel;`,
                contoh : `SELECT nama AS NamaLengkap FROM karyawan AS k;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 20,
        name : "GRANT",
        deskripsi : "Memberikan hak akses ke user.",
        objek : ["User", "Tabel"],
        sintaks : [
            {   
                id : 1,
                name : "Pengaturan Hak Akses",
                db : `GRANT hak_akses ON nama_tabel TO nama_user;`,
                contoh : `GRANT SELECT ON karyawan TO user123;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 21,
        name : "REVOKE",
        deskripsi : "Mencabut hak akses dari user.",
        objek : ["User", "Tabel"],
        sintaks : [
            {   
                id : 1,
                name : "Data Control Language",
                db : `REVOKE hak_akses ON nama_tabel FROM nama_user;`,
                contoh : `REVOKE SELECT ON karyawan FROM user123;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 22,
        name : "BEGIN",
        deskripsi : "Memulai transaksi (untuk pengelolaan data secara aman).",
        objek : ["Transaksi"],
        sintaks : [
            {   
                id : 1,
                name : "Transaction Control Language",
                db : `BEGIN;`,
                contoh : `BEGIN;
UPDATE karyawan SET gaji = gaji + 500000 WHERE departemen = 'IT';`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 23,
        name : "COMMIT",
        deskripsi : "Menyimpan semua perubahan data secara permanen.",
        objek : ["Transaksi"],
        sintaks : [
            {   
                id : 1,
                name : "Transaction Control Language",
                db : `COMMIT;`,
                contoh : `COMMIT;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 24,
        name : "ROLLBACK",
        deskripsi : "Membatalkan perubahan data dalam transaksi.",
        objek : ["Transaksi"],
        sintaks : [
            {   
                id : 1,
                name : "Transaction Control Language",
                db : `ROLLBACK;`,
                contoh : `ROLLBACK;`
            }
        ]
    },
    {
        parentId : 1,
        temaId : 25,
        name : "SAVEPOINT",
        deskripsi : "Menyimpan titik checkpoint dalam transaksi agar bisa rollback sebagian.",
        objek : ["Transaksi"],
        sintaks : [
            {   
                id : 1,
                name : "Transaction Control Language",
                db : `SAVEPOINT nama_titik;`,
                contoh : `SAVEPOINT titik1;`
            }
        ]
    },



    {
        parentId : 2,
        temaId : 1,
        name : "INNER JOIN",
        deskripsi : "Mengambil data yang cocok (match) di kedua tabel.",
        objek : ["Tabel yang saling terhubung"],
        sintaks : [
            {   
                id : 1,
                name : "Join / Gabungan Data",
                db : `SELECT a.kolom, b.kolom
FROM tabelA a
INNER JOIN tabelB b ON a.id = b.id_relasi;
`,
                contoh : `SELECT karyawan.nama, departemen.nama
FROM karyawan
INNER JOIN departemen ON karyawan.id_departemen = departemen.id;
`
            }
        ]
    },
    {
        parentId : 2,
        temaId : 2,
        name : "LEFT JOIN ",
        deskripsi : "Mengambil semua data dari tabel kiri, dan yang cocok dari tabel kanan. Jika tidak cocok, akan ditampilkan NULL.",
        objek : ["Tabel kiri dan kanan"],
        sintaks : [
            {   
                id : 1,
                name : "Join",
                db : `SELECT a.kolom, b.kolom
FROM tabelA a
LEFT JOIN tabelB b ON a.id = b.id_relasi;
`,
                contoh : `SELECT karyawan.nama, departemen.nama
FROM karyawan
LEFT JOIN departemen ON karyawan.id_departemen = departemen.id;
`
            }
        ]
    },
    {
        parentId : 2,
        temaId : 3,
        name : "RIGHT JOIN ",
        deskripsi : "Mengambil semua data dari tabel kanan, dan yang cocok dari tabel kiri. Jika tidak cocok, ditampilkan NULL.",
        objek : ["Tabel kanan dan kiri"],
        sintaks : [
            {   
                id : 1,
                name : "Join",
                db : `SELECT a.kolom, b.kolom
FROM tabelA a
RIGHT JOIN tabelB b ON a.id = b.id_relasi;
`,
                contoh : `SELECT karyawan.nama, departemen.nama
FROM karyawan
RIGHT JOIN departemen ON karyawan.id_departemen = departemen.id;
`
            }
        ]
    },
    {
        parentId : 2,
        temaId : 4,
        name : "UNION ",
        deskripsi : "UNION digunakan untuk menggabungkan hasil dari dua atau lebih query SELECT.Baris hasilnya akan menjadi satu gabungan tanpa duplikat.",
        objek : ["Dua atau lebih hasil SELECT yang memiliki jumlah kolom dan tipe data yang sama."],
        sintaks : [
            {   
                id : 1,
                name : "Kombinasi Data Hasil Query",
                db : `SELECT kolom1, kolom2 FROM tabelA
            UNION
SELECT kolom1, kolom2 FROM tabelB;
`,
                contoh : `SELECT nama, kota FROM pelanggan
            UNION
SELECT nama, kota FROM supplier;

`
            }
        ]
    },
    {
        parentId : 2,
        temaId : 5,
        name : "CROSS JOIN",
        deskripsi : "Menghasilkan kombinasi semua baris dari dua tabel (perkalian kartesius).",
        objek : ["Tabel 1 x Tabel 2"],
        sintaks : [
            {   
                id : 1,
                name : "Join / Cartesian Product",
                db : `SELECT * FROM tabelA CROSS JOIN tabelB;`,
                contoh : `SELECT * FROM karyawan CROSS JOIN departemen;`
            }
        ]
    },
    {
        parentId : 2,
        temaId : 6,
        name : "SELF JOIN",
        deskripsi : "JOIN yang menggabungkan tabel dengan dirinya sendiri. Biasanya dipakai untuk kasus seperti struktur hierarki (misal: karyawan dan atasannya).",
        objek : ["Tabel tunggal yang digunakan dua kali (dengan alias berbeda)."],
        sintaks : [
            {   
                id : 1,
                name : "Join Diri Sendiri / Hierarki",
                db : `SELECT a.kolom1, b.kolom2
FROM nama_tabel a
JOIN nama_tabel b ON a.foreign_key = b.primary_key;
`,
                contoh : `SELECT a.nama AS NamaKaryawan, b.nama AS NamaAtasan
FROM karyawan a
JOIN karyawan b ON a.id_atasan = b.id;
`
            }
        ]
    },
    
    
    {
        parentId : 3,
        temaId : 1,
        name : "CREATE VIEW",
        deskripsi : "Membuat tampilan virtual dari hasil query (seperti tabel semu) yang bisa digunakan seperti tabel biasa.",
        objek : ["View (berdasarkan SELECT dari tabel asli)"],
        sintaks : [
            {   
                id : 1,
                name : "Join Diri Sendiri / Hierarki",
                db : `CREATE VIEW nama_view AS
SELECT kolom1, kolom2 FROM nama_tabel WHERE kondisi;
`,
                contoh : `CREATE VIEW view_karyawan_IT AS
SELECT nama, departemen FROM karyawan
WHERE departemen = 'IT';

`
            }
        ]
    },
    {
        parentId : 3,
        temaId : 2,
        name : "ALTER  VIEW",
        deskripsi : "Mengubah definisi view yang sudah ada (misalnya, kolom atau kondisi SELECT-nya).",
        objek : ["View yang sudah dibuat"],
        sintaks : [
            {   
                id : 1,
                name : "DDL - Mengubah Struktur Objek",
                db : `ALTER VIEW nama_view AS
SELECT kolom1, kolom2 FROM nama_tabel WHERE kondisi_baru;
`,
                contoh : `ALTER VIEW view_karyawan_IT AS
SELECT nama, gaji FROM karyawan
WHERE departemen = 'IT';
`
            }
        ]
    },
    {
        parentId : 3,
        temaId : 3,
        name : "DROP  VIEW",
        deskripsi : "Menghapus view dari database.",
        objek : ["View"],
        sintaks : [
            {   
                id : 1,
                name : "DDL - Mengubah Struktur Objek",
                db : `DROP VIEW nama_view;`,
                contoh : `DROP VIEW view_karyawan_IT;`
            }
        ]
    },
    {
        parentId : 3,
        temaId : 4,
        name : "SELECT FROM VIEW",
        deskripsi : "Mengambil data dari view seperti layaknya mengambil dari tabel biasa.",
        objek : ["View"],
        sintaks : [
            {   
                id : 1,
                name : "DQL - Menampilkan data",
                db : `SELECT * FROM nama_view;`,
                contoh : `SELECT * FROM view_karyawan_IT;`
            }
        ]
    },
    {
        parentId : 3,
        temaId : 5,
        name : "UPDATE VIEW",
        deskripsi : "Mengubah data melalui view, jika view tersebut memenuhi syarat bisa diupdate (misalnya tidak mengandung agregat, JOIN kompleks, dsb).",
        objek : ["View (yang bisa diupdate)"],
        sintaks : [
            {   
                id : 1,
                name : "Data Manipulation Language (DML) - Mengubah data",
                db : `UPDATE nama_view SET kolom = nilai WHERE kondisi;`,
                contoh : `UPDATE view_karyawan_IT
SET departemen = 'Teknologi Informasi'
WHERE nama = 'Budi';
`
            }
        ]
    },
    
    
    {
        parentId : 4,
        temaId : 1,
        name : "UPPER()",
        deskripsi : "Mengubah seluruh huruf dalam teks menjadi huruf kapital (besar).",
        objek : ["String / Teks"],
        sintaks : [
            {   
                id : 1,
                name : "Huruf Besar Semua",
                db : `UPPER(teks)`,
                contoh : `SELECT UPPER('halo dunia');`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 2,
        name : "LOWER()",
        deskripsi : "Mengubah semua huruf dalam string menjadi huruf kecil.",
        objek : ["String / Teks"],
        sintaks : [
            {   
                id : 1,
                name : "Huruf Kecil Semua",
                db : `LOWER(teks)`,
                contoh : `SELECT LOWER('HALO DUNIA');`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 3,
        name : "CONCAT()",
        deskripsi : "Menggabungkan dua atau lebih teks menjadi satu.",
        objek : ["String / Teks"],
        sintaks : [
            {   
                id : 1,
                name : "Gabung Teks",
                db : `CONCAT(teks1, teks2, ...)`,
                contoh : `SELECT CONCAT('Halo', ' ', 'Dunia');`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 4,
        name : "SUBSTRING()",
        deskripsi : "Mengambil sebagian teks dari string",
        objek : ["String / Teks"],
        sintaks : [
            {   
                id : 1,
                name : "Potong Teks",
                db : `SUBSTRING(teks, posisi_awal, jumlah_karakter)`,
                contoh : `SELECT SUBSTRING('Halo Dunia', 6, 5);`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 5,
        name : "ROUND()",
        deskripsi : "Membulatkan angka ke jumlah desimal tertentu.",
        objek : ["Angka"],
        sintaks : [
            {   
                id : 1,
                name : "Pembulatan Desimal",
                db : `ROUND(angka, jumlah_desimal)`,
                contoh : `SELECT ROUND(3.14159, 2);`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 6,
        name : "CEIL",
        deskripsi : "Membulatkan angka ke atas ke bilangan bulat terdekat",
        objek : ["Angka"],
        sintaks : [
            {   
                id : 1,
                name : "Pembulatan Ke Atas",
                db : `CEIL(angka)`,
                contoh : `SELECT CEIL(4.2);`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 7,
        name : "FLOOR()",
        deskripsi : "Membulatkan angka ke bawah ke bilangan bulat terdekat",
        objek : ["Angka"],
        sintaks : [
            {   
                id : 1,
                name : "Pembulatan Ke Bawah",
                db : `FLOOR(angka)`,
                contoh : `SELECT FLOOR(4.9);`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 8,
        name : "MOD()",
        deskripsi : "Menghasilkan sisa pembagian dari dua angka.",
        objek : ["Angka"],
        sintaks : [
            {   
                id : 1,
                name : "Sisa Bagi",
                db : `MOD(angka1, angka2)`,
                contoh : `SELECT MOD(10, 3);`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 9,
        name : "NOW()",
        deskripsi : "Mengambil waktu lengkap saat ini (tanggal dan jam).",
        objek : ["Tanggal & Waktu (datetime)"],
        sintaks : [
            {   
                id : 1,
                name : "Tanggal dan Waktu Sekarang",
                db : `NOW()`,
                contoh : `SELECT NOW();`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 10,
        name : "CURDATE()",
        deskripsi : "Mengambil tanggal saat ini tanpa waktu.",
        objek : ["Tanggal"],
        sintaks : [
            {   
                id : 1,
                name : "Tanggal Hari Ini",
                db : `CURDATE()`,
                contoh : `SELECT CURDATE();`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 11,
        name : "DATEIFF()",
        deskripsi : "Menghitung jumlah hari antara dua tanggal.",
        objek : ["Tanggal"],
        sintaks : [
            {   
                id : 1,
                name : "Selisih Hari",
                db : `DATEDIFF(tanggal1, tanggal2)`,
                contoh : `SELECT DATEDIFF('2025-06-10', '2025-06-01');`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 12,
        name : "DATE_FORMAT()",
        deskripsi : "Mengubah tampilan tanggal ke format tertentu.",
        objek : ["Tanggal"],
        sintaks : [
            {   
                id : 1,
                name : "Format Tanggal",
                db : `DATE_FORMAT(tanggal, 'format')`,
                contoh : `SELECT DATE_FORMAT(NOW(), '%d-%m-%Y');`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 13,
        name : "CAST()",
        deskripsi : "Mengubah nilai ke tipe data lain.",
        objek : ["Angka", "Teks", "Tanggal", "Waktu", "Datetime", "Tahun", "Bit", "Biner Tetap", "Biner Variabel", "Blob"],
        sintaks : [
            {   
                id : 1,
                name : "Ubah Tipe Data",
                db : `CAST(nilai AS tipe_data)`,
                contoh : `SELECT CAST('123' AS UNSIGNED);`
            }
        ]
    },
    {
        parentId : 4,
        temaId : 14,
        name : "CONVERT()",
        deskripsi : "Fungsi alternatif untuk mengubah tipe data, mirip dengan CAST.",
        objek : ["Angka", "Teks", "Tanggal", "Waktu", "Datetime", "Tahun", "Bit", "Biner Tetap", "Biner Variabel", "Blob"],
        sintaks : [
            {   
                id : 1,
                name : "Konversi Tipe Data",
                db : `CONVERT(nilai, tipe_data)`,
                contoh : `SELECT CONVERT('2025-06-05', DATE);`
            }
        ]
    },
    
    
    {
        parentId : 5,
        temaId : 1,
        name : "COUNT()",
        deskripsi : "Menghitung jumlah baris dalam suatu kolom atau tabel, bisa semua baris atau hanya baris yang tidak NULL.",
        objek : ["Tabel", "Kolom", "Semua Baris", "Nilai Tidak Null"],
        sintaks : [
            {   
                id : 1,
                name : "Menghitung Jumlah Data / Baris",
                db : `SELECT COUNT(nama_kolom) FROM nama_tabel;`,
                contoh : `SELECT COUNT(*) FROM karyawan;`
            }
        ]
    },
    {
        parentId : 5,
        temaId : 2,
        name : "SUM()",
        deskripsi : "Menjumlahkan semua nilai pada kolom numerik.",
        objek : ["Kolom bertipe angka/numerik, seperti : Gaji, Harga, Total Pembelian, Dan lainnya."],
        sintaks : [
            {   
                id : 1,
                name : "Menjumlahkan Nilai",
                db : `SELECT SUM(nama_kolom) FROM nama_tabel;`,
                contoh : `SELECT SUM(gaji) FROM karyawan;`
            }
        ]
    },
    {
        parentId : 5,
        temaId : 3,
        name : "AVG()",
        deskripsi : "Menghitung nilai rata-rata dari kolom numerik.",
        objek : ["Kolom bertipe angka/numerik, seperti : Nilai Ujian, Gaji, Harga, Total Pembelian, Dan lainnya."],
        sintaks : [
            {   
                id : 1,
                name : "Menghitung Rata-Rata",
                db : `SELECT AVG(nama_kolom) FROM nama_tabel;`,
                contoh : `SELECT AVG(nilai) FROM siswa;`
            }
        ]
    },
    {
        parentId : 5,
        temaId : 4,
        name : "MIN()",
        deskripsi : "Mengambil nilai terkecil dari kolom tertentu.",
        objek : ["Kolom bertipe angka, teks, atau tanggal, seperti : Harga Termurah, Tanggal Terlama, Total Pembelian, Dan lainnya."],
        sintaks : [
            {   
                id : 1,
                name : "Nilai Terkecil",
                db : `SELECT MIN(nama_kolom) FROM nama_tabel;`,
                contoh : `SELECT MIN(harga) FROM produk;`
            }
        ]
    },
    {
        parentId : 5,
        temaId : 5,
        name : "MAX()",
        deskripsi : "Mengambil nilai terbesar dari kolom tertentu.",
        objek : ["Kolom bertipe angka, teks, atau tanggal, seperti : Harga Termurah, Tanggal Terlama, Total Pembelian, Gaji Tertinggi."],
        sintaks : [
            {   
                id : 1,
                name : "Nilai Terbesar",
                db : `SELECT MAX(nama_kolom) FROM nama_tabel;`,
                contoh : `SELECT MAX(gaji) FROM karyawan;`
            }
        ]
    },
    
    
    {
        parentId : 6,
        temaId : 1,
        name : "CREATE TRIGGER",
        deskripsi : "Digunakan untuk membuat trigger yang akan otomatis berjalan saat terjadi INSERT, UPDATE, atau DELETE pada sebuah tabel.",
        objek : ["Tabel","Trigger", "Nama Trigger", "Tabel yang Dipantau", "Waktu Eksekusi", "Aksi SQL"],
        sintaks : [
            {   
                id : 1,
                name : "Membuat Pemicu Otomatis",
                db : `CREATE TRIGGER nama_trigger
waktu_trigger aksi_trigger
ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi SQL
END;
`,
                contoh : `CREATE TRIGGER log_insert_siswa
AFTER INSERT ON siswa
FOR EACH ROW
BEGIN
  INSERT INTO log_aksi (aksi, waktu) VALUES ('Data siswa ditambah', NOW());
END;
`
            }
        ]
    },
    {
        parentId : 6,
        temaId : 2,
        name : "BEFORE TRIGGER",
        deskripsi : "Trigger dijalankan sebelum data baru dimasukkan ke dalam tabel.",
        objek : ["Tabel","Data Baru", "Validasi Otomatis", "Modifikasi Nilai", "Cek Unik", "Set Default"],
        sintaks : [
            {   
                id : 1,
                name : "Sebelum Data Ditambahkan",
                db : `CREATE TRIGGER nama_trigger
BEFORE INSERT ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi sebelum data dimasukkan
END;

`,
                contoh : `CREATE TRIGGER cek_email
BEFORE INSERT ON pengguna
FOR EACH ROW
BEGIN
  IF NEW.email IS NULL THEN
    SET NEW.email = 'default@email.com';
  END IF;
END;
`
            }
        ]
    },
    {
        parentId : 6,
        temaId : 3,
        name : "AFTER INSERT",
        deskripsi : "Trigger dijalankan setelah data berhasil dimasukkan ke tabel.",
        objek : ["Tabel","Log Tambah Data", "Audit Trail", "Notifikasi", "Insert Tambahan"],
        sintaks : [
            {   
                id : 1,
                name : "Setelah Data Ditambahkan",
                db : `CREATE TRIGGER nama_trigger
AFTER INSERT ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi setelah data dimasukkan
END;
`,
                contoh : `CREATE TRIGGER log_tambah_produk
AFTER INSERT ON produk
FOR EACH ROW
BEGIN
  INSERT INTO log_produk (aksi, produk_id, waktu) VALUES ('Tambah', NEW.id, NOW());
END;
`
            }
        ]
    },
    {
        parentId : 6,
        temaId : 4,
        name : "BEFORE UPDATE",
        deskripsi : "Trigger dijalankan sebelum data diubah dalam tabel.",
        objek : ["Tabel","Validasi Update", "Cegah Perubahan", "Modifikasi Otomatis", "Cek Nilai Lama dan Baru"],
        sintaks : [
            {   
                id : 1,
                name : "Sebelum Data Diubah",
                db : `CREATE TRIGGER nama_trigger
BEFORE UPDATE ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi sebelum update
END;
`,
                contoh : `CREATE TRIGGER cek_status_gaji
BEFORE UPDATE ON karyawan
FOR EACH ROW
BEGIN
  IF NEW.gaji < OLD.gaji THEN
    SET NEW.status = 'Gaji Turun';
  END IF;
END;
`
            }
        ]
    },
    {
        parentId : 6,
        temaId : 5,
        name : "AFTER UPDATE",
        deskripsi : "Trigger dijalankan setelah data diubah dalam tabel.",
        objek : ["Tabel","Log Perubahan", "Audit Update", "Catatan Histori", "Rekap Update"],
        sintaks : [
            {   
                id : 1,
                name : "Setelah Data Diubah",
                db : `CREATE TRIGGER nama_trigger
AFTER UPDATE ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi setelah update
END;
`,
                contoh : `CREATE TRIGGER log_update_gaji
AFTER UPDATE ON karyawan
FOR EACH ROW
BEGIN
  INSERT INTO log_gaji (id_karyawan, gaji_lama, gaji_baru, waktu)
  VALUES (OLD.id, OLD.gaji, NEW.gaji, NOW());
END;

`
            }
        ]
    },
    {
        parentId : 6,
        temaId : 6,
        name : "BEFORE DELETE",
        deskripsi : "Trigger dijalankan sebelum data dihapus dari tabel.",
        objek : ["Tabel","Cegah Penghapusan", "Cek Status Data", "Backup Data", "Validasi Delete"],
        sintaks : [
            {   
                id : 1,
                name : "Sebelum Data Dihapus",
                db : `CREATE TRIGGER nama_trigger
BEFORE DELETE ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi sebelum delete
END;
`,
                contoh : `CREATE TRIGGER backup_data_siswa
BEFORE DELETE ON siswa
FOR EACH ROW
BEGIN
  INSERT INTO siswa_backup SELECT * FROM siswa WHERE id = OLD.id;
END;
`
            }
        ]
    },
    {
        parentId : 6,
        temaId : 7,
        name : "AFTER DELETE",
        deskripsi : "Trigger dijalankan setelah data dihapus dari tabel.",
        objek : ["Tabel","Log Hapus Data", "Audit Trail", "Catat Penghapusan", "Rekap Penghapusan"],
        sintaks : [
            {   
                id : 1,
                name : "Setelah Data Dihapus",
                db : `CREATE TRIGGER nama_trigger
AFTER DELETE ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi setelah delete
END;
`,
                contoh : `CREATE TRIGGER log_delete_pengguna
AFTER DELETE ON pengguna
FOR EACH ROW
BEGIN
  INSERT INTO log_penghapusan (user_id, waktu) VALUES (OLD.id, NOW());
END;
`
            }
        ]
    },
    
    
    {
        parentId : 7,
        temaId : 1,
        name : "CREATE INDEX",
        deskripsi : "Membuat indeks pada kolom tabel untuk mempercepat proses pencarian atau filter data.",
        objek : ["Tabel","Kolom","Indeks Baru", "Nama Indeks", "Kolom Tertarget", "Tabel Target", "Akselerasi Query"],
        sintaks : [
            {   
                id : 1,
                name : "Membuat Indeks (Akselerasi Pencarian)",
                db : `CREATE INDEX nama_index ON nama_tabel(nama_kolom);`,
                contoh : `CREATE INDEX idx_nama ON karyawan(nama);`
            }
        ]
    },
    {
        parentId : 7,
        temaId : 2,
        name : "UNIQUE INDEX",
        deskripsi : "Membuat indeks yang menjamin nilai dalam kolom bersifat unik (tidak boleh ada duplikat).",
        objek : ["Kolom Unik","Indeks Unik", "Validasi Keunikan", "Pencegahan Duplikasi", "Primary Key Alternatif"],
        sintaks : [
            {   
                id : 1,
                name : "Indeks Unik (Cegah Duplikat)",
                db : `CREATE UNIQUE INDEX nama_index ON nama_tabel(nama_kolom);`,
                contoh : `CREATE UNIQUE INDEX idx_email ON pengguna(email);`
            }
        ]
    },
    {
        parentId : 7,
        temaId : 3,
        name : "DROP INDEX",
        deskripsi : "Menghapus indeks yang sebelumnya dibuat dari suatu tabel.",
        objek : ["Indeks yang ada","Penghapusan Indeks", "Optimasi Struktur", "Perubahan Strategi Query"],
        sintaks : [
            {   
                id : 1,
                name : "Menghapus Indeks",
                db : `DROP INDEX nama_index ON nama_tabel;`,
                contoh : `DROP INDEX idx_nama ON karyawan;`
            }
        ]
    },
    {
        parentId : 7,
        temaId : 4,
        name : "SHOW INDEX",
        deskripsi : "Menampilkan semua indeks yang ada pada sebuah tabel, termasuk primary key dan unique index.",
        objek : ["Semua indeks pada tabel","Daftar Indeks", "Primary Key", "Unique Key", "Nama Index", "Tipe Index"],
        sintaks : [
            {   
                id : 1,
                name : "Menampilkan Indeks dalam Tabel",
                db : `SHOW INDEX FROM nama_tabel;`,
                contoh : `SHOW INDEX FROM pengguna;`
            }
        ]
    },
    {
        parentId : 7,
        temaId : 5,
        name : "COMPOSITE INDEX",
        deskripsi : "Indeks yang terdiri dari lebih dari satu kolom; digunakan saat pencarian sering berdasarkan kombinasi beberapa kolom sekaligus.",
        objek : ["Dua atau lebih kolom dalam satu tabel","Gabungan Kolom", "Optimalisasi Query Multi-Kolom", "Kombinasi Field", "Urutan Kolom Penting"],
        sintaks : [
            {   
                id : 1,
                name : "Indeks Gabungan (Multi-Kolom)",
                db : `CREATE INDEX nama_index ON nama_tabel(kolom1, kolom2);`,
                contoh : `CREATE INDEX idx_nama_alamat ON karyawan(nama, alamat);`
            }
        ]
    },
]


const TemaDetailsMongodb = [
    {
        parentId : 0,
        temaId : 1,
        name : "INTRO",
        deskripsi : "MongoDB adalah sistem manajemen basis data NoSQL yang menggunakan format dokumen (JSON-like, BSON). Data disimpan dalam bentuk dokumen yang fleksibel tanpa skema tetap.",
        analogi : "MongoDB adalah tempat menyimpan data yang fleksibel dan bebas format, mirip seperti kamu punya buku catatan harian atau kumpulan sticky notes. Kamu bisa nulis apa saja di sana — hari ini kamu catat to-do list, besok kamu tulis ide bisnis, lusa kamu cuma nyoret nama dan nomor teman. Nggak harus seragam. Inilah yang membuat MongoDB sangat nyaman dipakai kalau kamu tidak tahu pasti data seperti apa yang akan masuk nanti. Misalnya, kamu bikin aplikasi chatting, dan setiap pesan bisa punya lampiran, atau tidak. Atau kamu bikin sistem komentar, yang kadang ada foto, kadang ada tag lokasi, kadang cuma teks. MongoDB bisa menampung semuanya tanpa komplain.",
        tidakSesuai : " Karena MongoDB tidak mewajibkan data punya format tetap, sebenarnya hampir tidak ada masalah kalau bentuk data berubah-ubah. Namun, kalau kamu pakai MongoDB dengan aturan tambahan seperti validasi (misalnya lewat Mongoose di Node.js), dan datanya tidak sesuai aturan itu, maka baru akan muncul error. Tapi secara bawaan, MongoDB akan tetap menerima data yang berbeda bentuk, selama strukturnya bisa dibaca.",
        cocok : "  MongoDB cocok dipakai untuk aplikasi yang datanya tidak selalu sama, dan bisa berubah dari waktu ke waktu. Contohnya adalah aplikasi media sosial, sistem komentar, live chat, penyimpanan konfigurasi pengguna, atau dashboard yang bisa dikustomisasi. Intinya, kalau kamu ingin menyimpan data yang bebas, cepat, dan fleksibel, MongoDB adalah pilihan yang sangat bagus.",
        komponen : [
            {
                id : 1, 
                name : "Database",
                deskripsi : "Database adalah tempat utama untuk menyimpan semua data. Bisa dibayangkan seperti sebuah lemari besar yang di dalamnya kamu taruh banyak map atau dokumen. Di dalam MySQL dan MongoDB, semua data disimpan di dalam database sebagai wadah utama.",
                sintaks : "use nama_database",
                contoh : "use toko_online",
            },
            {
                id : 2, 
                name : "Koleksi",
                deskripsi : "Koleksi adalah kumpulan dokumen dalam MongoDB, mirip seperti tumpukan catatan yang punya tema sama, misalnya semua catatan tentang pelanggan.",
                sintaks : `db.nama_koleksi.insertOne({ ... })`,
                contoh : `db.pelanggan.insertOne({ nama: "Budi", email: "budi@gmail.com" })`,
            },
            {
                id : 3, 
                name : "Dokumen",
                deskripsi : "Dokumen adalah satu set data utuh dalam bentuk JSON (mirip objek JavaScript). Setiap dokumen bisa punya isi yang berbeda-beda.",
                sintaks : `db.koleksi.insertOne({ key1: value1, key2: value2 });`,
                contoh : `db.pelanggan.insertOne({ nama: "Siti", email: "siti@email.com" });`,
            },
            {
                id : 4, 
                name : "Field",
                deskripsi : "Field di MongoDB adalah seperti kolom di MySQL, tapi tidak wajib selalu sama di tiap dokumen. Ini seperti isian di catatan: kadang kamu isi 'email', kadang kamu tambahin 'alamat', kadang cuma 'nama' saja.",
                contoh : `{ nama: "Andi", email: "andi@gmail.com" }`,
            },
            {
                id : 5, 
                name : "Schema",
                deskripsi : "Skema adalah aturan atau struktur yang mendefinisikan bentuk data: kolom apa saja yang ada, jenis datanya apa, boleh kosong atau tidak.",
                contoh : `const ProdukSchema = new Schema({
  nama: String,
  harga: Number
});`,
            },
            {
                id : 6, 
                name : "Query",
                deskripsi : "Query adalah perintah untuk mengambil atau memanipulasi data. Bisa untuk mencari data, menambah, mengubah, atau menghapus.",
                contoh : `db.pelanggan.find({ nama: "Budi" });`,
            },
        ]
    },
   {
        parentId : 4,
        temaId : 1,
        name : "InsertOne()",
        deskripsi : "Digunakan untuk menambahkan satu dokumen (data) ke dalam koleksi (collection). MongoDB menyimpan data dalam bentuk dokumen yang berbentuk JSON atau BSON, bukan dalam baris dan kolom seperti MySQL.",
        objek : ["Database", "Collection", "Document"],
        sintaks : [
            {   
                id : 1,
                name : "InsertOne()",
                db : `db.nama_koleksi.insertOne({
  key1: value1,
  key2: value2,
  ...
})
`,
                contoh : `db.pelanggan.insertOne({
  nama: "Andi",
  umur: 25,
  pekerjaan: "Programmer"
})`,
                analogi : `INSERT INTO pelanggan (nama, umur, pekerjaan)
VALUES ('Andi', 25, 'Programmer');`
            },
            
        ]
    },
   {
        parentId : 4,
        temaId : 2,
        name : "InsertMany()",
        deskripsi : "digunakan untuk menambahkan banyak dokumen sekaligus ke dalam sebuah koleksi (collection). Ini berguna ketika kamu ingin menyimpan beberapa data sekaligus tanpa harus menjalankan perintah insertOne() satu per satu.",
        objek : ["Database", "Collection", "Document"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.insertMany([
  { key1: value1, key2: value2 },
  { key1: value3, key2: value4 },
  ...
])
`,
                contoh : `db.pelanggan.insertMany([
  {
    nama: "Andi",
    umur: 25,
    pekerjaan: "Programmer"
  },
  {
    nama: "Budi",
    umur: 30,
    pekerjaan: "Desainer"
  }
])`,
                analogi : `INSERT INTO pelanggan (nama, umur, pekerjaan)
VALUES
('Andi', 25, 'Programmer'),
('Budi', 30, 'Desainer');
`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 1,
        name : "Find()",
        deskripsi : "Method untuk mengambil dokumen dari sebuah koleksi di MongoDB. Jika tidak diberikan filter, akan mengambil semua dokumen dalam koleksi tersebut.",
        objek : ["Database", "Collection", "Document", "Query", "Projection"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find(query, projection)`,
                contoh : `db.pelanggan.find({})`,
                analogi : `SELECT * FROM pelanggan;`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 2,
        name : "Find with filter",
        deskripsi : "Method find() dengan filter tertentu untuk mengambil dokumen yang memenuhi kondisi.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find({ field: value }, projection)`,
                contoh : `db.pelanggan.find({ umur: 25 })`,
                analogi : `SELECT * FROM pelanggan WHERE umur = 25;`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 3,
        name : "$gt (Greater Than)",
        deskripsi : "Operator filter untuk memilih dokumen dengan nilai lebih besar dari nilai tertentu.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find({ field: { $gt: value } })`,
                contoh : `db.pelanggan.find({ umur: { $gt: 20 } })`,
                analogi : `WHERE umur > 20`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 4,
        name : "$lt (Less Than)",
        deskripsi : "Operator filter untuk memilih dokumen dengan nilai kurang dari nilai tertentu.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find({ field: { $lt: value } })`,
                contoh : `db.pelanggan.find({ umur: { $lt: 30 } })`,
                analogi : `WHERE umur < 30`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 5,
        name : "$in",
        deskripsi : "Operator filter untuk memilih dokumen dimana nilai sebuah field ada dalam daftar nilai tertentu.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find({ field: { $in: [value1, value2, ...] } })`,
                contoh : `db.pelanggan.find({ pekerjaan: { $in: ["Programmer", "Desainer"] } })`,
                analogi : `WHERE pekerjaan IN ('Programmer', 'Desainer')`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 6,
        name : "$or",
        deskripsi : "Operator logika OR untuk memilih dokumen yang memenuhi salah satu kondisi dari beberapa kondisi.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find({
  $or: [{ kondisi1 }, { kondisi2 }, ...]
})`,
                contoh : `db.pelanggan.find({
  $or: [{ umur: 25 }, { pekerjaan: "Desainer" }]
})
`,
                analogi : `WHERE umur = 25 OR pekerjaan = 'Desainer'`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 7,
        name : "$and",
        deskripsi : "Operator logika AND untuk memilih dokumen yang memenuhi semua kondisi yang diberikan.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find({
  $and: [{ kondisi1 }, { kondisi2 }, ...]
})`,
                contoh : `db.pelanggan.find({
  $and: [{ umur: { $gt: 20 } }, { pekerjaan: "Programmer" }]
})`,
                analogi : `WHERE umur > 20 AND pekerjaan = 'Programmer'`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 8,
        name : "$regex",
        deskripsi : "Operator untuk pencarian dengan pola (regular expression), cocok untuk pencarian teks.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find({ field: { $regex: "pattern" } })`,
                contoh : `db.pelanggan.find({ nama: { $regex: "^Andi" } })`,
                analogi : `WHERE nama LIKE 'Andi%'`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 9,
        name : "$sort",
        deskripsi : "Method untuk mengurutkan hasil query berdasarkan satu atau beberapa field.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find().sort({ field1: 1, field2: -1 })`,
                contoh : `db.pelanggan.find().sort({ umur: 1 })`,
                analogi : `ORDER BY umur ASC'`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 10,
        name : "$sort",
        deskripsi : "Method untuk membatasi jumlah dokumen yang diambil.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find().limit(n)`,
                contoh : `db.pelanggan.find().limit(5)`,
                analogi : `LIMIT 5`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 11,
        name : "$skip",
        deskripsi : "Method untuk melewati sejumlah dokumen awal sebelum mengambil data (biasanya untuk paging).",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find().skip(n)`,
                contoh : `db.pelanggan.find().skip(10).limit(5)
`,
                analogi : `LIMIT 5 OFFSET 10`
               
            },
            
        ], 
    },
   {
        parentId : 5,
        temaId : 12,
        name : "$projection",
        deskripsi : "Menentukan field apa saja yang ingin ditampilkan atau disembunyikan dalam hasil query.",
        objek : ["Database", "Collection", "Document", "Query"],
        sintaks : [
            {   
                id : 1,
                name : "InsertMany()",
                db : `db.nama_koleksi.find(query, { field1: 1, field2: 1, _id: 0 })`,
                contoh : `db.pelanggan.find({}, { nama: 1, umur: 1, _id: 0 })`,
                analogi : `SELECT nama, umur FROM pelanggan`
            },
            
        ], 
    },
   
   
    {
        parentId : 6,
        temaId : 1,
        name : "updateOne()",
        deskripsi : "Digunakan untuk memperbarui satu dokumen pertama yang cocok dengan kondisi (filter) tertentu dalam sebuah koleksi. Jika terdapat lebih dari satu dokumen yang sesuai, hanya dokumen pertama yang akan diperbarui.",
        objek : ["Database", "Collection", "Document", "Query", "Update Operator ($set, $inc, dll)"],
        sintaks : [
            {   
                id : 1,
                name : "updateOne()",
                db : `db.collection.updateOne(
   <filter>,
   <update>,
   { upsert: <boolean> } // opsional
)
`,
                contoh : `db.users.updateOne(
  { name: "Budi" },
  { $set: { age: 26 } }
)
`,
                analogi : `UPDATE users
SET age = 26
WHERE name = 'Budi'
LIMIT 1;
`
            },
            
        ], 
    },
    {
        parentId : 6,
        temaId : 2,
        name : "updateMany()",
        deskripsi : "Digunakan untuk memperbarui semua dokumen yang cocok dengan kondisi tertentu.",
        objek : ["Database", "Collection", "Document", "Query", "Update Operator ($set, $inc, dll)"],
        sintaks : [
            {   
                id : 1,
                name : "updateMany()",
                db : `db.collection.updateMany(<filter>, <update>, { upsert: <boolean> })`,
                contoh : `db.users.updateMany(
  { city: "Jakarta" },
  { $set: { status: "active" } }
)`,
                analogi : `UPDATE users SET status = 'active' WHERE city = 'Jakarta';`
            },
            
        ], 
    },
    {
        parentId : 6,
        temaId : 3,
        name : "$set",
        deskripsi : "Operator untuk menetapkan nilai baru pada suatu field (menambah atau mengubah nilai).",
        objek : ["Document", "Field"],
        sintaks : [
            {   
                id : 1,
                name : "$set",
                db : `{ $set: { field: value } }`,
                contoh : `db.users.updateOne(
  { name: "Budi" },
  { $set: { city: "Bandung" } }
)
`,
                analogi : `UPDATE users SET city = 'Bandung' WHERE name = 'Budi';`
            },
            
        ], 
    },
    {
        parentId : 6,
        temaId : 4,
        name : "$unset",
        deskripsi : "Operator untuk menghapus field dari dokumen.",
        objek : ["Document", "Field"],
        sintaks : [
            {   
                id : 1,
                name : "$unset",
                db : `{ $unset: { field: "" } }`,
                contoh : `db.users.updateOne(
  { name: "Budi" },
  { $unset: { city: "" } }
)`,
                analogi : `UPDATE users SET city = NULL WHERE name = 'Budi';`
            },
            
        ], 
    },
    {
        parentId : 6,
        temaId : 5,
        name : "$inc",
        deskripsi : "Operator untuk menambah atau mengurangi nilai numerik pada field.",
        objek : ["Document", "Field Numeric"],
        sintaks : [
            {   
                id : 1,
                name : "$inc",
                db : `{ $inc: { field: number } }`,
                contoh : `db.users.updateOne(
  { name: "Budi" },
  { $inc: { age: 1 } }
)`,
                analogi : `UPDATE users SET age = age + 1 WHERE name = 'Budi';`
            },
            
        ], 
    },
    {
        parentId : 6,
        temaId : 6,
        name : "$push",
        deskripsi : "Operator untuk menambahkan nilai ke dalam array dalam dokumen.",
        objek : ["Document", "Field Array"],
        sintaks : [
            {   
                id : 1,
                name : "$push",
                db : `{ $push: { field: value } }`,
                contoh : `db.users.updateOne(
  { name: "Budi" },
  { $push: { hobbies: "mancing" } }
)`,
                analogi : `INSERT INTO user_hobbies (user_id, hobby_id)
VALUES (1, 3);`
            },
            
        ], 
    },
    {
        parentId : 6,
        temaId : 7,
        name : "$pull",
        deskripsi : "Operator untuk menghapus nilai tertentu dari array.",
        objek : ["Document", "Field Array"],
        sintaks : [
            {   
                id : 1,
                name : "$pull",
                db : `{ $pull: { field: value } }`,
                contoh : `db.users.updateOne(
  { name: "Budi" },
  { $pull: { hobbies: "mancing" } }
)`,
                analogi : `DELETE FROM user_hobbies WHERE user_id = ? AND hobby = 'mancing';`
            },
            
        ], 
    },
    {
        parentId : 6,
        temaId : 8,
        name : "$addToSet",
        deskripsi : "Operator untuk menambahkan elemen ke array hanya jika elemen tersebut belum ada.",
        objek : ["Document", "Field Array"],
        sintaks : [
            {   
                id : 1,
                name : "$pull",
                db : `{ $addToSet: { field: value } }`,
                contoh : `db.users.updateOne(
  { name: "Budi" },
  { $addToSet: { hobbies: "membaca" } }
)`,
                analogi : `DIF NOT EXISTS (
  SELECT 1 FROM user_hobbies WHERE user_id = ? AND hobby = 'membaca'
) THEN
  INSERT INTO user_hobbies (user_id, hobby) VALUES (?, 'membaca');
END IF;
`
            },
            
        ], 
    },
    
    
    {
        parentId : 7,
        temaId : 1,
        name : "deleteOne()",
        deskripsi : "Digunakan untuk menghapus satu dokumen pertama yang cocok dengan kondisi (filter) tertentu di dalam sebuah koleksi. Jika ada banyak dokumen yang cocok, hanya dokumen pertama yang akan dihapus.",
        objek : ["Database", "Collection", "Document", "Query (Filter dokumen yang akan dihapus)"],
        sintaks : [
            {   
                id : 1,
                name : "deleteOne()",
                db : `db.collection.deleteOne(<filter>)`,
                contoh : `db.users.deleteOne({ name: "Budi" })`,
                analogi : `DELETE FROM users WHERE name = 'Budi' LIMIT 1;`
            },
            
        ], 
    },
    {
        parentId : 7,
        temaId : 2,
        name : "deleteMany()",
        deskripsi : "Digunakan untuk menghapus semua dokumen yang cocok dengan kondisi tertentu dalam sebuah koleksi.",
        objek : ["Database", "Collection", "Document", "Query (Filter dokumen yang akan dihapus)"],
        sintaks : [
            {   
                id : 1,
                name : "deleteMany()",
                db : `db.collection.deleteMany(<filter>)`,
                contoh : `db.users.deleteMany({ city: "Jakarta" })`,
                analogi : `DELETE FROM users WHERE city = 'Jakarta';`
            },
            
        ], 
    },
    
    
    {
        parentId : 8,
        temaId : 1,
        name : "createIndex()",
        deskripsi : "Digunakan untuk membuat indeks pada field tertentu dalam sebuah collection. Tujuannya agar pencarian data (query) menjadi lebih cepat dan efisien, terutama jika collection sudah memiliki banyak dokumen.",
        objek : ["Collection", "Field dalam Document"],
        sintaks : [
            {   
                id : 1,
                name : "createIndex()",
                db : `db.collection.createIndex({ fieldName: 1 })`,
                contoh : `db.users.createIndex({ email: 1 })`,
                analogi : `CREATE INDEX idx_email ON users(email);`
            },
            
        ], 
    },
    {
        parentId : 8,
        temaId : 2,
        name : "Text Index",
        deskripsi : "Digunakan untuk pencarian berbasis teks, misalnya saat menggunakan operator $text. Cocok untuk pencarian keyword seperti fitur search.",
        objek : ["Collection", "Field Teks"],
        sintaks : [
            {   
                id : 1,
                name : "Text Index",
                db : `db.collection.createIndex({ fieldName: "text" })`,
                contoh : `db.articles.createIndex({ content: "text" })`,
                analogi : `FULLTEXT INDEX(content)`
            },
            
        ], 
    },
    {
        parentId : 8,
        temaId : 3,
        name : "Compound Index",
        deskripsi : "Adalah index yang dibuat berdasarkan lebih dari satu field. Berguna saat query sering melibatkan kombinasi beberapa field.",
        objek : ["Collection", "Beberapa field dalam component"],
        sintaks : [
            {   
                id : 1,
                name : "Compound Index",
                db : `db.collection.createIndex({ field1: 1, field2: -1 })`,
                contoh : `db.orders.createIndex({ customerId: 1, orderDate: -1 })`,
                analogi : `CREATE INDEX idx_customer_date ON orders(customerId ASC, orderDate DESC);`
            },
            
        ], 
    },
    {
        parentId : 8,
        temaId : 4,
        name : "dropIndex()",
        deskripsi : "Digunakan untuk menghapus index tertentu dari sebuah collection.",
        objek : ["Collection", "Nama Index atau struktur field index"],
        sintaks : [
            {   
                id : 1,
                name : "Compound Index",
                db : `db.collection.dropIndex({ fieldName: 1 })`,
                contoh : `db.users.dropIndex({ email: 1 })`,
                analogi : `DROP INDEX email_1 ON users;`
            },
            
        ], 
    },
    {
        parentId : 8,
        temaId : 5,
        name : "explain() for Analysis",
        deskripsi : "Digunakan untuk menganalisis dan melihat bagaimana MongoDB menjalankan query: apakah menggunakan index, berapa dokumen yang dipindai, dll. Ini membantu melakukan optimasi.",
        objek : ["Query", "Collection", "Index (Secara tidak langsung)"],
        sintaks : [
            {   
                id : 1,
                name : "explain() for Analysis",
                db : `db.collection.find(query).explain()`,
                contoh : `db.users.find({ email: "user@example.com" }).explain()`,
                analogi : `EXPLAIN SELECT * FROM users WHERE email = 'user@example.com';`
            },
            
        ], 
    },
]

export {
    TemaDetails,
    TemaDetailsMongodb
}