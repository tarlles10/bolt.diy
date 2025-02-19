import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CoursesPage from './pages/CoursesPage'
import DashboardPage from './pages/DashboardPage'
import MediaPage from './pages/MediaPage'
import ScormPage from './pages/ScormPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import MyCoursesPage from './pages/MyCoursesPage'
import LearningPathsPage from './pages/LearningPathsPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import UsersPage from './pages/UsersPage'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './lib/auth'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Header toggleMobileMenu={toggleMobileMenu} />
          <div className="container mx-auto px-4 py-8 grid grid-cols-12 gap-6">
            <aside className="col-span-12 md:col-span-3 lg:col-span-2">
              <Sidebar isMobileMenuOpen={isMobileMenuOpen} isMobile={false} />
            </aside>
            <main className="col-span-12 md:col-span-9 lg:col-span-10 bg-white rounded-md shadow-md p-6">
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                {/* Protected routes */}
                <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
                <Route path="/courses" element={<ProtectedRoute><CoursesPage /></ProtectedRoute>} />
                <Route path="/media" element={<ProtectedRoute><MediaPage /></ProtectedRoute>} />
                <Route path="/scorm" element={<ProtectedRoute><ScormPage /></ProtectedRoute>} />
                <Route path="/my-courses" element={<ProtectedRoute><MyCoursesPage /></ProtectedRoute>} />
                <Route path="/paths" element={<ProtectedRoute><LearningPathsPage /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
                <Route path="/users" element={<ProtectedRoute><UsersPage /></ProtectedRoute>} />
              </Routes>
            </main>
          </div>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
