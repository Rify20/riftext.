export default function Footer() {
  return (
    <footer className="border-t border-blue-100 py-10">
      <div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-lg font-bold tracking-tight text-slate-900">RifText</p>
          <p className="mt-1 text-sm text-slate-600">
            Ubah gambar menjadi teks secara instan.
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Dibuat oleh <span className="font-semibold text-blue-700">RifDev</span>
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-slate-500">
          <a
            href=
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-600"
          >
          </a>

          <a
            href="https://www.instagram.com/rifdev_/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-pink-500"
          >
            Instagram
          </a>

          <span>© 2026 RifDev</span>
        </div>
      </div>
    </footer>
  );
}
