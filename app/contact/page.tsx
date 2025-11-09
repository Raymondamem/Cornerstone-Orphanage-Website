export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fffdf7]">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-[#0b1f33] mb-6">Contact us</h1>
        <p className="text-gray-700 mb-8">We would love to hear from you. For donations, volunteering, or general inquiries, reach out below.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input className="w-full border rounded px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea className="w-full border rounded px-3 py-2 h-32" placeholder="How can we help?" />
          </div>
          <button className="bg-[#164672] text-white px-4 py-2 rounded">Send message</button>
        </div>
        <div className="mt-10 text-sm text-gray-600">
          <p>Email: info@cornerstone-orphanage.org</p>
          <p>Address: Yelwa Kagadama, Bauchi, Nigeria</p>
        </div>
      </main>
    </div>
  )
}
