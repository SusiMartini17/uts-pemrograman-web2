# 📌 Task Manager API (UTS Pemrograman Web 2)

## 👩‍💻 Identitas

* Nama: Susi Martini
* NIM: 23552011178
* Mata Kuliah: Pemrograman Web 2
* Dosen: Muhammad Reksa Ariansyah, S.Kom., M.Kom

---

## 📖 Deskripsi Project

Project ini merupakan implementasi backend sederhana untuk aplikasi **Task Manager** menggunakan Node.js dan PostgreSQL. Sistem ini mampu melakukan pengelolaan data tugas (task) seperti menambahkan, melihat, mengubah, dan menghapus data.

Selain itu, project ini juga menerapkan middleware logging, validasi input, serta error handling sesuai dengan ketentuan soal UTS.

---

## 🛠️ Teknologi yang Digunakan

* Node.js
* Express.js
* PostgreSQL
* pg (Node PostgreSQL client)
* Nodemon
* Thunder Client (untuk testing API)

---

## 🗄️ Struktur Database

Tabel: **tasks**

| Field        | Tipe Data    | Keterangan          |
| ------------ | ------------ | ------------------- |
| id           | SERIAL       | Primary Key         |
| title        | VARCHAR(255) | Judul tugas (wajib) |
| description  | TEXT         | Deskripsi tugas     |
| is_completed | BOOLEAN      | Status tugas        |
| created_at   | TIMESTAMP    | Waktu dibuat        |

---

## 🧪 Hasil Pengujian

Pengujian dilakukan menggunakan Thunder Client:

* POST berhasil menambahkan data
* GET menampilkan data
* PUT berhasil mengupdate data
* DELETE berhasil menghapus data
* Validasi dan error handling berjalan dengan baik

---


## 🎯 Kesimpulan

Project ini berhasil mengimplementasikan sistem backend Task Manager dengan fitur CRUD lengkap, validasi input, logging, dan koneksi database PostgreSQL sesuai dengan ketentuan soal UTS.

---

## 📎 Link Repository

(https://github.com/SusiMartini17/uts-pemrograman-web2)
