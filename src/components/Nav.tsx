'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import React from 'react';
import { FaAddressCard, FaHome } from 'react-icons/fa';

export const navData = [
  {
    id: 1,
    title: 'Home',
    url: '',
    icon: <FaHome />,
  },
  {
    id: 2,
    title: 'MeLinks',
    url: '/melinks',
    icon: <FaAddressCard />,
  },
  {
    id: 3,
    title: 'SignIn',
    url: '/SignIn',
    icon: <FaAddressCard />,
  },
  {
    id: 4,
    title: 'Contact',
    url: '/contact',
    icon: <FaAddressCard />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  const intl = useLocale().replace(/^\//, '');

  return (
    <nav
      className="fixed inset-y-0 z-50 mt-auto flex h-max w-full 
      flex-col  items-center gap-y-4 
      xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md 
      xl:justify-center"
    >
      <div
        className="flex h-[80px] w-full items-center 
                   justify-between gap-y-10 bg-white/10
                   px-4 py-8
                   text-3xl text-white backdrop-blur-sm md:px-40 
                   xl:h-max xl:flex-col xl:justify-center
                   xl:rounded-full xl:px-0 xl:text-xl"
      >
        {navData.map((item) => {
          // Genera la ruta internacional según el idioma actual
          const url = `/${intl}${item.url}`;
          return (
            <Link
              key={item.id}
              href={url}
              className={`${pathname === url && 'text-accent'} group relative 
              flex items-center transition-all duration-300 hover:text-accent `}
            >
              {/* tooltip */}
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="relative flex items-center rounded-[3px] bg-white p-[6px] text-primary">
                  <div className="text-[12px] font-semibold capitalize leading-none">
                    {item.title}
                  </div>
                  {/* triangle */}
                  <div
                    className="absolute -right-2
                   border-y-[6px] border-l-8 border-r-0
                   border-solid  border-y-transparent border-l-white "
                  />
                </div>
              </div>
              {/* icon */}
              <div>{item.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
