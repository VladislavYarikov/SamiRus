import type { APIRoute } from "astro";
import sharp from "sharp";

export const GET: APIRoute = async ({ params, request }) => {
  const { filename } = params;

  console.warn(import.meta.env.SITE);
  const imageUrl = new URL(
    `${import.meta.env.SITE}/assets_internal/category/${filename}`
  );
  console.warn(imageUrl.toString());
  const imageBuffer = await fetch(imageUrl.toString())
    .then((res) => res.blob())
    .then((blob) => blob.arrayBuffer())
    .then((buffer) => Buffer.from(buffer));

  const targetSize = {
    width: 400,
    height: 400,
  };

  const resizedImageBuffer = await sharp(imageBuffer)
    .resize({
      width: targetSize.width * 0.8,
      height: targetSize.height * 0.8,
      fit: sharp.fit.inside, // Maintain aspect ratio inside the given dimension
      withoutEnlargement: false, // Do not enlarge if image is smaller than the target size
    })
    .toBuffer();

  const whiteBackground = sharp({
    // @ts-ignore
    create: {
      width: targetSize.width,
      height: targetSize.height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  });

  const compositeImage = await whiteBackground
    .composite([
      {
        input: resizedImageBuffer,
        gravity: "center",
      },
    ])
    .png()
    .toBuffer();

  return new Response(compositeImage, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
