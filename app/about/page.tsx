export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffdf7]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#0b1f33] mb-6">About Cornerstone Orphanage</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Since 1999, Cornerstone Orphanage has provided a safe and nurturing home where children are
          empowered to dream, learn, and discover their purpose. We are committed to holistic care—
          education, healthcare, mentorship, and a loving community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <img src="/figmaAssets/image-10.png" alt="Children" className="rounded-lg w-full h-64 object-cover" />
          <img src="/figmaAssets/image-3.png" alt="Learning" className="rounded-lg w-full h-64 object-cover" />
          <img src="/figmaAssets/image-9.png" alt="Community" className="rounded-lg w-full h-64 object-cover" />
        </div>
      </main>
    </div>
  )
}
