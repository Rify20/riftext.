"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createWorker, type Worker } from "tesseract.js";

type ScanStatus = "idle" | "ready" | "scanning" | "done" | "error";

export default function OCRWorkspace() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [resultText, setResultText] = useState("");
  const [status, setStatus] = useState<ScanStatus>("idle");
  const [message, setMessage] = useState("Upload gambar untuk memulai.");
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const workerRef = useRef<Worker | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const fileMeta = useMemo(() => {
    if (!file) return null;
    const sizeInMb = (file.size / (1024 * 1024)).toFixed(2);
    return `${file.name} • ${sizeInMb} MB`;
  }, [file]);

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
      if (workerRef.current) {
        void workerRef.current.terminate();
      }
    };
  }, [imageUrl]);

  const validateFile = (selected: File) => {
    const allowed = ["image/png", "image/jpeg", "image/webp"];

    if (!allowed.includes(selected.type)) {
      setStatus("error");
      setMessage("Silakan upload file JPG, PNG, atau WebP yang valid.");
      return false;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setStatus("error");
      setMessage("Ukuran gambar harus di bawah 5MB.");
      return false;
    }

    return true;
  };

  const handleSelectedFile = (selected: File) => {
    if (!validateFile(selected)) return;

    if (imageUrl) URL.revokeObjectURL(imageUrl);

    const nextUrl = URL.createObjectURL(selected);
    setFile(selected);
    setImageUrl(nextUrl);
    setResultText("");
    setProgress(0);
    setCopied(false);
    setStatus("ready");
    setMessage("Gambar siap. Klik scan untuk mengambil teks.");
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0];
    if (!selected) return;
    handleSelectedFile(selected);
  };

  const onDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const selected = event.dataTransfer.files?.[0];
    if (!selected) return;
    handleSelectedFile(selected);
  };

  const onDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const scanText = async () => {
    if (!file) return;

    try {
      setStatus("scanning");
      setMessage("Sedang memindai gambar... tunggu sebentar.");
      setProgress(5);

      if (!workerRef.current) {
        workerRef.current = await createWorker("eng", 1, {
          logger: (info) => {
            if (info.status === "recognizing text" && typeof info.progress === "number") {
              setProgress(Math.round(info.progress * 100));
            }
          },
        });
      }

      const {
        data: { text },
      } = await workerRef.current.recognize(file);

      setResultText(text.trim());
      setStatus("done");
      setMessage("Teks berhasil diambil.");
      setProgress(100);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Terjadi kesalahan saat memindai gambar.");
    }
  };

  const copyText = async () => {
    if (!resultText) return;

    try {
      await navigator.clipboard.writeText(resultText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Gagal menyalin teks.");
    }
  };

  const clearAll = () => {
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    if (inputRef.current) inputRef.current.value = "";

    setFile(null);
    setImageUrl("");
    setResultText("");
    setProgress(0);
    setCopied(false);
    setStatus("idle");
    setMessage("Upload gambar untuk memulai.");
  };

  const downloadText = () => {
    if (!resultText) return;

    const blob = new Blob([resultText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "hasil-riftext.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section id="workspace" className="py-10 sm:py-16">
      <div className="container-shell">
        <div className="mb-8">
          <h2 className="section-title">Ruang Kerja OCR</h2>
          <p className="section-desc">
            Upload gambar, scan teksnya, lalu edit dan salin hasilnya dengan cepat.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass soft-border soft-shadow rounded-[28px] p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Upload gambar</p>
                <p className="mt-1 text-sm text-slate-500">Mendukung JPG, PNG, dan WebP</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {status === "scanning" ? "Memindai" : "Siap"}
              </span>
            </div>

            <label
              onDrop={onDrop}
              onDragOver={onDragOver}
              className="flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-[24px] border border-dashed border-blue-200 bg-gradient-to-b from-blue-50 to-white p-6 text-center transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
                onChange={onFileChange}
              />

              {imageUrl ? (
                <div className="w-full">
                  <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
                    <img
                      src={imageUrl}
                      alt="Pratinjau gambar yang diunggah"
                      className="h-72 w-full object-contain bg-slate-50"
                    />
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-700">{fileMeta}</p>
                </div>
              ) : (
                <>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
                    ⤴
                  </div>
                  <p className="text-lg font-semibold text-slate-900">
                    Tarik &amp; lepas gambar di sini
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    atau klik untuk memilih dari perangkat
                  </p>
                </>
              )}
            </label>

            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-slate-600">{message}</span>
                {status === "scanning" && (
                  <span className="font-medium text-blue-700">{progress}%</span>
                )}
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-blue-100">
                <div
                  className="h-full rounded-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${status === "scanning" || status === "done" ? progress : 0}%` }}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={scanText}
                disabled={!file || status === "scanning"}
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "scanning" ? "Memindai..." : "Scan teks"}
              </button>

              <button
                onClick={() => inputRef.current?.click()}
                className="rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
              >
                Pilih file
              </button>

              <button
                onClick={clearAll}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
              >
                Hapus
              </button>
            </div>
          </div>

          <div className="glass soft-border soft-shadow rounded-[28px] p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Teks hasil ekstraksi</p>
                <p className="mt-1 text-sm text-slate-500">
                  Edit hasilnya sebelum disalin atau diunduh
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyText}
                  disabled={!resultText}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {copied ? "Tersalin!" : "Salin teks"}
                </button>
                <button
                  onClick={downloadText}
                  disabled={!resultText}
                  className="rounded-xl border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Unduh .txt
                </button>
              </div>
            </div>

            <textarea
              value={resultText}
              onChange={(e) => setResultText(e.target.value)}
              placeholder="Teks hasil scan akan muncul di sini..."
              className="min-h-[380px] w-full rounded-[24px] border border-blue-100 bg-white px-4 py-4 text-sm leading-7 text-slate-700 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
            />

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
              <span>{resultText.length} karakter</span>
              <span>{resultText.trim() ? resultText.trim().split(/\s+/).length : 0} kata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
