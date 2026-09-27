# Draxis Digital

Static landing page untuk [draxis-digital.my.id](https://draxis-digital.my.id), dibuat tanpa framework agar ringan dan mudah dideploy ke Cloudflare Pages.

## Menjalankan secara lokal

Tidak ada dependency atau build step. Jalankan server static apa pun dari root repository, misalnya:

```bash
python3 -m http.server 8080
```

Lalu buka `http://localhost:8080`.

## Deploy ke Cloudflare Pages

1. Buka **Workers & Pages** di dashboard Cloudflare.
2. Pilih **Create application → Pages → Connect to Git**.
3. Pilih repository ini dan branch produksi `main`.
4. Gunakan konfigurasi berikut:

   - Framework preset: `None`
   - Build command: `exit 0`
   - Build output directory: `/`

5. Setelah deploy berhasil, buka **Custom domains**, lalu tambahkan `draxis-digital.my.id`.

Setiap push baru ke branch `main` akan otomatis dideploy oleh Cloudflare.

## Sebelum diluncurkan

- Ganti monogram `D/` dengan logo final bila sudah tersedia.
- Perbarui narasi proyek dan statusnya ketika eksperimen berkembang.
- Alamat kontak utama saat ini adalah `muhammad-amien@draxis-digital.my.id`.
- Jika tidak ingin memuat Google Fonts, unduh font dan host secara lokal.

## Struktur

- `index.html` — struktur dan konten halaman
- `styles.css` — seluruh visual, layout, dan responsive styling
- `script.js` — menu mobile, reveal animation, dan tahun copyright
- `_headers` — security headers untuk Cloudflare Pages
- `robots.txt` dan `sitemap.xml` — basic SEO

## Lisensi

Kode situs dapat digunakan dan dimodifikasi oleh Draxis Digital. Tambahkan lisensi open-source pilihanmu sebelum membuka repository untuk kontribusi publik.
