export default function GalleryPage() {
  const images = [
    "/figmaAssets/image-10.png",
    "/figmaAssets/image-3.png",
    "/figmaAssets/image-9.png",
    "/figmaAssets/group-2.png",
  ]
  return (
    <div className="min-h-screen bg-[#fffdf7]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#0b1f33] mb-6">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src) => (
            <img key={src} src={src} alt="Gallery" className="w-full h-64 object-cover rounded-lg" />
          ))}
        </div>
      </main>
    </div>
  )
}
