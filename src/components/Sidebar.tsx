import { Compass, Home, LayoutDashboard, Star, UploadCloud, User2, Users } from 'lucide-react'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

interface SidebarProps {
  isMobileMenuOpen: boolean;
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileMenuOpen, isMobile }) => {
  const location = useLocation();

  return (
    <aside className={`bg-white w-64 min-h-screen border-r border-gray-200 md:block transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-20 rounded-md shadow-md fixed md:sticky top-0 left-0`}>
      <div className="p-4">
        <nav className="space-y-4">
          <div>
            <NavLink to="/dashboard" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <LayoutDashboard className="h-5 w-5 mr-2" />
              <span className={'md:block'}>Dashboard</span>
            </NavLink>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 md:block text-center md:text-left">Learning</h3>
            <NavLink to="/courses" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <Compass className="h-5 w-5 mr-2" />
              <span className={'md:block'}>Courses</span>
            </NavLink>
            <NavLink to="/my-courses" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <Star className="h-5 w-5 mr-2" />
              <span className={'md:block'}>My Courses</span>
            </NavLink>
            <NavLink to="/paths" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <Compass className="h-5 w-5 mr-2" />
              <span className={'md:block'}>Learning Paths</span>
            </NavLink>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 md:block text-center md:text-left">Content Management</h3>
            <NavLink to="/media" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <UploadCloud className="h-5 w-5 mr-2" />
              <span className={'md:block'}>Media Library</span>
            </NavLink>
            <NavLink to="/scorm" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <UploadCloud className="h-5 w-5 mr-2" />
              <span className={'md:block'}>SCORM Packages</span>
            </NavLink>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 md:block text-center md:text-left">Account</h3>
            <NavLink to="/profile" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <User2 className="h-5 w-5 mr-2" />
              <span className={'md:block'}>Profile</span>
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <Home className="h-5 w-5 mr-2" />
              <span className={'md:block'}>Settings</span>
            </NavLink>
            <NavLink to="/users" className={({ isActive }) => `flex items-center p-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700'} ${isMobile ? 'justify-center md:justify-start' : ''}`}>
              <Users className="h-5 w-5 mr-2" />
              <span className={'md:block'}>Users</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
