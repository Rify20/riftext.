const features = [
  {
    title: "Salin Cepat",
    desc: "Ambil teks dari screenshot, catatan, dan gambar dokumen sederhana dalam hitungan detik.",
    icon: "⚡",
  },
  {
    title: "Mudah Diedit",
    desc: "Tinjau dan edit hasil ekstraksi di area kerja yang besar sebelum dipakai di mana saja.",
    icon: "✎",
  },
  {
    title: "Salin Instan",
    desc: "Salin hasil dengan satu klik atau unduh sebagai file teks untuk dipakai nanti.",
    icon: "⧉",
  },
];

export default function WhyRifText() {
  return (
    <section id="features" className="py-14 sm:py-20">
      <div className="container-shell">
        <h2 className="section-title">Kenapa RifText</h2>
        <p className="section-desc">
          sederhana dengan alur yang rapi.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="glass soft-border soft-shadow rounded-[24px] p-6 transition hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-700">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
