import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../lib/auth'

const LoginPage: React.FC = () => {
  const { login } = useAuth()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically handle login logic, e.g., API call
    // For now, let's just simulate successful login
    login()
  }

  return (
    <div>
      <h1>Login</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </div>
      </form>
      <div className="mt-4 text-sm">
        <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
          Sign up
        </Link>
      </div>
      <div className="mt-2 text-sm">
        <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
