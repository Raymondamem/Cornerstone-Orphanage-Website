import { SignIn } from '@clerk/nextjs'

export default function AdminSignInCatchAll() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignIn
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'shadow-md',
          },
        }}
        routing="path"
        path="/admin/signin"
        signUpUrl="/admin/signin"
      />
    </div>
  )
}
