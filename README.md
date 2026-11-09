# Catatan Keuangan

Aplikasi pencatatan keuangan yang bisa dipasang di HP (PWA).

- **Work**: keuangan operasional Vianos (futsal), Seven Dragon BL (billiard), dan Cafe Reservasi, lengkap dengan kas, piutang, pembayaran, dan riwayat.
- **Personal**: uang masuk/keluar, piutang, target tabungan, dan kalkulator perencanaan.
- Bisa dipakai tanpa internet setelah dibuka sekali.

## Isi folder

| File | Fungsi |
|---|---|
| `index.html` | Seluruh aplikasi (tampilan + logika) |
| `manifest.webmanifest` | Data aplikasi agar bisa diinstal |
| `sw.js` | Service worker agar bisa dipakai offline |
| `icons/` | Logo dan ikon aplikasi |
| `.nojekyll` | Supaya GitHub Pages menayangkan file apa adanya |

## Cara upload ke GitHub Pages

1. Buka github.com, login, lalu klik **New repository**. Beri nama (misalnya `catatan-keuangan`), pilih **Public**, klik **Create repository**.
2. Ekstrak file ZIP ini. Di halaman repository klik **Add file > Upload files**, lalu seret **semua isi** folder hasil ekstrak (termasuk folder `icons`, file `.nojekyll`, dan `sw.js`). Klik **Commit changes**.
3. Buka **Settings > Pages**. Pada **Source** pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
4. Tunggu 1 sampai 3 menit. Alamat aplikasi: `https://NAMA-GITHUB-KAMU.github.io/NAMA-REPOSITORY/`

## Cara menginstal di HP

- **Android (Chrome):** buka alamat di atas, ketuk menu titik tiga, lalu **Instal aplikasi** atau **Tambahkan ke layar utama**.
- **iPhone (Safari):** buka alamat di atas, ketuk tombol **Bagikan**, lalu **Tambah ke Layar Utama**.

## Catatan penting

- **Data tersimpan di HP** (penyimpanan browser), tidak di GitHub. Repository publik hanya berisi kode aplikasi, bukan catatan keuangan kamu.
- Data terikat pada satu alamat dan satu browser. Kalau alamat berubah atau data browser dihapus, catatan ikut hilang. Data dari versi di Claude tidak otomatis pindah ke versi GitHub.
- **Update aplikasi:** ganti `index.html` di repository, lalu ubah angka versi pada `sw.js` (`catatan-keuangan-v1` menjadi `v2`) supaya HP mengambil versi terbaru.
