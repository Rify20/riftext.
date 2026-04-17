const features = [
  {
    title: "Fast OCR",
    desc: "Extract text from screenshots, notes, and simple document images in seconds.",
    icon: "⚡",
  },
  {
    title: "Clean Editing",
    desc: "Review the output inside a large editable workspace before using it anywhere.",
    icon: "✎",
  },
  {
    title: "Copy Instantly",
    desc: "Copy the result with one click or download it as a text file for later.",
    icon: "⧉",
  },
];

export default function WhyRifText() {
  return (
    <section id="features" className="py-14 sm:py-20">
      <div className="container-shell">
        <h2 className="section-title">Why RifText</h2>
        <p className="section-desc">
          A simple OCR tool with a polished workflow and a modern blue-white interface.
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