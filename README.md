# Catatan Keuangan

Aplikasi pencatatan keuangan yang bisa dipasang di HP (PWA): akun **Work** (Vianos, Seven Dragon BL, Cafe Reservasi) dan akun **Personal** (kas, piutang, tabungan).

## Isi (semua file ada di satu tingkat, tanpa folder)

`index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`, `favicon-32.png`, `logo.png`

Semua file harus berada di **folder paling atas** repository, dengan nama persis seperti di atas (huruf kecil semua).

## Upload ke GitHub Pages

1. Buat repository baru (Public).
2. **Add file > Upload files**, pilih **semua file** hasil ekstrak, lalu **Commit changes**.
3. **Settings > Pages > Deploy from a branch > main > / (root) > Save**.
4. Alamat: `https://NAMA-GITHUB.github.io/NAMA-REPOSITORY/`

## Cek sebelum instal

Buka alamat berikut di browser. Semuanya harus tampil, bukan "404":
- `.../manifest.webmanifest` (berisi teks JSON)
- `.../icon-192.png` (gambar uang pixel)
- `.../sw.js` (berisi kode)

## Instal

- **Android (Chrome):** menu titik tiga > **Instal aplikasi**.
- **iPhone (Safari):** Bagikan > **Tambah ke Layar Utama**.

## Kalau sebelumnya sudah pernah menginstal versi lama

Hapus aplikasinya dari layar utama, lalu di Chrome buka **Setelan > Setelan situs > Semua situs**, cari `github.io`, pilih **Hapus & reset**. Muat ulang halaman, lalu instal lagi.

## Catatan

- Data tersimpan di HP (penyimpanan browser), bukan di GitHub.
- Untuk update: ganti `index.html`, lalu naikkan angka versi di `sw.js` (`v2` menjadi `v3`).
