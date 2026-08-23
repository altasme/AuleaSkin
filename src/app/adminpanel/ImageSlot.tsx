"use client";

import { useState } from "react";
import Image from "next/image";
import { isCloudinaryConfigured, readImageDimensions, uploadImageToCloudinary } from "@/lib/cloudinary";

type Props = {
  label: string;
  aspectRatio: "1:1" | "4:5";
  value: string;
  onChange: (url: string) => void;
};

const ASPECT_TARGETS: Record<Props["aspectRatio"], number> = {
  "1:1": 1,
  "4:5": 4 / 5,
};

export function ImageSlot({ label, aspectRatio, value, onChange }: Props) {
  const [status, setStatus] = useState<"idle" | "uploading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);

  async function handleFile(file: File) {
    setStatus("uploading");
    setError(null);
    setWarning(null);

    try {
      const { width, height } = await readImageDimensions(file);
      const ratio = width / height;
      const target = ASPECT_TARGETS[aspectRatio];
      if (Math.abs(ratio - target) / target > 0.05) {
        setWarning(
          `This image is ${width}x${height} (${ratio.toFixed(2)}:1), the ${label} slot expects ${aspectRatio}. It'll still upload, but consider cropping first.`
        );
      }
    } catch {
      // Dimension check is advisory only, skip silently on failure.
    }

    if (!isCloudinaryConfigured()) {
      setStatus("error");
      setError(
        "Cloudinary isn't configured yet (missing upload preset). See docs/admin-panel.md to finish setup."
      );
      return;
    }

    try {
      const url = await uploadImageToCloudinary(file);
      onChange(url);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Upload failed.");
    }
  }

  const containerAspect = aspectRatio === "1:1" ? "aspect-square" : "aspect-[4/5]";

  return (
    <div>
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-600">
        {label} <span className="text-gray-400">({aspectRatio})</span>
      </p>
      <div className={`relative ${containerAspect} w-full overflow-hidden rounded-md border border-dashed border-gray-300 bg-gray-50`}>
        {value ? (
          <Image src={value} alt={label} fill sizes="200px" className="object-cover" unoptimized />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-gray-400">No image</div>
        )}
        {status === "uploading" && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 text-xs text-ink">
            Uploading&hellip;
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = "";
        }}
        className="mt-2 w-full text-xs text-gray-600 file:mr-2 file:rounded file:border-0 file:bg-navy file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-cream hover:file:bg-navy-deep"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="mt-1 text-xs text-gray-400 underline hover:text-red-600"
        >
          Remove image
        </button>
      )}
      {warning && <p className="mt-1 text-xs text-amber-600">{warning}</p>}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
