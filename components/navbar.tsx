export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <a href="#" className="group">
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-slate-900">
              RifText
            </span>
            <span className="mt-1 text-xs text-slate-500 transition group-hover:text-blue-600">
              by RifDev
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-slate-600 transition hover:text-blue-600">
            Fitur
          </a>

          <a href="#how-it-works" className="text-sm text-slate-600 transition hover:text-blue-600">
            Cara kerja
          </a>

          <a
            href="https://github.com/Rify20"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-600 transition hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/rifdev_/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-slate-600 transition hover:text-pink-500"
          >
            Instagram
          </a>

          <a
            href="#workspace"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Coba sekarang
          </a>
        </nav>
      </div>
    </header>
  );
}
