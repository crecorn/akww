'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { Loader2, AlertCircle, Lock } from 'lucide-react'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/admin'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    router.push(redirectTo)
    router.refresh()
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
          <Lock className="w-5 h-5 text-[var(--color-primary)]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">Sign In</h1>
          <p className="text-sm text-slate-500">Access the admin dashboard</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            placeholder="admin@akwaterworks.net"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] disabled:bg-slate-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </form>
    </div>
  )
}

function LoginFormFallback() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
          <Lock className="w-5 h-5 text-slate-400" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">Sign In</h1>
          <p className="text-sm text-slate-500">Loading...</p>
        </div>
      </div>
      <div className="animate-pulse space-y-4">
        <div className="h-10 bg-slate-100 rounded-lg" />
        <div className="h-10 bg-slate-100 rounded-lg" />
        <div className="h-12 bg-slate-200 rounded-lg" />
      </div>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Image
            src="/images/AK-WW-Logo-HZ.svg"
            alt="AK Water Works"
            width={200}
            height={60}
            className="mx-auto mb-4"
          />
          <p className="text-slate-400">Admin Dashboard</p>
        </div>

        {/* Login Card with Suspense */}
        <Suspense fallback={<LoginFormFallback />}>
          <LoginForm />
        </Suspense>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-6">
          Protected area. Authorized personnel only.
        </p>
      </div>
    </div>
  )
}
