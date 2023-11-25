'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

// Import the JSON data
import menus from '/public/assect/json/menus.json';

// Import React Icons
import { GoTable } from 'react-icons/go';
import { HiOutlineHome } from 'react-icons/hi';
import { RiPriceTag3Line } from 'react-icons/ri';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { PiUserSquare, PiNote, PiSubtractSquare } from 'react-icons/pi';

// Components
import Logo from './logo';
import RoundedBtn from '../roundedBtn/page';

export default function MobileMenu() {
  // To Get pathname for active menu
  const pathname = usePathname();
  // State
  const [open, setOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Icon mapping
  const icons = {
    Home: <HiOutlineHome />,
    Services: <GoTable />,
    Pricing: <RiPriceTag3Line />,
    Contact: <PiUserSquare />,
    About: <RiMenuUnfoldFill />,
    Blog: <PiNote />,
  };

  return (
    <div className='md:hidden mobileMenu'>
      <RiMenuUnfoldFill onClick={() => setOpen(true)} className='text-lg dark:text-white' />

      <div onClick={() => setOpen(false)} className={`fixed w-full h-screen top-0 left-0 dark:bg-black bg-gray-300 bg-opacity-25 dark:bg-opacity-25 transition-all ease-linear duration-300 ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div onClick={(e) => e.stopPropagation()} className={`fixed top-0 w-2/3 pt-5 pb-10 px-10 h-screen bg-white dark:bg-[#1c1c1c] dark:bg-opacity-50 bg-opacity-50 backdrop-blur-lg transition-all ease-linear duration-300  ${open ? "left-0 visible " : "-left-[33rem] invisible"}`}>
          <div className='flex flex-col  h-full '>
            <div className='flex justify-center mb-10'>
              <Logo />
            </div>
            {/* Menu */}
            <div className=' flex flex-col flex-1 justify-between h-full'>
              <div className='flex flex-col items-start w-full '>
                {menus.map((menu, index) => (
                  <div className={`py-5 w-full`} key={index} onClick={() => setActiveSubMenu(prevActiveSubMenu => prevActiveSubMenu === menu.link ? null : menu.link)}>
                    <Link onClick={() => {
                      if (menu.label !== "Services") {
                        setOpen(false);
                      }
                    }} className={`text-[14px] hover:text-[#748E63] dark:hover-text-[#F9B572] font-medium  flex items-center justify-between w-full  ${pathname === menu.link ? 'text-[#748E63] dark:text-[#F9B572]' : 'text-black dark:text-gray-300'}`} href={menu.link}>
                      <div className='flex items-center gap-3'>
                        {icons[menu.label]}  {menu.label}
                      </div>
                      <div>
                        {menu.label === "Services" && <MdKeyboardArrowDown className=' text-xl' />}
                      </div>
                    </Link>
                    {menu.submenu && activeSubMenu === menu.link && (
                      <ul onClick={(e) => e.stopPropagation()} className='rounded w-full text-[14px] font-medium pl-5 '>
                        {menu.submenu.map((subItem, subIndex) => (
                          <li key={subIndex} className='pt-7 px-3 text-black dark:text-gray-300 '>
                            <Link className=' flex items-center gap-3' href={subItem.link}><PiSubtractSquare className=' text-lg' /> {subItem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Free Trial Button */}
              <RoundedBtn href={'/freeTrial'} text='Free Trial' type='button' />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
