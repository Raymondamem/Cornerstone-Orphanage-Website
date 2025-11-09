import { UserButton } from '@clerk/nextjs'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <UserButton afterSignOutUrl="/admin/signin" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome, Admin</h2>
          <p className="text-gray-600">
            This is your protected admin dashboard. You can manage the orphanage website from here.
          </p>
        </div>
      </main>
    </div>
  )
}
