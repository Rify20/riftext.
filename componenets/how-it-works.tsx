const steps = [
  {
    no: "01",
    title: "Upload",
    desc: "Choose a JPG, PNG, or WebP image from your device.",
  },
  {
    no: "02",
    title: "Scan",
    desc: "RifText processes the image and extracts visible text.",
  },
  {
    no: "03",
    title: "Copy",
    desc: "Edit the output, then copy or download it instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-20">
      <div className="container-shell">
        <h2 className="section-title">How it works</h2>
        <p className="section-desc">
          A minimal workflow designed to feel fast, clear, and practical.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.no}
              className="rounded-[24px] border border-blue-100 bg-white p-6 shadow-[0_12px_40px_rgba(37,99,235,0.06)]"
            >
              <div className="text-sm font-bold tracking-[0.25em] text-blue-600">{step.no}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}