#   Website Budaya Nusantara
Website sederhana yang menerapkan CRUD untuk menampilkan budaya yang ada di indonesia

# Tentang Project
Website ini merupakan sistem informasi berbasis web yang bertujuan untuk menampilkan dan mengelola data budaya yang ada di Indonesia. Website ini menerapkan konsep CRUD (Create, Read, Update, Delete) dalam pengelolaan data budaya dan event budaya. Website dikembangkan untuk membantu pengguna dalam mengenal keberagaman budaya Indonesia secara digital.

# Fitur Website

- Menambahkan Budaya
- Menghapus Budaya
- Mengubah Budaya
- Menampilkan Detail Budaya
- Menambahkan Event
- Mendaftar Event
- Login

# Teknologi yang digunakkan

- Express.JS
- Angular
- Mongo DB


# 📁 Struktur Project

## 🔧 Backend

```
app_server/
 ├── controllers/   # Logic CRUD budaya & event
 ├── models/        # Struktur/schema data budaya & event
 └── routes/        # Endpoint API (routing backend)
```

---

## 🎨 Frontend (Angular)

```
app/
 ├── beranda/           # Halaman utama (landing page)
 ├── budaya/            # Halaman list budaya
 ├── card-budaya/       # Komponen card untuk menampilkan budaya
 ├── daftar-event/      # Halaman daftar event budaya
 ├── data/              # Penyimpanan atau pengelolaan data lokal
 ├── detail-budaya/     # Halaman detail budaya
 ├── detail-event/      # Halaman detail event
 ├── edit-budaya/       # Halaman edit data budaya
 ├── event/             # Modul/halaman utama event
 ├── guards/            # Route protection (AuthGuard, dll)
 ├── hubungi-kami/      # Halaman kontak
 ├── interceptor/       # HTTP interceptor (token, request handling)
 ├── login/             # Halaman login
 ├── services/          # Service untuk komunikasi API
 ├── tambah-budaya/     # Halaman tambah budaya
 ├── tambah-event/      # Halaman tambah event
 ├── tentang-kami/      # Halaman tentang aplikasi
 ├── utils/             # Helper / fungsi pendukung
 ├── app.config.ts      # Konfigurasi aplikasi
 ├── app.css            # Styling global aplikasi
 ├── app.html           # Template utama aplikasi
 ├── app.routes.ts      # Konfigurasi routing
 ├── app.spec.ts        # File unit testing
 └── app.ts             # Root component aplikasi
```
# 🚀 Cara Menjalankan Project

## 🟢 Menjalankan Project Next.js

### 1️⃣ Install Dependencies
Pastikan sudah menginstall Node.js terlebih dahulu.

Cek versi:
```
node -v
npm -v
```

Lalu install dependency:
```
npm install
```

---

### 2️⃣ Menjalankan Server
```
npm start
```


Project akan berjalan di:
```
http://localhost:3000
```

---



## 🔵 Menjalankan Project Angular

### 1️⃣ Install Angular CLI (Jika belum ada)
```
npm install -g @angular/cli
```

Cek versi:
```
ng version
```

---

### 2️⃣ Install Dependencies
Masuk ke folder project Angular, lalu jalankan:
```
npm install
```

---

### 3️⃣ Menjalankan Development Server
```
ng serve
```

Atau jika ingin menentukan port:
```
ng serve --port 4200
```

Project akan berjalan di:
```
http://localhost:4200
```

