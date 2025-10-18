'use client';
 
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
 
export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/edit';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
 
  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md">
    <form className="" action={formAction} noValidate>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Please log in to continue.
        </h1>
            <label
              className="block text-sm font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="mb-4">
              <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium"
            >
              Password
            </label>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <input className="border border-gray-300 rounded-md" type="hidden" name="redirectTo" value={callbackUrl} />
        <button className="bg-gray-500 hover:bg-gray-800 text-white px-4 py-2 rounded-md" aria-disabled={isPending}>
          Log in 
        </button>
        <div
          className="mt-4 text-red-600"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-red-600">{errorMessage}</p>
            </>
          )}
        </div>
    </form>
  </div>
  );
}