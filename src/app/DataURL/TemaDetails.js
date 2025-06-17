const TemaDetails = [
    {
        parentId: 0,
        temaId: 1,
        name: "Perkenalan",
        perkenalan: [
            {
                title: "Pengertian",
                body: "MySQL adalah sistem manajemen basis data relasional (RDBMS) berbasis SQL. Data disimpan dalam bentuk tabel yang saling berelasi. MySQL cocok untuk menyimpan data terstruktur dan konsisten."
            },
            {
                title: "Analogi",
                body: "Bayangkan MySQL seperti lemari arsip: setiap map harus rapi dan sesuai format. Setiap data punya tempat dan aturan penulisan."
            },
            {
                title: "Apa yang terjadi jika tidak sesuai?",
                body: "Jika data tidak sesuai aturan (misal: umur diisi teks), MySQL akan menolak dan memberi pesan error demi menjaga konsistensi."
            },
            {
                title: "Cocok digunakan untuk apa saja?",
                body: "Cocok untuk aplikasi kasir, sistem absensi, pencatatan transaksi, keuangan, dsb — pokoknya aplikasi dengan data terstruktur."
            }
        ],

        komponen: [
            {
                id: 1,
                name: "Database",
                deskripsi: "Database adalah tempat utama untuk menyimpan semua data. Bisa dibayangkan seperti sebuah lemari besar yang di dalamnya kamu taruh banyak map atau dokumen. Di dalam MySQL dan MongoDB, semua data disimpan di dalam database sebagai wadah utama.",
                sintaks: "CREATE DATABASE nama_database;",
                contoh: "CREATE DATABASE toko_online;",
            },
            {
                id: 2,
                name: "Tabel",
                deskripsi: "Tabel adalah tempat di dalam database untuk menyimpan data yang rapi dan terstruktur. Bisa dibayangkan seperti formulir berbaris yang semua kolomnya sudah ditentukan.",
                sintaks: `CREATE TABLE nama_tabel (
  kolom1 TipeData,
  kolom2 TipeData,
  ...
);`,
                contoh: `CREATE TABLE pelanggan (
  id INT,
  nama VARCHAR(100),
  email VARCHAR(100)
);
`,
            },
            {
                id: 3,
                name: "Baris",
                deskripsi: "Baris adalah satu data utuh di dalam tabel. Misalnya, satu baris bisa berisi data satu pelanggan lengkap (nama, umur, email).",
                sintaks: `INSERT INTO nama_tabel (kolom1, kolom2) VALUES (data1, data2);`,
                contoh: `INSERT INTO pelanggan (nama, email) VALUES ('Siti', 'siti@email.com');`,
            },
            {
                id: 4,
                name: "Kolom",
                deskripsi: "Kolom adalah tipe data tertentu dalam sebuah tabel, misalnya kolom untuk nama, kolom untuk umur, kolom untuk email, dsb. Semua baris harus mengikuti kolom yang sudah dibuat.",
                sintaks: `nama_kolom TipeData`,
                contoh: `nama VARCHAR(100)`,
            },
            {
                id: 5,
                name: "Schema",
                deskripsi: "Skema adalah aturan atau struktur yang mendefinisikan bentuk data: kolom apa saja yang ada, jenis datanya apa, boleh kosong atau tidak.",
                sintaks: `CREATE TABLE produk (
  id INT NOT NULL,
  nama VARCHAR(50),
  harga DECIMAL(10,2)
);
`,
                contoh: `const ProdukSchema = new Schema({
  nama: String,
  harga: Number
});
`,
            },
            {
                id: 6,
                name: "Query",
                deskripsi: "Query adalah perintah untuk mengambil atau memanipulasi data. Bisa untuk mencari data, menambah, mengubah, atau menghapus.",
                contoh: `SELECT * FROM pelanggan WHERE nama = 'Budi';`,
            },
        ]
    },
    // 0. Perkenalan
    {
        parentId: 1,
        temaId: 0,
        name: "Perkenalan",
        perkenalan: [
            {
                title: "Pengertian",
                body: "SQL Statement adalah perintah untuk mengelola database, mulai dari membuat, membaca, mengubah, hingga menghapus data."
            },
            {
                title: "Contoh Nyata",
                body: "Perintah SELECT untuk mengambil data siswa, INSERT untuk menambah data, UPDATE untuk mengubah data, dan DELETE untuk menghapus data."
            },
            {
                title: "Analogi",
                body: "SQL Statement seperti instruksi ke pelayan restoran: ambilkan menu (SELECT), tambah pesanan (INSERT), ubah pesanan (UPDATE), batalkan pesanan (DELETE)."
            }
        ],
        objek: ["DDL", "DML", "DCL", "TCL"],
        analogi: "Instruksi ke database, seperti membuat/menghapus tabel, menambah/mengupdate data, dsb.",
        sintaks: [
            {
                id: 1,
                name: "SQL Commands",
                contoh: `SELECT * FROM users;`
            }
        ]
    },

    // 1. CREATE (DDL)
    {
        parentId: 1,
        temaId: 1,
        name: "CREATE",
        deskripsi: "Digunakan untuk membuat objek baru di database (database, table, view, index, dsb).",
        objek: ["Database", "Table", "View", "Index", "User"],
        sintaks: [
            {
                id: 1,
                name: "Create Table",
                db: `CREATE TABLE nama_tabel (kolom1 tipe_data, ...);`,
                contoh: `CREATE TABLE siswa (id INT PRIMARY KEY, nama VARCHAR(100));`
            }
        ]
    },

    // 2. ALTER (DDL)
    {
        parentId: 1,
        temaId: 2,
        name: "ALTER",
        deskripsi: "Mengubah struktur dari objek yang sudah ada di database (biasanya table). Misalnya, kamu bisa menambah kolom baru, menghapus kolom, mengganti nama kolom, atau mengubah tipe data kolom pada tabel. Biasanya digunakan saat aplikasi berkembang dan butuh kolom tambahan, seperti menambah kolom no_hp di tabel siswa. Analoginya itu seperti ALTER itu seperti merenovasi bagian rumah: bisa nambah pintu, sekat, atau mengubah fungsi ruangan tanpa membangun rumah dari nol.",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Tambah Kolom",
                db: `ALTER TABLE nama_tabel ADD nama_kolom tipe_data;`,
                contoh: `ALTER TABLE siswa ADD email VARCHAR(100);`
            }
        ]
    },

    // 3. DROP (DDL)
    {
        parentId: 1,
        temaId: 3,
        name: "DROP",
        deskripsi: "Menghapus objek secara permanen (database, tabel, view, index).",
        objek: ["Database", "Table", "View", "Index"],
        sintaks: [
            {
                id: 1,
                name: "Drop Table",
                db: `DROP TABLE nama_tabel;`,
                contoh: `DROP TABLE siswa;`
            }
        ]
    },

    // 4. TRUNCATE (DDL)
    {
        parentId: 1,
        temaId: 4,
        name: "TRUNCATE",
        deskripsi: "TRUNCATE berfungsi untuk menghapus seluruh data dalam satu tabel secara permanen dan cepat, tetapi struktur tabelnya tetap utuh dan siap diisi lagi. Biasanya dipakai untuk mengosongkan tabel tanpa menghapus tabel itu sendiri. Contoh kasus penggunaannya seperti membersihkan data transaksi bulan lalu agar bisa mulai periode baru. Permisalannya bisa seperti mengosongkan seluruh isi lemari, tapi lemarinya tetap berdiri di tempat, siap dipakai lagi. Analogi, bisa seperti menghapus semua tulisan di papan tulis dalam sekali usap, tanpa mengganti papan tulisnya",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Truncate Table",
                db: `TRUNCATE TABLE nama_tabel;`,
                contoh: `TRUNCATE TABLE siswa;`
            }
        ]
    },

    // 5. INSERT (DML)
    {
        parentId: 1,
        temaId: 5,
        name: "INSERT",
        deskripsi: "Menambahkan data baru ke tabel.",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Insert Data",
                db: `INSERT INTO nama_tabel (kolom1, kolom2) VALUES (nilai1, nilai2);`,
                contoh: `INSERT INTO siswa (id, nama) VALUES (1, 'Budi');`
            }
        ]
    },

    // 6. REPLACE (DML)
    {
        parentId: 1,
        temaId: 6,
        name: "REPLACE",
        deskripsi: "Memasukkan baris data, dan jika ada yang duplikat (primary key/unique), data lama akan diganti.",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Replace Data",
                db: `REPLACE INTO nama_tabel (kolom1, kolom2) VALUES (nilai1, nilai2);`,
                contoh: `REPLACE INTO siswa (id, nama) VALUES (1, 'Budi Baru');`
            }
        ]
    },

    // 7. MERGE (DML)
    {
        parentId: 1,
        temaId: 7,
        name: "MERGE",
        deskripsi: "Digunakan untuk melakukan INSERT atau UPDATE tergantung kondisi (ada di Oracle/SQL Server, bukan di MySQL/SQLite).",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Merge Data",
                db: `MERGE INTO target_tabel USING sumber_tabel ON kondisi WHEN MATCHED THEN UPDATE ... WHEN NOT MATCHED THEN INSERT ...;`,
                contoh: `-- Syntax Oracle/SQL Server, bukan MySQL standar`
            }
        ]
    },

    // 8. UPDATE (DML)
    {
        parentId: 1,
        temaId: 8,
        name: "UPDATE",
        deskripsi: "Mengubah data pada tabel.",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Update Data",
                db: `UPDATE nama_tabel SET kolom = nilai WHERE kondisi;`,
                contoh: `UPDATE siswa SET nama = 'Ali' WHERE id = 1;`
            }
        ]
    },

    // 9. DELETE (DML)
    {
        parentId: 1,
        temaId: 9,
        name: "DELETE",
        deskripsi: "Menghapus baris data dari tabel.",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Delete Data",
                db: `DELETE FROM nama_tabel WHERE kondisi;`,
                contoh: `DELETE FROM siswa WHERE id = 2;`
            }
        ]
    },

    // 10. SELECT (DML)
    {
        parentId: 1,
        temaId: 10,
        name: "SELECT",
        deskripsi: "Mengambil data dari satu atau lebih tabel.",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Select Data",
                db: `SELECT kolom1, kolom2 FROM nama_tabel;`,
                contoh: `SELECT nama FROM siswa;`
            }
        ]
    },

    // 11. WHERE (DML)
    {
        parentId: 1,
        temaId: 11,
        name: "WHERE",
        deskripsi: "Memfilter data hasil query berdasarkan kondisi.",
        objek: ["Table", "Kolom"],
        sintaks: [
            {
                id: 1,
                name: "Filter Data",
                db: `SELECT * FROM nama_tabel WHERE kondisi;`,
                contoh: `SELECT * FROM siswa WHERE nama = 'Budi';`
            }
        ]
    },

    // 12. ORDER BY (DML)
    {
        parentId: 1,
        temaId: 12,
        name: "ORDER BY",
        deskripsi: "Mengurutkan hasil query.",
        objek: ["Table", "Kolom"],
        sintaks: [
            {
                id: 1,
                name: "Urutkan Data",
                db: `SELECT * FROM nama_tabel ORDER BY kolom ASC|DESC;`,
                contoh: `SELECT * FROM siswa ORDER BY nama ASC;`
            }
        ]
    },

    // 13. LIMIT AND OFFSET (DML)
    {
        parentId: 1,
        temaId: 13,
        name: "LIMIT AND OFFSET",
        deskripsi: "Membatasi jumlah baris hasil query (LIMIT), dan melewati sejumlah baris awal (OFFSET).",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Limit Data",
                db: `SELECT * FROM nama_tabel LIMIT jumlah OFFSET jumlah;`,
                contoh: `SELECT * FROM siswa LIMIT 5 OFFSET 2;`
            }
        ]
    },

    // 14. DISTINCT (DML)
    {
        parentId: 1,
        temaId: 14,
        name: "DISTINCT",
        deskripsi: "Mengambil data unik (tidak duplikat) pada kolom tertentu.",
        objek: ["Kolom"],
        sintaks: [
            {
                id: 1,
                name: "Data Unik",
                db: `SELECT DISTINCT kolom FROM nama_tabel;`,
                contoh: `SELECT DISTINCT kelas FROM siswa;`
            }
        ]
    },

    // 15. IN (DML)
    {
        parentId: 1,
        temaId: 15,
        name: "IN",
        deskripsi: "Memilih data yang cocok dengan salah satu nilai pada daftar.",
        objek: ["Kolom"],
        sintaks: [
            {
                id: 1,
                name: "Data IN List",
                db: `SELECT * FROM nama_tabel WHERE kolom IN (v1, v2, ...);`,
                contoh: `SELECT * FROM siswa WHERE kelas IN ('10', '11');`
            }
        ]
    },

    // 16. BETWEEN (DML)
    {
        parentId: 1,
        temaId: 16,
        name: "BETWEEN",
        deskripsi: "Memilih data yang berada dalam rentang nilai.",
        objek: ["Kolom angka/tanggal"],
        sintaks: [
            {
                id: 1,
                name: "Data di Rentang",
                db: `SELECT * FROM nama_tabel WHERE kolom BETWEEN x AND y;`,
                contoh: `SELECT * FROM siswa WHERE umur BETWEEN 15 AND 17;`
            }
        ]
    },

    // 17. LIKE (DML)
    {
        parentId: 1,
        temaId: 17,
        name: "LIKE",
        deskripsi: "Mencari data berdasarkan pola (pattern).",
        objek: ["Kolom teks"],
        sintaks: [
            {
                id: 1,
                name: "Pattern Matching",
                db: `SELECT * FROM nama_tabel WHERE kolom LIKE 'pola';`,
                contoh: `SELECT * FROM siswa WHERE nama LIKE 'A%';`
            }
        ]
    },

    // 18. IS NULL (DML)
    {
        parentId: 1,
        temaId: 18,
        name: "IS NULL",
        deskripsi: "Memeriksa apakah kolom bernilai NULL.",
        objek: ["Kolom"],
        sintaks: [
            {
                id: 1,
                name: "Cek NULL",
                db: `SELECT * FROM nama_tabel WHERE kolom IS NULL;`,
                contoh: `SELECT * FROM siswa WHERE email IS NULL;`
            }
        ]
    },

    // 19. GROUP BY (DML)
    {
        parentId: 1,
        temaId: 19,
        name: "GROUP BY",
        deskripsi: "Mengelompokkan data berdasarkan kolom tertentu.",
        objek: ["Kolom"],
        sintaks: [
            {
                id: 1,
                name: "Kelompokkan Data",
                db: `SELECT kolom, COUNT(*) FROM nama_tabel GROUP BY kolom;`,
                contoh: `SELECT kelas, COUNT(*) FROM siswa GROUP BY kelas;`
            }
        ]
    },

    // 20. HAVING (DML)
    {
        parentId: 1,
        temaId: 20,
        name: "HAVING",
        deskripsi: "Memfilter hasil group by dengan kondisi agregat.",
        objek: ["Fungsi agregat"],
        sintaks: [
            {
                id: 1,
                name: "Filter GROUP BY",
                db: `SELECT kolom, COUNT(*) FROM nama_tabel GROUP BY kolom HAVING COUNT(*) > n;`,
                contoh: `SELECT kelas, COUNT(*) FROM siswa GROUP BY kelas HAVING COUNT(*) > 2;`
            }
        ]
    },

    // 21. ALIAS (DML)
    {
        parentId: 1,
        temaId: 21,
        name: "ALIAS",
        deskripsi: "Memberi nama sementara pada kolom atau tabel.",
        objek: ["Kolom", "Tabel"],
        sintaks: [
            {
                id: 1,
                name: "Alias Nama",
                db: `SELECT kolom AS alias FROM nama_tabel;`,
                contoh: `SELECT nama AS NamaLengkap FROM siswa;`
            }
        ]
    },

    // 22. GRANT (DCL)
    {
        parentId: 1,
        temaId: 22,
        name: "GRANT",
        deskripsi: "Memberikan hak akses pada user untuk objek tertentu.",
        objek: ["User", "Table"],
        sintaks: [
            {
                id: 1,
                name: "Grant Hak Akses",
                db: `GRANT hak_akses ON nama_tabel TO nama_user;`,
                contoh: `GRANT SELECT ON siswa TO user1;`
            }
        ]
    },

    // 23. REVOKE (DCL)
    {
        parentId: 1,
        temaId: 23,
        name: "REVOKE",
        deskripsi: "Mencabut hak akses user dari objek tertentu.",
        objek: ["User", "Table"],
        sintaks: [
            {
                id: 1,
                name: "Revoke Hak Akses",
                db: `REVOKE hak_akses ON nama_tabel FROM nama_user;`,
                contoh: `REVOKE SELECT ON siswa FROM user1;`
            }
        ]
    },

    // 24. BEGIN (TCL)
    {
        parentId: 1,
        temaId: 24,
        name: "BEGIN",
        deskripsi: "Memulai transaksi.",
        objek: ["Transaksi"],
        sintaks: [
            {
                id: 1,
                name: "Mulai Transaksi",
                db: `BEGIN;`,
                contoh: `BEGIN;`
            }
        ]
    },

    // 25. COMMIT (TCL)
    {
        parentId: 1,
        temaId: 25,
        name: "COMMIT",
        deskripsi: "Menyimpan perubahan data dalam transaksi.",
        objek: ["Transaksi"],
        sintaks: [
            {
                id: 1,
                name: "Commit Data",
                db: `COMMIT;`,
                contoh: `COMMIT;`
            }
        ]
    },

    // 26. ROLLBACK (TCL)
    {
        parentId: 1,
        temaId: 26,
        name: "ROLLBACK",
        deskripsi: "Membatalkan semua perubahan dalam transaksi.",
        objek: ["Transaksi"],
        sintaks: [
            {
                id: 1,
                name: "Rollback Data",
                db: `ROLLBACK;`,
                contoh: `ROLLBACK;`
            }
        ]
    },

    // 27. SAVEPOINT (TCL)
    {
        parentId: 1,
        temaId: 27,
        name: "SAVEPOINT",
        deskripsi: "Membuat titik checkpoint dalam transaksi, agar bisa rollback sebagian.",
        objek: ["Transaksi"],
        sintaks: [
            {
                id: 1,
                name: "Buat Savepoint",
                db: `SAVEPOINT nama_titik;`,
                contoh: `SAVEPOINT checkpoint1;`
            }
        ]
    },

    // 28. DESCRIBE (Utility)
    {
        parentId: 1,
        temaId: 28,
        name: "DESCRIBE",
        deskripsi: "Menampilkan struktur tabel (kolom, tipe data, dsb).",
        objek: ["Table"],
        sintaks: [
            {
                id: 1,
                name: "Lihat Struktur",
                db: `DESCRIBE nama_tabel;`,
                contoh: `DESCRIBE siswa;`
            }
        ]
    },

    // 29. SHOW (Utility)
    {
        parentId: 1,
        temaId: 29,
        name: "SHOW",
        deskripsi: "Menampilkan metadata dari database (tabel, kolom, index, dsb).",
        objek: ["Database", "Table"],
        sintaks: [
            {
                id: 1,
                name: "Show Tables",
                db: `SHOW TABLES;`,
                contoh: `SHOW TABLES;`
            }
        ]
    },

    // 30. EXPLAIN (Utility)
    {
        parentId: 1,
        temaId: 30,
        name: "EXPLAIN",
        deskripsi: "Menampilkan execution plan dari query (untuk optimasi).",
        objek: ["Query"],
        sintaks: [
            {
                id: 1,
                name: "Analisa Query",
                db: `EXPLAIN SELECT ... FROM ...;`,
                contoh: `EXPLAIN SELECT * FROM siswa;`
            }
        ]
    },

    {
        parentId: 2,
        temaId: 0,
        name: "Perkenalan",
        perkenalan: [
            {
                title: "Relasi",
                body: `Relasi adalah hubungan antar-tabel dalam sebuah database. Relasi menghubungkan data di satu tabel dengan data di tabel lain, biasanya menggunakan kunci unik seperti Primary Key dan Foreign Key. Dengan adanya relasi, data bisa tetap terstruktur, tidak redundant (berulang-ulang), dan mudah diakses serta dimodifikasi.`,
                contoh: `dalam sistem toko online, tabel pelanggan terhubung dengan tabel pesanan menggunakan kolom id pelanggan sebagai penghubung (foreign key).`
            },
            {
                title: "Join",
                body: `adalah perintah SQL yang digunakan untuk mengambil (menggabungkan) data dari dua atau lebih tabel yang punya hubungan (relasi). Dengan JOIN, kamu bisa menampilkan data yang tersebar di beberapa tabel sekaligus, tanpa perlu menyimpan data yang sama berkali-kali di banyak tempat.
JOIN memanfaatkan kolom yang berelasi (primary key dan foreign key) sebagai dasar penggabungan.`,
                contoh: `Menampilkan daftar nama pelanggan bersama dengan total belanjaannya, padahal data nama ada di tabel pelanggan dan total belanja ada di tabel pesanan.`
            },
            {
                title: "Primary Key",
                body: "Primary key adalah kolom unik di satu tabel yang digunakan sebagai identitas tiap baris, seperti id_pelanggan."
            },
            {
                title: "Foreign Key",
                body: "Foreign key adalah kolom yang menunjuk ke primary key di tabel lain, berfungsi membangun relasi antar tabel."
            },
            {
                title: "1-to-1",
                body: "Setiap baris di tabel A hanya berhubungan dengan satu baris di tabel B dan sebaliknya. Misal: tabel orang dan tabel paspor."
            },
            {
                title: "1-to-many",
                body: "Satu baris di tabel A bisa terhubung dengan banyak baris di tabel B. Misal: satu pelanggan punya banyak pesanan."
            },
            {
                title: "many-to-1",
                body: "Banyak baris di tabel A mengarah ke satu baris di tabel B. (Kebalikan dari 1-to-many, contoh: banyak pesanan milik satu pelanggan)"
            },
            {
                title: "Contoh Nyata",
                body: "Contoh: Tabel pelanggan berisi data customer, tabel pesanan berisi daftar order, relasinya pakai id_pelanggan. Dengan JOIN, kamu bisa tahu siapa pesan apa dan berapa totalnya."
            },
            {
                title: "Analogi",
                body: "Analogi: Seperti menggabungkan daftar tamu dan daftar makanan yang dipesan pada acara ulang tahun, sehingga kamu tahu siapa pesan apa."
            }
        ],
        objek: [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "FULL OUTER JOIN (tidak di MySQL)",
            "CROSS JOIN",
            "SELF JOIN"
        ],
        sintaks: [
            {
                id: 1,
                name: "Contoh JOIN",
                contoh: `SELECT pelanggan.nama, pesanan.total 
FROM pelanggan JOIN pesanan ON pelanggan.id_pelanggan = pesanan.id_pelanggan;`
            }
        ]
    }
    ,
    {
        parentId: 2,
        temaId: 1,
        name: "INNER JOIN",
        deskripsi: `
INNER JOIN digunakan untuk mengambil data yang cocok di kedua tabel berdasarkan kolom relasi (biasanya primary key dan foreign key). Hanya baris yang punya kecocokan di kedua tabel yang ditampilkan. Kasus penggunannya adalah Menampilkan daftar pelanggan beserta pesanan mereka, hanya untuk pelanggan yang memang punya pesanan. Permisalannya Seperti mencari nama-nama siswa yang ikut ekskul basket sekaligus ikut lomba, hanya siswa yang ada di kedua daftar yang akan muncul. Analogi INNER JOIN seperti mencocokkan daftar tamu yang benar-benar hadir ke acara dengan daftar yang mengisi buku tamu; hanya yang ada di kedua daftar yang muncul di laporan.
  `,
        objek: ["Tabel yang saling terhubung"],
        sintaks: [
            {
                id: 1,
                name: "Join / Gabungan Data",
                db: `SELECT a.kolom, b.kolom
FROM tabelA a
INNER JOIN tabelB b ON a.id = b.id_relasi;`,
                contoh: `SELECT karyawan.nama, departemen.nama
FROM karyawan
INNER JOIN departemen ON karyawan.id_departemen = departemen.id;`
            }
        ]
    },
    {
        parentId: 2,
        temaId: 2,
        name: "LEFT JOIN",
        deskripsi: `
LEFT JOIN menampilkan semua data dari tabel kiri dan yang cocok dari tabel kanan. Jika di tabel kanan tidak ada kecocokan, akan ditampilkan NULL. Kasus penggunannya adalah Menampilkan semua pelanggan, baik yang pernah melakukan pemesanan maupun yang belum pernah sama sekali. Permisalannya Seperti daftar seluruh siswa di sekolah, lalu dicocokkan dengan daftar yang pernah meminjam buku. Semua siswa tetap ditampilkan, meskipun ada yang tidak pernah meminjam. Analogi LEFT JOIN seperti daftar undangan pesta: semua yang diundang (tabel kiri) akan muncul, meskipun ada yang tidak hadir (tidak punya data di tabel kanan).
  `,
        objek: ["Tabel kiri dan kanan"],
        sintaks: [
            {
                id: 1,
                name: "Join",
                db: `SELECT a.kolom, b.kolom
FROM tabelA a
LEFT JOIN tabelB b ON a.id = b.id_relasi;`,
                contoh: `SELECT karyawan.nama, departemen.nama
FROM karyawan
LEFT JOIN departemen ON karyawan.id_departemen = departemen.id;`
            }
        ]
    },
    {
        parentId: 2,
        temaId: 3,
        name: "RIGHT JOIN",
        deskripsi: `
RIGHT JOIN menampilkan semua data dari tabel kanan dan yang cocok dari tabel kiri. Jika di tabel kiri tidak ada kecocokan, akan ditampilkan NULL. Kasus penggunannya adalah Menampilkan seluruh departemen, baik yang sudah punya karyawan maupun yang belum ada sama sekali. Permisalannya Seperti daftar buku di perpustakaan yang dicocokkan dengan siapa peminjamnya. Semua buku (tabel kanan) tetap tampil, meskipun ada yang belum pernah dipinjam (tidak punya kecocokan di tabel kiri). Analogi RIGHT JOIN seperti semua kursi di kelas (tabel kanan) — tampil semua, meski ada yang kosong (tidak terisi siswa).
  `,
        objek: ["Tabel kanan dan kiri"],
        sintaks: [
            {
                id: 1,
                name: "Join",
                db: `SELECT a.kolom, b.kolom
FROM tabelA a
RIGHT JOIN tabelB b ON a.id = b.id_relasi;`,
                contoh: `SELECT karyawan.nama, departemen.nama
FROM karyawan
RIGHT JOIN departemen ON karyawan.id_departemen = departemen.id;`
            }
        ]
    },
    {
        parentId: 2,
        temaId: 4,
        name: "UNION",
        deskripsi: `
UNION digunakan untuk menggabungkan hasil dari dua atau lebih query SELECT. Hasilnya akan digabung dan baris duplikat dihapus. Kasus penggunannya adalah Menggabungkan daftar nama pelanggan dari dua cabang toko berbeda, menampilkan hanya nama unik. Permisalannya Seperti menggabungkan dua daftar absen dari dua kelas, nama yang sama hanya akan muncul sekali. Analogi UNION seperti menyatukan dua album foto keluarga, jika ada foto yang sama, hanya disimpan satu saja.
  `,
        objek: ["Dua atau lebih hasil SELECT yang memiliki jumlah kolom dan tipe data yang sama."],
        sintaks: [
            {
                id: 1,
                name: "Kombinasi Data Hasil Query",
                db: `SELECT kolom1, kolom2 FROM tabelA
UNION
SELECT kolom1, kolom2 FROM tabelB;`,
                contoh: `SELECT nama, kota FROM pelanggan
UNION
SELECT nama, kota FROM supplier;`
            }
        ]
    },
    {
        parentId: 2,
        temaId: 5,
        name: "UNION ALL",
        deskripsi: `
UNION ALL menggabungkan hasil dua atau lebih query SELECT, **tanpa menghapus duplikat**. Semua data dari masing-masing query akan digabung utuh. Kasus penggunannya adalah Menggabungkan daftar transaksi dari dua sumber, dan butuh semua data (termasuk duplikat untuk audit). Permisalannya Seperti menggabungkan catatan transaksi dua kasir — transaksi yang sama bisa muncul lebih dari sekali. Analogi UNION ALL seperti mengumpulkan semua kupon belanja dari dua supermarket, walau ada kode yang sama, tetap dimasukkan semuanya.
  `,
        objek: ["Dua atau lebih hasil SELECT yang jumlah kolom dan tipe data sama."],
        sintaks: [
            {
                id: 1,
                name: "Kombinasi Data Hasil Query (Duplikat Ditampilkan)",
                db: `SELECT kolom1 FROM tabelA
UNION ALL
SELECT kolom1 FROM tabelB;`,
                contoh: `SELECT kota FROM pelanggan
UNION ALL
SELECT kota FROM supplier;`
            }
        ]
    },
    {
        parentId: 2,
        temaId: 6,
        name: "CROSS JOIN",
        deskripsi: `
CROSS JOIN menghasilkan kombinasi semua baris dari dua tabel (perkalian kartesius). Jumlah hasil = jumlah baris tabelA × jumlah baris tabelB. Kasus penggunannya adalah Membuat kombinasi produk dan warna yang tersedia (setiap produk akan dipasangkan dengan semua warna). Permisalannya Seperti membuat jadwal — setiap guru (tabel A) dijodohkan dengan semua kelas (tabel B), sehingga semua kemungkinan jadwal terbentuk. Analogi CROSS JOIN seperti semua kemungkinan kombinasi kaos dan celana di toko pakaian: setiap kaos dipasangkan dengan semua celana.
  `,
        objek: ["Tabel 1 x Tabel 2"],
        sintaks: [
            {
                id: 1,
                name: "Join / Cartesian Product",
                db: `SELECT * FROM tabelA CROSS JOIN tabelB;`,
                contoh: `SELECT * FROM karyawan CROSS JOIN departemen;`
            }
        ]
    },
    {
        parentId: 2,
        temaId: 7,
        name: "SELF JOIN",
        deskripsi: `
SELF JOIN adalah teknik untuk menggabungkan tabel dengan dirinya sendiri. Umumnya dipakai untuk struktur hierarki (misal karyawan dan atasannya). Kasus penggunannya adalah Mencari struktur atasan-bawahan di organisasi, seperti siapa manajer dari tiap karyawan. Permisalannya Seperti mencari siapa guru pembimbing dari tiap siswa dalam satu daftar yang sama. Analogi SELF JOIN seperti membandingkan daftar siswa untuk menemukan siapa yang jadi kakak kelas atau adik kelas, padahal semua ada di tabel yang sama.
  `,
        objek: [
            "Tabel tunggal (dipanggil dua kali dengan alias berbeda)",
            "Kolom relasi (biasanya foreign key dalam satu tabel)"
        ],
        sintaks: [
            {
                id: 1,
                name: "Join Diri Sendiri / Hierarki",
                db: `SELECT a.nama AS NamaKaryawan, b.nama AS NamaAtasan
FROM karyawan a
JOIN karyawan b ON a.id_atasan = b.id;`,
                contoh: `-- Menampilkan nama karyawan beserta nama atasannya
SELECT a.nama AS NamaKaryawan, b.nama AS NamaAtasan
FROM karyawan a
JOIN karyawan b ON a.id_atasan = b.id;`
            }
        ]
    },





    {
        parentId: 3,
        temaId: 0,
        name: "Perkenalan",
        perkenalan: [
            {
                title: "Pengertian",
                body: "View adalah objek database berupa tabel virtual yang berisi hasil dari query tertentu. Tidak menyimpan data fisik, hanya querynya saja."
            },
            {
                title: "Fungsi",
                body: "Digunakan untuk menyederhanakan query kompleks, membatasi akses data, dan memberikan perspektif khusus dari data."
            },
            {
                title: "Analogi",
                body: "Seperti filter di Excel, kamu hanya melihat data tertentu saja tanpa mengubah data asli."
            },
            {
                title: "Contoh Nyata",
                body: "Contoh: view_karyawan_IT menampilkan hanya karyawan dari departemen IT, padahal tabel aslinya menyimpan semua departemen."
            }
        ],
        sintaks: [
            {
                id: 1,
                name: "Membuat View",
                contoh: `CREATE VIEW view_karyawan_IT AS
SELECT nama, departemen FROM karyawan
WHERE departemen = 'IT';`
            }
        ]
    }
    ,
    {
        parentId: 3,
        temaId: 1,
        name: "CREATE VIEW",
        deskripsi: "Membuat tampilan virtual dari hasil query (seperti tabel semu) yang bisa digunakan seperti tabel biasa.",
        objek: ["View (berdasarkan SELECT dari tabel asli)"],
        sintaks: [
            {
                id: 1,
                name: "Join Diri Sendiri / Hierarki",
                db: `CREATE VIEW nama_view AS
SELECT kolom1, kolom2 FROM nama_tabel WHERE kondisi;
`,
                contoh: `CREATE VIEW view_karyawan_IT AS
SELECT nama, departemen FROM karyawan
WHERE departemen = 'IT';

`
            }
        ]
    },
    {
        parentId: 3,
        temaId: 2,
        name: "ALTER  VIEW",
        deskripsi: " ALTER digunakan untuk mengubah struktur tabel (atau objek database lain) setelah tabel sudah dibuat, tanpa menghapus data di dalamnya. ",
        objek: ["View yang sudah dibuat"],
        sintaks: [
            {
                id: 1,
                name: "DDL - Mengubah Struktur Objek",
                db: `ALTER VIEW nama_view AS
SELECT kolom1, kolom2 FROM nama_tabel WHERE kondisi_baru;
`,
                contoh: `ALTER VIEW view_karyawan_IT AS
SELECT nama, gaji FROM karyawan
WHERE departemen = 'IT';
`
            }
        ]
    },
    {
        parentId: 3,
        temaId: 3,
        name: "DROP  VIEW",
        deskripsi: "Menghapus view dari database.",
        objek: ["View"],
        sintaks: [
            {
                id: 1,
                name: "DDL - Mengubah Struktur Objek",
                db: `DROP VIEW nama_view;`,
                contoh: `DROP VIEW view_karyawan_IT;`
            }
        ]
    },
    {
        parentId: 3,
        temaId: 4,
        name: "SELECT FROM VIEW",
        deskripsi: "Mengambil data dari view seperti layaknya mengambil dari tabel biasa.",
        objek: ["View"],
        sintaks: [
            {
                id: 1,
                name: "DQL - Menampilkan data",
                db: `SELECT * FROM nama_view;`,
                contoh: `SELECT * FROM view_karyawan_IT;`
            }
        ]
    },
    {
        parentId: 3,
        temaId: 5,
        name: "UPDATE VIEW",
        deskripsi: "Mengubah data melalui view, jika view tersebut memenuhi syarat bisa diupdate (misalnya tidak mengandung agregat, JOIN kompleks, dsb).",
        objek: ["View (yang bisa diupdate)"],
        sintaks: [
            {
                id: 1,
                name: "Data Manipulation Language (DML) - Mengubah data",
                db: `UPDATE nama_view SET kolom = nilai WHERE kondisi;`,
                contoh: `UPDATE view_karyawan_IT
SET departemen = 'Teknologi Informasi'
WHERE nama = 'Budi';
`
            }
        ]
    },

    // Perkenalan
    {
        parentId: 4,
        temaId: 0,
        name: "Perkenalan",
        perkenalan: [
        {
            title: "Pengertian",
            body: `SQL Scalar Function adalah fungsi SQL yang menerima satu nilai (input) dan mengembalikan satu nilai (output). Fungsi ini biasanya digunakan untuk mengubah, menghitung, atau memanipulasi data dalam satu baris, seperti mengubah huruf jadi kapital, membulatkan angka, atau mengambil tanggal saat ini.`
        },
        {
            title: "Contoh Nyata",
            body: `Misalnya, saat menampilkan nama pelanggan, kamu ingin semua huruf kapital: gunakan UPPER(nama). Atau, ingin membulatkan nilai diskon ke dua angka desimal: gunakan ROUND(diskon, 2).`
        },
        {
            title: "Kegunaan",
            body: `Scalar function dipakai untuk manipulasi teks, angka, atau tanggal dalam SELECT, WHERE, ORDER BY, dsb.`
        },
        {
            title: "Analogi",
            body: `Bayangkan scalar function seperti kalkulator saku: setiap kali kamu masukkan satu angka/teks, kamu dapat satu hasil baru sesuai fungsi yang digunakan.`
        }
    ],
        objek: ["String", "Angka", "Tanggal"],
        analogi: "Scalar function itu seperti kalkulator saku: kamu masukkan satu angka/teks, keluar satu hasil.",
        sintaks: [
            {
                id: 1,
                name: "Contoh UPPER()",
                contoh: `SELECT UPPER('belajar sql');`
            }
        ]
    },
    // 1. UPPER()
    {
        parentId: 4,
        temaId: 1,
        name: "UPPER()",
        deskripsi: "Mengubah seluruh huruf dalam string menjadi huruf besar.",
        objek: ["String / Teks"],
        sintaks: [
            {
                id: 1,
                name: "Huruf Besar Semua",
                db: `UPPER(teks)`,
                contoh: `SELECT UPPER('halo dunia');`
            }
        ]
    },
    // 2. LOWER()
    {
        parentId: 4,
        temaId: 2,
        name: "LOWER()",
        deskripsi: "Mengubah seluruh huruf dalam string menjadi huruf kecil.",
        objek: ["String / Teks"],
        sintaks: [
            {
                id: 1,
                name: "Huruf Kecil Semua",
                db: `LOWER(teks)`,
                contoh: `SELECT LOWER('HALO DUNIA');`
            }
        ]
    },
    // 3. CONCAT()
    {
        parentId: 4,
        temaId: 3,
        name: "CONCAT()",
        deskripsi: "Menggabungkan dua atau lebih string menjadi satu.",
        objek: ["String / Teks"],
        sintaks: [
            {
                id: 1,
                name: "Gabung Teks",
                db: `CONCAT(teks1, teks2, ...)`,
                contoh: `SELECT CONCAT('Halo', ' ', 'Dunia');`
            }
        ]
    },
    // 4. SUBSTRING()
    {
        parentId: 4,
        temaId: 4,
        name: "SUBSTRING()",
        deskripsi: "Mengambil sebagian teks dari string.",
        objek: ["String / Teks"],
        sintaks: [
            {
                id: 1,
                name: "Potong Teks",
                db: `SUBSTRING(teks, posisi_awal, jumlah_karakter)`,
                contoh: `SELECT SUBSTRING('Halo Dunia', 6, 5); -- hasil: Dunia`
            }
        ]
    },
    // 5. LENGTH()
    {
        parentId: 4,
        temaId: 5,
        name: "LENGTH()",
        deskripsi: "Menghitung jumlah karakter dalam string (byte length).",
        objek: ["String / Teks"],
        sintaks: [
            {
                id: 1,
                name: "Hitung Panjang String",
                db: `LENGTH(teks)`,
                contoh: `SELECT LENGTH('Halo'); -- hasil: 4`
            }
        ]
    },
    // 6. CHAR_LENGTH()
    {
        parentId: 4,
        temaId: 6,
        name: "CHARLENGTH()",
        deskripsi: "Menghitung jumlah karakter sebenarnya dalam string.",
        objek: ["String / Teks"],
        sintaks: [
            {
                id: 1,
                name: "Hitung Jumlah Karakter",
                db: `CHAR_LENGTH(teks)`,
                contoh: `SELECT CHAR_LENGTH('Halo'); -- hasil: 4`
            }
        ]
    },
    // 7. ROUND()
    {
        parentId: 4,
        temaId: 7,
        name: "ROUND()",
        deskripsi: "Membulatkan angka ke jumlah desimal tertentu.",
        objek: ["Angka"],
        sintaks: [
            {
                id: 1,
                name: "Pembulatan Desimal",
                db: `ROUND(angka, jumlah_desimal)`,
                contoh: `SELECT ROUND(3.14159, 2); -- hasil: 3.14`
            }
        ]
    },
    // 8. CEIL()
    {
        parentId: 4,
        temaId: 8,
        name: "CEIL()",
        deskripsi: "Membulatkan angka ke atas ke bilangan bulat terdekat.",
        objek: ["Angka"],
        sintaks: [
            {
                id: 1,
                name: "Pembulatan Ke Atas",
                db: `CEIL(angka)`,
                contoh: `SELECT CEIL(4.2); -- hasil: 5`
            }
        ]
    },
    // 9. FLOOR()
    {
        parentId: 4,
        temaId: 9,
        name: "FLOOR()",
        deskripsi: "Membulatkan angka ke bawah ke bilangan bulat terdekat.",
        objek: ["Angka"],
        sintaks: [
            {
                id: 1,
                name: "Pembulatan Ke Bawah",
                db: `FLOOR(angka)`,
                contoh: `SELECT FLOOR(4.9); -- hasil: 4`
            }
        ]
    },
    // 10. MOD()
    {
        parentId: 4,
        temaId: 10,
        name: "MOD()",
        deskripsi: "Menghasilkan sisa pembagian dari dua angka.",
        objek: ["Angka"],
        sintaks: [
            {
                id: 1,
                name: "Sisa Bagi",
                db: `MOD(angka1, angka2)`,
                contoh: `SELECT MOD(10, 3); -- hasil: 1`
            }
        ]
    },
    // 11. FORMAT()
    {
        parentId: 4,
        temaId: 11,
        name: "FORMAT()",
        deskripsi: "Memformat angka sebagai string sesuai format tertentu (umumnya ribuan, desimal, dsb).",
        objek: ["Angka"],
        sintaks: [
            {
                id: 1,
                name: "Format Angka",
                db: `FORMAT(angka, jumlah_desimal)`,
                contoh: `SELECT FORMAT(12345.678, 2); -- hasil: '12,345.68'`
            }
        ]
    },
    // 12. NOW()
    {
        parentId: 4,
        temaId: 12,
        name: "NOW()",
        deskripsi: "Mengambil waktu lengkap saat ini (tanggal dan jam).",
        objek: ["Tanggal & Waktu (datetime)"],
        sintaks: [
            {
                id: 1,
                name: "Tanggal dan Waktu Sekarang",
                db: `NOW()`,
                contoh: `SELECT NOW();`
            }
        ]
    },
    // 13. CURDATE()
    {
        parentId: 4,
        temaId: 13,
        name: "CURDATE()",
        deskripsi: "Mengambil tanggal saat ini tanpa waktu.",
        objek: ["Tanggal"],
        sintaks: [
            {
                id: 1,
                name: "Tanggal Hari Ini",
                db: `CURDATE()`,
                contoh: `SELECT CURDATE();`
            }
        ]
    },
    // 14. DATEDIFF()
    {
        parentId: 4,
        temaId: 14,
        name: "DATEDIFF()",
        deskripsi: "Menghitung jumlah hari antara dua tanggal.",
        objek: ["Tanggal"],
        sintaks: [
            {
                id: 1,
                name: "Selisih Hari",
                db: `DATEDIFF(tanggal1, tanggal2)`,
                contoh: `SELECT DATEDIFF('2025-06-10', '2025-06-01'); -- hasil: 9`
            }
        ]
    },
    // 15. DATE_FORMAT()
    {
        parentId: 4,
        temaId: 15,
        name: "DATE_FORMAT()",
        deskripsi: "Mengubah tampilan tanggal ke format tertentu.",
        objek: ["Tanggal"],
        sintaks: [
            {
                id: 1,
                name: "Format Tanggal",
                db: `DATE_FORMAT(tanggal, 'format')`,
                contoh: `SELECT DATE_FORMAT(NOW(), '%d-%m-%Y'); -- hasil: 16-06-2025`
            }
        ]
    },
    // 16. CAST()
    {
        parentId: 4,
        temaId: 16,
        name: "CAST()",
        deskripsi: "Mengubah nilai ke tipe data lain (konversi tipe data).",
        objek: [
            "Angka", "Teks", "Tanggal", "Waktu", "Datetime", "Tahun",
            "Bit", "Biner Tetap", "Biner Variabel", "Blob"
        ],
        sintaks: [
            {
                id: 1,
                name: "Ubah Tipe Data",
                db: `CAST(nilai AS tipe_data)`,
                contoh: `SELECT CAST('123' AS UNSIGNED);`
            }
        ]
    },
    // 17. CONVERT()
    {
        parentId: 4,
        temaId: 17,
        name: "CONVERT()",
        deskripsi: "Fungsi alternatif untuk mengubah tipe data, mirip dengan CAST().",
        objek: [
            "Angka", "Teks", "Tanggal", "Waktu", "Datetime", "Tahun",
            "Bit", "Biner Tetap", "Biner Variabel", "Blob"
        ],
        sintaks: [
            {
                id: 1,
                name: "Konversi Tipe Data",
                db: `CONVERT(nilai, tipe_data)`,
                contoh: `SELECT CONVERT('2025-06-05', DATE);`
            }
        ]
    },
    // 18. IFNULL()
    {
        parentId: 4,
        temaId: 18,
        name: "IFNULL()",
        deskripsi: "Mengembalikan nilai pengganti jika suatu ekspresi bernilai NULL.",
        objek: ["Angka", "Teks", "Tanggal"],
        sintaks: [
            {
                id: 1,
                name: "Nilai Pengganti NULL",
                db: `IFNULL(nilai, nilai_pengganti)`,
                contoh: `SELECT IFNULL(email, 'email@tidak-ada.com') FROM users;`
            }
        ]
    },
    // 19. COALESCE()
    {
        parentId: 4,
        temaId: 19,
        name: "COALESCE()",
        deskripsi: "Mengembalikan nilai pertama yang tidak NULL dari daftar argumen.",
        objek: ["Angka", "Teks", "Tanggal"],
        sintaks: [
            {
                id: 1,
                name: "Nilai Pertama Bukan NULL",
                db: `COALESCE(nilai1, nilai2, ..., nilaiN)`,
                contoh: `SELECT COALESCE(email, nomor_hp, 'data kosong') FROM users;`
            }
        ]
    },
    // 20. IF()
    {
        parentId: 4,
        temaId: 20,
        name: "IF()",
        deskripsi: "Fungsi logika: mengembalikan nilai tertentu jika kondisi terpenuhi, atau nilai lain jika tidak.",
        objek: ["Angka", "Teks", "Tanggal", "Ekspresi"],
        sintaks: [
            {
                id: 1,
                name: "Percabangan IF",
                db: `IF(kondisi, nilai_jika_benar, nilai_jika_salah)`,
                contoh: `SELECT nama, IF(umur >= 17, 'Dewasa', 'Anak-anak') AS status FROM users;`
            }
        ]
    },
    // 21. CASE WHEN
    {
        parentId: 4,
        temaId: 21,
        name: "CASE WHEN",
        deskripsi: "CASE adalah bentuk percabangan lebih fleksibel, bisa banyak kondisi, mirip switch-case di bahasa pemrograman.",
        objek: ["Angka", "Teks", "Tanggal", "Ekspresi"],
        sintaks: [
            {
                id: 1,
                name: "Percabangan Multi-Kondisi",
                db:
                    `CASE
    WHEN kondisi1 THEN hasil1
    WHEN kondisi2 THEN hasil2
    ELSE hasil_default
END`,
                contoh:
                    `SELECT nama,
  CASE
    WHEN umur >= 21 THEN 'Dewasa'
    WHEN umur >= 13 THEN 'Remaja'
    ELSE 'Anak-anak'
  END AS kategori_usia
FROM users;`
            }
        ]
    },


    {
        parentId: 5,
        temaId: 0,
        name: "Perkenalan",
        perkenalan: [
        {
            title: "Pengertian",
            body: `Aggregate Function adalah fungsi SQL yang memproses banyak baris data sekaligus (bukan per baris), lalu mengembalikan satu nilai sebagai hasil agregasi. Fungsi ini dipakai untuk melakukan operasi seperti menghitung jumlah, mencari rata-rata, nilai terbesar, terkecil, dan sebagainya.`
        },
        {
            title: "Contoh Nyata",
            body: `Contoh: Menghitung jumlah karyawan dengan COUNT(*), rata-rata nilai ujian dengan AVG(nilai), total belanja customer dengan SUM(total), gaji tertinggi dengan MAX(gaji), atau harga termurah dengan MIN(harga).`
        },
        {
            title: "Kegunaan",
            body: `Aggregate function sangat penting saat ingin merangkum data, misal untuk laporan, statistik, atau ringkasan data di dashboard.`
        },
        {
            title: "Analogi",
            body: `Bayangkan aggregate function seperti kalkulator besar di kantor akuntan: ia menghitung total pengeluaran, rata-rata transaksi, atau mencari data ekstrem dari setumpuk catatan.`
        }
    ],
        objek: ["Kolom", "Banyak Baris"],
        analogi: "Aggregate function seperti kalkulator besar: menghitung total, rata-rata, minimum, maksimum dari sekumpulan data.",
        sintaks: [
            {
                id: 1,
                name: "Contoh COUNT",
                contoh: `SELECT COUNT(*) FROM karyawan;`
            }
        ]
    },

    {
        parentId: 5,
        temaId: 1,
        name: "COUNT()",
        deskripsi: "Menghitung jumlah baris dalam suatu kolom atau tabel, bisa semua baris atau hanya baris yang tidak NULL.",
        objek: ["Tabel", "Kolom", "Semua Baris", "Nilai Tidak Null"],
        sintaks: [
            {
                id: 1,
                name: "Menghitung Jumlah Data / Baris",
                db: `SELECT COUNT(nama_kolom) FROM nama_tabel;`,
                contoh: `SELECT COUNT(*) FROM karyawan;`
            }
        ]
    },
    {
        parentId: 5,
        temaId: 2,
        name: "SUM()",
        deskripsi: "Menjumlahkan semua nilai pada kolom numerik.",
        objek: ["Kolom bertipe angka/numerik, seperti : Gaji, Harga, Total Pembelian, Dan lainnya."],
        sintaks: [
            {
                id: 1,
                name: "Menjumlahkan Nilai",
                db: `SELECT SUM(nama_kolom) FROM nama_tabel;`,
                contoh: `SELECT SUM(gaji) FROM karyawan;`
            }
        ]
    },
    {
        parentId: 5,
        temaId: 3,
        name: "AVG()",
        deskripsi: "Menghitung nilai rata-rata dari kolom numerik.",
        objek: ["Kolom bertipe angka/numerik, seperti : Nilai Ujian, Gaji, Harga, Total Pembelian, Dan lainnya."],
        sintaks: [
            {
                id: 1,
                name: "Menghitung Rata-Rata",
                db: `SELECT AVG(nama_kolom) FROM nama_tabel;`,
                contoh: `SELECT AVG(nilai) FROM siswa;`
            }
        ]
    },
    {
        parentId: 5,
        temaId: 4,
        name: "MIN()",
        deskripsi: "Mengambil nilai terkecil dari kolom tertentu.",
        objek: ["Kolom bertipe angka, teks, atau tanggal, seperti : Harga Termurah, Tanggal Terlama, Total Pembelian, Dan lainnya."],
        sintaks: [
            {
                id: 1,
                name: "Nilai Terkecil",
                db: `SELECT MIN(nama_kolom) FROM nama_tabel;`,
                contoh: `SELECT MIN(harga) FROM produk;`
            }
        ]
    },
    {
        parentId: 5,
        temaId: 5,
        name: "MAX()",
        deskripsi: "Mengambil nilai terbesar dari kolom tertentu.",
        objek: ["Kolom bertipe angka, teks, atau tanggal, seperti : Harga Termurah, Tanggal Terlama, Total Pembelian, Gaji Tertinggi."],
        sintaks: [
            {
                id: 1,
                name: "Nilai Terbesar",
                db: `SELECT MAX(nama_kolom) FROM nama_tabel;`,
                contoh: `SELECT MAX(gaji) FROM karyawan;`
            }
        ]
    },

    {
        parentId: 6,
        temaId: 0,
        name: "Perkenalan",
        perkenalan: [
            {
                title: "Pengertian",
                body: "Trigger adalah kode SQL yang otomatis dijalankan ketika terjadi aksi tertentu pada tabel, seperti sebelum/ sesudah insert, update, atau delete."
            },
            {
                title: "Fungsi",
                body: "Menjaga konsistensi data, validasi otomatis, mencatat log perubahan, atau otomatisasi aksi lain pada perubahan data."
            },
            {
                title: "Analogi",
                body: "Seperti alarm otomatis di rumah: ada gerakan, alarm langsung aktif."
            },
            {
                title: "Contoh Nyata",
                body: "Contoh: Setelah data siswa ditambah, otomatis sistem mencatat waktu dan aksi pada tabel log."
            }
        ],
        sintaks: [
            {
                id: 1,
                name: "Contoh Trigger",
                contoh: `CREATE TRIGGER log_insert_siswa
AFTER INSERT ON siswa
FOR EACH ROW
BEGIN
  INSERT INTO log_aksi (aksi, waktu) VALUES ('Data siswa ditambah', NOW());
END;`
            }
        ]
    },
    {
        parentId: 6,
        temaId: 1,
        name: "CREATE TRIGGER",
        deskripsi: "Digunakan untuk membuat trigger yang akan otomatis berjalan saat terjadi INSERT, UPDATE, atau DELETE pada sebuah tabel.",
        objek: ["Tabel", "Trigger", "Nama Trigger", "Tabel yang Dipantau", "Waktu Eksekusi", "Aksi SQL"],
        sintaks: [
            {
                id: 1,
                name: "Membuat Pemicu Otomatis",
                db: `CREATE TRIGGER nama_trigger
waktu_trigger aksi_trigger
ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi SQL
END;
`,
                contoh: `CREATE TRIGGER log_insert_siswa
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
        parentId: 6,
        temaId: 2,
        name: "BEFORE TRIGGER",
        deskripsi: "Trigger dijalankan sebelum data baru dimasukkan ke dalam tabel.",
        objek: ["Tabel", "Data Baru", "Validasi Otomatis", "Modifikasi Nilai", "Cek Unik", "Set Default"],
        sintaks: [
            {
                id: 1,
                name: "Sebelum Data Ditambahkan",
                db: `CREATE TRIGGER nama_trigger
BEFORE INSERT ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi sebelum data dimasukkan
END;

`,
                contoh: `CREATE TRIGGER cek_email
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
        parentId: 6,
        temaId: 3,
        name: "AFTER INSERT",
        deskripsi: "Trigger dijalankan setelah data berhasil dimasukkan ke tabel.",
        objek: ["Tabel", "Log Tambah Data", "Audit Trail", "Notifikasi", "Insert Tambahan"],
        sintaks: [
            {
                id: 1,
                name: "Setelah Data Ditambahkan",
                db: `CREATE TRIGGER nama_trigger
AFTER INSERT ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi setelah data dimasukkan
END;
`,
                contoh: `CREATE TRIGGER log_tambah_produk
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
        parentId: 6,
        temaId: 4,
        name: "BEFORE UPDATE",
        deskripsi: "Trigger dijalankan sebelum data diubah dalam tabel.",
        objek: ["Tabel", "Validasi Update", "Cegah Perubahan", "Modifikasi Otomatis", "Cek Nilai Lama dan Baru"],
        sintaks: [
            {
                id: 1,
                name: "Sebelum Data Diubah",
                db: `CREATE TRIGGER nama_trigger
BEFORE UPDATE ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi sebelum update
END;
`,
                contoh: `CREATE TRIGGER cek_status_gaji
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
        parentId: 6,
        temaId: 5,
        name: "AFTER UPDATE",
        deskripsi: "Trigger dijalankan setelah data diubah dalam tabel.",
        objek: ["Tabel", "Log Perubahan", "Audit Update", "Catatan Histori", "Rekap Update"],
        sintaks: [
            {
                id: 1,
                name: "Setelah Data Diubah",
                db: `CREATE TRIGGER nama_trigger
AFTER UPDATE ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi setelah update
END;
`,
                contoh: `CREATE TRIGGER log_update_gaji
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
        parentId: 6,
        temaId: 6,
        name: "BEFORE DELETE",
        deskripsi: "Trigger dijalankan sebelum data dihapus dari tabel.",
        objek: ["Tabel", "Cegah Penghapusan", "Cek Status Data", "Backup Data", "Validasi Delete"],
        sintaks: [
            {
                id: 1,
                name: "Sebelum Data Dihapus",
                db: `CREATE TRIGGER nama_trigger
BEFORE DELETE ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi sebelum delete
END;
`,
                contoh: `CREATE TRIGGER backup_data_siswa
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
        parentId: 6,
        temaId: 7,
        name: "AFTER DELETE",
        deskripsi: "Trigger dijalankan setelah data dihapus dari tabel.",
        objek: ["Tabel", "Log Hapus Data", "Audit Trail", "Catat Penghapusan", "Rekap Penghapusan"],
        sintaks: [
            {
                id: 1,
                name: "Setelah Data Dihapus",
                db: `CREATE TRIGGER nama_trigger
AFTER DELETE ON nama_tabel
FOR EACH ROW
BEGIN
  -- aksi setelah delete
END;
`,
                contoh: `CREATE TRIGGER log_delete_pengguna
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
        parentId: 7,
        temaId: 0,
        name: "Perkenalan",
        perkenalan: [
            {
                title: "Pengertian",
                body: "Index adalah struktur khusus dalam database untuk mempercepat pencarian, filter, dan pengurutan data."
            },
            {
                title: "Fungsi",
                body: "Mempercepat query SELECT, WHERE, ORDER BY pada kolom yang diindex. Tanpa index, pencarian bisa jadi sangat lambat di tabel besar."
            },
            {
                title: "Analogi",
                body: "Index itu seperti daftar isi pada buku, mempercepat pencarian halaman tertentu tanpa harus baca semuanya."
            },
            {
                title: "Contoh Nyata",
                body: "Misal: Index pada kolom nama di tabel karyawan, sehingga pencarian nama jadi sangat cepat meskipun data ribuan."
            }
        ],
        sintaks: [
            {
                id: 1,
                name: "Contoh Index",
                contoh: `CREATE INDEX idx_nama ON karyawan(nama);`
            }
        ]
    },
    {
        parentId: 7,
        temaId: 1,
        name: "CREATE INDEX",
        deskripsi: "Membuat indeks pada kolom tabel untuk mempercepat proses pencarian atau filter data.",
        objek: ["Tabel", "Kolom", "Indeks Baru", "Nama Indeks", "Kolom Tertarget", "Tabel Target", "Akselerasi Query"],
        sintaks: [
            {
                id: 1,
                name: "Membuat Indeks (Akselerasi Pencarian)",
                db: `CREATE INDEX nama_index ON nama_tabel(nama_kolom);`,
                contoh: `CREATE INDEX idx_nama ON karyawan(nama);`
            }
        ]
    },
    {
        parentId: 7,
        temaId: 2,
        name: "UNIQUE INDEX",
        deskripsi: "Membuat indeks yang menjamin nilai dalam kolom bersifat unik (tidak boleh ada duplikat).",
        objek: ["Kolom Unik", "Indeks Unik", "Validasi Keunikan", "Pencegahan Duplikasi", "Primary Key Alternatif"],
        sintaks: [
            {
                id: 1,
                name: "Indeks Unik (Cegah Duplikat)",
                db: `CREATE UNIQUE INDEX nama_index ON nama_tabel(nama_kolom);`,
                contoh: `CREATE UNIQUE INDEX idx_email ON pengguna(email);`
            }
        ]
    },
    {
        parentId: 7,
        temaId: 3,
        name: "DROP INDEX",
        deskripsi: "Menghapus indeks yang sebelumnya dibuat dari suatu tabel.",
        objek: ["Indeks yang ada", "Penghapusan Indeks", "Optimasi Struktur", "Perubahan Strategi Query"],
        sintaks: [
            {
                id: 1,
                name: "Menghapus Indeks",
                db: `DROP INDEX nama_index ON nama_tabel;`,
                contoh: `DROP INDEX idx_nama ON karyawan;`
            }
        ]
    },
    {
        parentId: 7,
        temaId: 4,
        name: "SHOW INDEX",
        deskripsi: "Menampilkan semua indeks yang ada pada sebuah tabel, termasuk primary key dan unique index.",
        objek: ["Semua indeks pada tabel", "Daftar Indeks", "Primary Key", "Unique Key", "Nama Index", "Tipe Index"],
        sintaks: [
            {
                id: 1,
                name: "Menampilkan Indeks dalam Tabel",
                db: `SHOW INDEX FROM nama_tabel;`,
                contoh: `SHOW INDEX FROM pengguna;`
            }
        ]
    },
    {
        parentId: 7,
        temaId: 5,
        name: "COMPOSITE INDEX",
        deskripsi: "Indeks yang terdiri dari lebih dari satu kolom; digunakan saat pencarian sering berdasarkan kombinasi beberapa kolom sekaligus.",
        objek: ["Dua atau lebih kolom dalam satu tabel", "Gabungan Kolom", "Optimalisasi Query Multi-Kolom", "Kombinasi Field", "Urutan Kolom Penting"],
        sintaks: [
            {
                id: 1,
                name: "Indeks Gabungan (Multi-Kolom)",
                db: `CREATE INDEX nama_index ON nama_tabel(kolom1, kolom2);`,
                contoh: `CREATE INDEX idx_nama_alamat ON karyawan(nama, alamat);`
            }
        ]
    },
]


const TemaDetailsMongodb = [
    {
        parentId: 0,
        temaId: 1,
        name: "Perkenalan",
        perkenalan: [
        {
            title: "Pengertian",
            body: `MongoDB adalah sistem manajemen basis data NoSQL yang menyimpan data dalam format dokumen (JSON-like, BSON). Data disimpan dalam bentuk dokumen yang fleksibel dan tidak wajib mengikuti skema tetap. Cocok untuk aplikasi yang datanya bisa berubah-ubah atau tidak selalu sama strukturnya.`
        },
        {
            title: "Analogi",
            body: `Bayangkan MongoDB seperti buku catatan harian atau kumpulan sticky notes. Kamu bisa menulis apa saja hari ini daftar belanja, besok ide bisnis, lusa sekadar nomor telepon. Tidak harus sama formatnya, semuanya tetap bisa disimpan.`
        },
        {
            title: "Apa yang terjadi jika tidak sesuai?",
            body: `Secara default, MongoDB tidak mempersoalkan bentuk data yang berubah-ubah. Tapi jika kamu menambah aturan validasi (misal via Mongoose), baru akan muncul error kalau data tidak sesuai aturan. Tapi tanpa validasi tambahan, MongoDB tetap menerima semua data selama format dasarnya bisa dibaca.`
        },
        {
            title: "Cocok digunakan untuk apa saja?",
            body: `Cocok untuk aplikasi media sosial, sistem komentar, live chat, dashboard, atau aplikasi yang butuh fleksibilitas tinggi. Pokoknya jika data kamu sering berubah atau tidak terduga strukturnya, MongoDB adalah pilihan tepat.`
        }
    ],
        komponen: [
             {
        id: 1,
        name: "Database",
        name_mysql: "Database",
        deskripsi: "Database adalah tempat utama untuk menyimpan semua data. Bisa dibayangkan seperti sebuah lemari besar yang di dalamnya kamu taruh banyak map atau dokumen. Di dalam MySQL dan MongoDB, semua data disimpan di dalam database sebagai wadah utama.",
        sintaks: "use nama_database",
        contoh: "use toko_online",
        contoh_mysql: "USE toko_online;"
    },
    {
        id: 2,
        name: "Koleksi",
        name_mysql: "Tabel",
        deskripsi: "Koleksi adalah kumpulan dokumen dalam MongoDB, mirip seperti tumpukan catatan yang punya tema sama, misalnya semua catatan tentang pelanggan.",
        sintaks: `db.nama_koleksi.insertOne({ ... })`,
        contoh: `db.pelanggan.insertOne({ nama: "Budi", email: "budi@gmail.com" })`,
        contoh_mysql: "CREATE TABLE pelanggan (id INT, nama VARCHAR(50), email VARCHAR(50));"
    },
    {
        id: 3,
        name: "Dokumen",
        name_mysql: "Baris (Record)",
        deskripsi: "Dokumen adalah satu set data utuh dalam bentuk JSON (mirip objek JavaScript). Setiap dokumen bisa punya isi yang berbeda-beda.",
        sintaks: `db.koleksi.insertOne({ key1: value1, key2: value2 });`,
        contoh: `db.pelanggan.insertOne({ nama: "Siti", email: "siti@email.com" });`,
        contoh_mysql: "INSERT INTO pelanggan (nama, email) VALUES ('Siti', 'siti@email.com');"
    },
    {
        id: 4,
        name: "Field",
        name_mysql: "Kolom (Field)",
        deskripsi: "Field di MongoDB adalah seperti kolom di MySQL, tapi tidak wajib selalu sama di tiap dokumen. Ini seperti isian di catatan: kadang kamu isi 'email', kadang kamu tambahin 'alamat', kadang cuma 'nama' saja.",
        contoh: `{ nama: "Andi", email: "andi@gmail.com" }`,
        contoh_mysql: "`nama VARCHAR(50), email VARCHAR(50)`"
    },
    {
        id: 5,
        name: "Schema",
        name_mysql: "Skema/Tabel Schema",
        deskripsi: "Skema adalah aturan atau struktur yang mendefinisikan bentuk data: kolom apa saja yang ada, jenis datanya apa, boleh kosong atau tidak.",
        contoh: `const ProdukSchema = new Schema({
  nama: String,
  harga: Number
});`,
        contoh_mysql: `CREATE TABLE produk (
  nama VARCHAR(100) NOT NULL,
  harga DECIMAL(10,2) NOT NULL
);`
    },
    {
        id: 6,
        name: "Query",
        name_mysql: "Query",
        deskripsi: "Query adalah perintah untuk mengambil atau memanipulasi data. Bisa untuk mencari data, menambah, mengubah, atau menghapus.",
        contoh: `db.pelanggan.find({ nama: "Budi" });`,
        contoh_mysql: `SELECT * FROM pelanggan WHERE nama = 'Budi';`
    },
        ]
    },
    {
        parentId: 4,
        temaId: 1,
        name: "InsertOne()",
        deskripsi: "Digunakan untuk menambahkan satu dokumen (data) ke dalam koleksi (collection). MongoDB menyimpan data dalam bentuk dokumen yang berbentuk JSON atau BSON, bukan dalam baris dan kolom seperti MySQL.",
        objek: ["Database", "Collection", "Document"],
        sintaks: [
            {
                id: 1,
                name: "InsertOne()",
                db: `db.nama_koleksi.insertOne({
  key1: value1,
  key2: value2,
  ...
})
`,
                contoh: `db.pelanggan.insertOne({
  nama: "Andi",
  umur: 25,
  pekerjaan: "Programmer"
})`,
                analogi: `INSERT INTO pelanggan (nama, umur, pekerjaan)
VALUES ('Andi', 25, 'Programmer');`
            },

        ]
    },
    {
        parentId: 4,
        temaId: 2,
        name: "InsertMany()",
        deskripsi: "digunakan untuk menambahkan banyak dokumen sekaligus ke dalam sebuah koleksi (collection). Ini berguna ketika kamu ingin menyimpan beberapa data sekaligus tanpa harus menjalankan perintah insertOne() satu per satu.",
        objek: ["Database", "Collection", "Document"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.insertMany([
  { key1: value1, key2: value2 },
  { key1: value3, key2: value4 },
  ...
])
`,
                contoh: `db.pelanggan.insertMany([
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
                analogi: `INSERT INTO pelanggan (nama, umur, pekerjaan)
VALUES
('Andi', 25, 'Programmer'),
('Budi', 30, 'Desainer');
`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 1,
        name: "Find()",
        deskripsi: "Method untuk mengambil dokumen dari sebuah koleksi di MongoDB. Jika tidak diberikan filter, akan mengambil semua dokumen dalam koleksi tersebut.",
        objek: ["Database", "Collection", "Document", "Query", "Projection"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find(query, projection)`,
                contoh: `db.pelanggan.find({})`,
                analogi: `SELECT * FROM pelanggan;`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 2,
        name: "Find with filter",
        deskripsi: "Method find() dengan filter tertentu untuk mengambil dokumen yang memenuhi kondisi.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find({ field: value }, projection)`,
                contoh: `db.pelanggan.find({ umur: 25 })`,
                analogi: `SELECT * FROM pelanggan WHERE umur = 25;`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 3,
        name: "$gt (Greater Than)",
        deskripsi: "Operator filter untuk memilih dokumen dengan nilai lebih besar dari nilai tertentu.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find({ field: { $gt: value } })`,
                contoh: `db.pelanggan.find({ umur: { $gt: 20 } })`,
                analogi: `WHERE umur > 20`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 4,
        name: "$lt (Less Than)",
        deskripsi: "Operator filter untuk memilih dokumen dengan nilai kurang dari nilai tertentu.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find({ field: { $lt: value } })`,
                contoh: `db.pelanggan.find({ umur: { $lt: 30 } })`,
                analogi: `WHERE umur < 30`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 5,
        name: "$in",
        deskripsi: "Operator filter untuk memilih dokumen dimana nilai sebuah field ada dalam daftar nilai tertentu.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find({ field: { $in: [value1, value2, ...] } })`,
                contoh: `db.pelanggan.find({ pekerjaan: { $in: ["Programmer", "Desainer"] } })`,
                analogi: `WHERE pekerjaan IN ('Programmer', 'Desainer')`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 6,
        name: "$or",
        deskripsi: "Operator logika OR untuk memilih dokumen yang memenuhi salah satu kondisi dari beberapa kondisi.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find({
  $or: [{ kondisi1 }, { kondisi2 }, ...]
})`,
                contoh: `db.pelanggan.find({
  $or: [{ umur: 25 }, { pekerjaan: "Desainer" }]
})
`,
                analogi: `WHERE umur = 25 OR pekerjaan = 'Desainer'`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 7,
        name: "$and",
        deskripsi: "Operator logika AND untuk memilih dokumen yang memenuhi semua kondisi yang diberikan.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find({
  $and: [{ kondisi1 }, { kondisi2 }, ...]
})`,
                contoh: `db.pelanggan.find({
  $and: [{ umur: { $gt: 20 } }, { pekerjaan: "Programmer" }]
})`,
                analogi: `WHERE umur > 20 AND pekerjaan = 'Programmer'`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 8,
        name: "$regex",
        deskripsi: "Operator untuk pencarian dengan pola (regular expression), cocok untuk pencarian teks.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find({ field: { $regex: "pattern" } })`,
                contoh: `db.pelanggan.find({ nama: { $regex: "^Andi" } })`,
                analogi: `WHERE nama LIKE 'Andi%'`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 9,
        name: "$sort",
        deskripsi: "Method untuk mengurutkan hasil query berdasarkan satu atau beberapa field.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find().sort({ field1: 1, field2: -1 })`,
                contoh: `db.pelanggan.find().sort({ umur: 1 })`,
                analogi: `ORDER BY umur ASC'`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 10,
        name: "$sort",
        deskripsi: "Method untuk membatasi jumlah dokumen yang diambil.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find().limit(n)`,
                contoh: `db.pelanggan.find().limit(5)`,
                analogi: `LIMIT 5`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 11,
        name: "$skip",
        deskripsi: "Method untuk melewati sejumlah dokumen awal sebelum mengambil data (biasanya untuk paging).",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find().skip(n)`,
                contoh: `db.pelanggan.find().skip(10).limit(5)
`,
                analogi: `LIMIT 5 OFFSET 10`

            },

        ],
    },
    {
        parentId: 5,
        temaId: 12,
        name: "$projection",
        deskripsi: "Menentukan field apa saja yang ingin ditampilkan atau disembunyikan dalam hasil query.",
        objek: ["Database", "Collection", "Document", "Query"],
        sintaks: [
            {
                id: 1,
                name: "InsertMany()",
                db: `db.nama_koleksi.find(query, { field1: 1, field2: 1, _id: 0 })`,
                contoh: `db.pelanggan.find({}, { nama: 1, umur: 1, _id: 0 })`,
                analogi: `SELECT nama, umur FROM pelanggan`
            },

        ],
    },


    {
        parentId: 6,
        temaId: 1,
        name: "updateOne()",
        deskripsi: "Digunakan untuk memperbarui satu dokumen pertama yang cocok dengan kondisi (filter) tertentu dalam sebuah koleksi. Jika terdapat lebih dari satu dokumen yang sesuai, hanya dokumen pertama yang akan diperbarui.",
        objek: ["Database", "Collection", "Document", "Query", "Update Operator ($set, $inc, dll)"],
        sintaks: [
            {
                id: 1,
                name: "updateOne()",
                db: `db.collection.updateOne(
   <filter>,
   <update>,
   { upsert: <boolean> } // opsional
)
`,
                contoh: `db.users.updateOne(
  { name: "Budi" },
  { $set: { age: 26 } }
)
`,
                analogi: `UPDATE users
SET age = 26
WHERE name = 'Budi'
LIMIT 1;
`
            },

        ],
    },
    {
        parentId: 6,
        temaId: 2,
        name: "updateMany()",
        deskripsi: "Digunakan untuk memperbarui semua dokumen yang cocok dengan kondisi tertentu.",
        objek: ["Database", "Collection", "Document", "Query", "Update Operator ($set, $inc, dll)"],
        sintaks: [
            {
                id: 1,
                name: "updateMany()",
                db: `db.collection.updateMany(<filter>, <update>, { upsert: <boolean> })`,
                contoh: `db.users.updateMany(
  { city: "Jakarta" },
  { $set: { status: "active" } }
)`,
                analogi: `UPDATE users SET status = 'active' WHERE city = 'Jakarta';`
            },

        ],
    },
    {
        parentId: 6,
        temaId: 3,
        name: "$set",
        deskripsi: "Operator untuk menetapkan nilai baru pada suatu field (menambah atau mengubah nilai).",
        objek: ["Document", "Field"],
        sintaks: [
            {
                id: 1,
                name: "$set",
                db: `{ $set: { field: value } }`,
                contoh: `db.users.updateOne(
  { name: "Budi" },
  { $set: { city: "Bandung" } }
)
`,
                analogi: `UPDATE users SET city = 'Bandung' WHERE name = 'Budi';`
            },

        ],
    },
    {
        parentId: 6,
        temaId: 4,
        name: "$unset",
        deskripsi: "Operator untuk menghapus field dari dokumen.",
        objek: ["Document", "Field"],
        sintaks: [
            {
                id: 1,
                name: "$unset",
                db: `{ $unset: { field: "" } }`,
                contoh: `db.users.updateOne(
  { name: "Budi" },
  { $unset: { city: "" } }
)`,
                analogi: `UPDATE users SET city = NULL WHERE name = 'Budi';`
            },

        ],
    },
    {
        parentId: 6,
        temaId: 5,
        name: "$inc",
        deskripsi: "Operator untuk menambah atau mengurangi nilai numerik pada field.",
        objek: ["Document", "Field Numeric"],
        sintaks: [
            {
                id: 1,
                name: "$inc",
                db: `{ $inc: { field: number } }`,
                contoh: `db.users.updateOne(
  { name: "Budi" },
  { $inc: { age: 1 } }
)`,
                analogi: `UPDATE users SET age = age + 1 WHERE name = 'Budi';`
            },

        ],
    },
    {
        parentId: 6,
        temaId: 6,
        name: "$push",
        deskripsi: "Operator untuk menambahkan nilai ke dalam array dalam dokumen.",
        objek: ["Document", "Field Array"],
        sintaks: [
            {
                id: 1,
                name: "$push",
                db: `{ $push: { field: value } }`,
                contoh: `db.users.updateOne(
  { name: "Budi" },
  { $push: { hobbies: "mancing" } }
)`,
                analogi: `INSERT INTO user_hobbies (user_id, hobby_id)
VALUES (1, 3);`
            },

        ],
    },
    {
        parentId: 6,
        temaId: 7,
        name: "$pull",
        deskripsi: "Operator untuk menghapus nilai tertentu dari array.",
        objek: ["Document", "Field Array"],
        sintaks: [
            {
                id: 1,
                name: "$pull",
                db: `{ $pull: { field: value } }`,
                contoh: `db.users.updateOne(
  { name: "Budi" },
  { $pull: { hobbies: "mancing" } }
)`,
                analogi: `DELETE FROM user_hobbies WHERE user_id = ? AND hobby = 'mancing';`
            },

        ],
    },
    {
        parentId: 6,
        temaId: 8,
        name: "$addToSet",
        deskripsi: "Operator untuk menambahkan elemen ke array hanya jika elemen tersebut belum ada.",
        objek: ["Document", "Field Array"],
        sintaks: [
            {
                id: 1,
                name: "$pull",
                db: `{ $addToSet: { field: value } }`,
                contoh: `db.users.updateOne(
  { name: "Budi" },
  { $addToSet: { hobbies: "membaca" } }
)`,
                analogi: `DIF NOT EXISTS (
  SELECT 1 FROM user_hobbies WHERE user_id = ? AND hobby = 'membaca'
) THEN
  INSERT INTO user_hobbies (user_id, hobby) VALUES (?, 'membaca');
END IF;
`
            },

        ],
    },


    {
        parentId: 7,
        temaId: 1,
        name: "deleteOne()",
        deskripsi: "Digunakan untuk menghapus satu dokumen pertama yang cocok dengan kondisi (filter) tertentu di dalam sebuah koleksi. Jika ada banyak dokumen yang cocok, hanya dokumen pertama yang akan dihapus.",
        objek: ["Database", "Collection", "Document", "Query (Filter dokumen yang akan dihapus)"],
        sintaks: [
            {
                id: 1,
                name: "deleteOne()",
                db: `db.collection.deleteOne(<filter>)`,
                contoh: `db.users.deleteOne({ name: "Budi" })`,
                analogi: `DELETE FROM users WHERE name = 'Budi' LIMIT 1;`
            },

        ],
    },
    {
        parentId: 7,
        temaId: 2,
        name: "deleteMany()",
        deskripsi: "Digunakan untuk menghapus semua dokumen yang cocok dengan kondisi tertentu dalam sebuah koleksi.",
        objek: ["Database", "Collection", "Document", "Query (Filter dokumen yang akan dihapus)"],
        sintaks: [
            {
                id: 1,
                name: "deleteMany()",
                db: `db.collection.deleteMany(<filter>)`,
                contoh: `db.users.deleteMany({ city: "Jakarta" })`,
                analogi: `DELETE FROM users WHERE city = 'Jakarta';`
            },

        ],
    },


    {
        parentId: 8,
        temaId: 1,
        name: "createIndex()",
        deskripsi: "Digunakan untuk membuat indeks pada field tertentu dalam sebuah collection. Tujuannya agar pencarian data (query) menjadi lebih cepat dan efisien, terutama jika collection sudah memiliki banyak dokumen.",
        objek: ["Collection", "Field dalam Document"],
        sintaks: [
            {
                id: 1,
                name: "createIndex()",
                db: `db.collection.createIndex({ fieldName: 1 })`,
                contoh: `db.users.createIndex({ email: 1 })`,
                analogi: `CREATE INDEX idx_email ON users(email);`
            },

        ],
    },
    {
        parentId: 8,
        temaId: 2,
        name: "Text Index",
        deskripsi: "Digunakan untuk pencarian berbasis teks, misalnya saat menggunakan operator $text. Cocok untuk pencarian keyword seperti fitur search.",
        objek: ["Collection", "Field Teks"],
        sintaks: [
            {
                id: 1,
                name: "Text Index",
                db: `db.collection.createIndex({ fieldName: "text" })`,
                contoh: `db.articles.createIndex({ content: "text" })`,
                analogi: `FULLTEXT INDEX(content)`
            },

        ],
    },
    {
        parentId: 8,
        temaId: 3,
        name: "Compound Index",
        deskripsi: "Adalah index yang dibuat berdasarkan lebih dari satu field. Berguna saat query sering melibatkan kombinasi beberapa field.",
        objek: ["Collection", "Beberapa field dalam component"],
        sintaks: [
            {
                id: 1,
                name: "Compound Index",
                db: `db.collection.createIndex({ field1: 1, field2: -1 })`,
                contoh: `db.orders.createIndex({ customerId: 1, orderDate: -1 })`,
                analogi: `CREATE INDEX idx_customer_date ON orders(customerId ASC, orderDate DESC);`
            },

        ],
    },
    {
        parentId: 8,
        temaId: 4,
        name: "dropIndex()",
        deskripsi: "Digunakan untuk menghapus index tertentu dari sebuah collection.",
        objek: ["Collection", "Nama Index atau struktur field index"],
        sintaks: [
            {
                id: 1,
                name: "Compound Index",
                db: `db.collection.dropIndex({ fieldName: 1 })`,
                contoh: `db.users.dropIndex({ email: 1 })`,
                analogi: `DROP INDEX email_1 ON users;`
            },

        ],
    },
    {
        parentId: 8,
        temaId: 5,
        name: "explain() for Analysis",
        deskripsi: "Digunakan untuk menganalisis dan melihat bagaimana MongoDB menjalankan query: apakah menggunakan index, berapa dokumen yang dipindai, dll. Ini membantu melakukan optimasi.",
        objek: ["Query", "Collection", "Index (Secara tidak langsung)"],
        sintaks: [
            {
                id: 1,
                name: "explain() for Analysis",
                db: `db.collection.find(query).explain()`,
                contoh: `db.users.find({ email: "user@example.com" }).explain()`,
                analogi: `EXPLAIN SELECT * FROM users WHERE email = 'user@example.com';`
            },

        ],
    },
]

export {
    TemaDetails,
    TemaDetailsMongodb
}