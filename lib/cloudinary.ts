export async function uploadToCloudinary(file: File): Promise<string> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim();
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET?.trim();

  if (!cloudName) {
    throw new Error(
      "Cloudinary cloud name is not set. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your .env."
    );
  }

  if (!uploadPreset) {
    throw new Error(
      "Cloudinary upload preset is not set. Set NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET in your .env (must be an UNSIGNED preset)."
    );
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset); // Must be an UNSIGNED preset in Cloudinary

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    let message = "Failed to upload image to Cloudinary";
    try {
      const err = await response.json();
      if (err?.error?.message) message = err.error.message;
    } catch (_) {
    }
    console.log(message);
    throw new Error(message);
  }

  const data = await response.json();
  return data.secure_url;
}

export function getCloudinaryPublicId(url: string): string | null {
  const regex = /\/v\d+\/(.+)\.\w+$/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
