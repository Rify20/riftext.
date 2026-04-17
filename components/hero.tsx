export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Dibuat oleh RifDev
            </div>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Ubah gambar menjadi teks dalam hitungan detik
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              RifText adalah web yang membantu kamu mengambil teks dari
              screenshot, catatan, dan gambar dokumen dalam satu alur yang cepat dan rapi.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Ikuti developer di Instagram @rifdev_
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#workspace"
                className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Upload gambar
              </a>
            </div>
          </div>

          <div className="grid-pattern relative rounded-[28px] border border-blue-100 bg-white/70 p-5 shadow-[0_30px_80px_rgba(37,99,235,0.10)]">
            <div className="glass soft-border soft-shadow rounded-[24px] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Pemindai RifText</p>
                  <p className="mt-1 text-sm text-slate-500"></p>
                </div>
                <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"></div>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-blue-200 bg-gradient-to-b from-blue-50 to-white p-6">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    ✦
                  </div>
                  <p className="text-base font-semibold text-slate-900">
                    Tarik &amp; lepas gambarmu
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Mendukung PNG, JPG, dan WebP
                  </p>
                  <button className="mt-5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                    Pilih file
                  </button>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Pratinjau</p>
                  <div className="mt-3 h-28 rounded-xl bg-slate-100" />
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Hasil</p>
                  <div className="mt-3 h-28 rounded-xl bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
