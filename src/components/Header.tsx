import React from 'react'
import { Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/auth'

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = async () => {
    logout()
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-xl text-gray-800">LMS Dashboard</div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none focus:shadow-outline-gray" aria-label="Open sidebar">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden md:block">
          {/* User profile or actions can be placed here */}
          <nav>
            <ul className="flex space-x-6 items-center">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Help</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Support</a></li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
