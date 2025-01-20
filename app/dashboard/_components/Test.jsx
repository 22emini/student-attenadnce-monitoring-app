import React, { useState } from 'react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { GraduationCap, Hand, LayoutIcon, Settings, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useKindeBrowserClient();
  const path = usePathname();

  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutIcon,
      path: '/dashboard'
    },
    {
      id: 2,
      name: 'Students',
      icon: GraduationCap,
      path: '/dashboard/students'
    },
    {
      id: 3,
      name: 'Attendance',
      icon: Hand,
      path: '/dashboard/attendance'
    },
    {
      id: 4,
      name: 'Settings',
      icon: Settings,
      path: '/dashboard/settings'
    },
  ];

  return (
    <div>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 p-2 rounded-lg bg-white shadow-md md:hidden z-50"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`
        fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out md:hidden z-40
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-5">
          <Image src={'/logo.svg'} width={180} height={50} alt='logo' />
          <hr className="my-5" />
          
          <nav className="mt-8">
            {menuList.map((menu) => (
              <Link 
                href={menu.path} 
                key={menu.id}
                onClick={() => setIsOpen(false)}
              >
                <h2 className={`
                  flex items-center gap-3 text-md p-4
                  text-slate-500
                  hover:bg-primary
                  hover:text-white
                  cursor-pointer
                  rounded-lg
                  my-2
                  ${path === menu.path && 'bg-primary text-white'}
                `}>
                  <menu.icon />
                  {menu.name}
                </h2>
              </Link>
            ))}
          </nav>

          {/* User Profile Section */}
          <div className="absolute bottom-5 p-2 flex gap-2 items-center">
            <Image 
              src={user?.picture} 
              width={35}
              height={35}
              alt='user'
              className="rounded-full"
            />
            <div>
              <h2 className="text-sm font-bold">
                {user?.given_name} {user?.family_name}
              </h2>
              <h2 className="text-[10px] text-slate-400">
                {user?.email}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;