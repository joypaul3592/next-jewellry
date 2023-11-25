'use client'

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

// Import the JSON data
import menus from '../../../../public/assect/json/menus.json';

// Components
import RoundedBtn from '../roundedBtn/page';

export default function Menu() {
    const pathname = usePathname();

    const isPathActive = (menuLink) => {
        // Check if the current pathname is exactly the menu link
        return pathname === menuLink || pathname.startsWith(`${menuLink}/`);
    };

    const [activeSubMenu, setActiveSubMenu] = useState(null);

    return (
        <div className='md:flex hidden lg:gap-32 gap-10 items-center '>
            {/* All Menu and Submenu */}
            <div className='md:flex hidden lg:gap-10 gap-5 items-center '>
                {menus.map((menu, index) => (
                    <div
                        className={`relative py-5 `}
                        key={index}
                        onMouseEnter={() => setActiveSubMenu(menu.link)}
                        onMouseLeave={() => setActiveSubMenu(null)}
                    >
                        <Link
                            className={`text-[14px] hover:text-[#748E63] dark:hover:text-[#F9B572] font-medium ${isPathActive(menu.link)
                                    ? 'text-[#748E63] dark:text-[#F9B572]'
                                    : 'text-black dark:text-gray-300'
                                }`}
                            href={menu.link}
                        >
                            {menu.label}
                        </Link>
                        {menu.submenu && activeSubMenu === menu.link && (
                            <ul className='absolute  rounded top-[3.8rem] w-40 text-[14px] font-medium'>
                                {menu.submenu.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className=' py-3 px-3 bg-gray-100 dark:bg-[#1c1c1c] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#00000094] dark:border-gray-600 border-b'
                                    >
                                        <Link
                                            href={subItem.link}
                                            className={
                                                isPathActive(subItem.link)
                                                    ? 'text-[#748E63] dark:text-[#F9B572]'
                                                    : 'text-black dark:text-gray-300'
                                            }
                                        >
                                            {subItem.label}
                                        </Link>
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
    );
}

