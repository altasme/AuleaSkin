// Unsigned, client-side upload straight to Cloudinary. This site has no
// server (static export, no API routes, see next.config.ts), so a signed
// upload is not possible from here, that would require an API secret
// sitting somewhere it can generate a signature without ever reaching the
// browser, which means a server this project doesn't have. Unsigned
// upload is Cloudinary's supported way to upload from a browser with no
// backend: it only needs the cloud name and a named "upload preset" that
// you mark Unsigned in the Cloudinary dashboard, never the API key or API
// secret. See docs/admin-panel.md for how to create that preset.

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export class CloudinaryConfigError extends Error {}

export function isCloudinaryConfigured() {
  return Boolean(CLOUD_NAME && UPLOAD_PRESET);
}

export async function uploadImageToCloudinary(file: File): Promise<string> {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new CloudinaryConfigError(
      "Cloudinary isn't configured yet. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET in .env.local (see docs/admin-panel.md for how to create an unsigned upload preset)."
    );
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const message = body?.error?.message ?? `Upload failed with status ${response.status}.`;
    throw new Error(message);
  }

  const data = (await response.json()) as { secure_url: string };
  return data.secure_url;
}

// Reads an image file's natural width/height in the browser, used to warn
// the admin when an upload doesn't match the slot's expected aspect ratio.
// Advisory only, nothing blocks the upload on this, there's no server to
// enforce it against anyway.
export function readImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read image dimensions."));
    };
    img.src = url;
  });
}
