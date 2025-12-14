'use client';

import React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
  activeSection?: string;
  onItemClick: (id: string) => void;

  /** Layout + style knobs */
  stickyTop?: number;
  widthClass?: string;
  containerClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  title = '',
  items,
  activeSection,
  onItemClick,

  stickyTop = 96, // px → matches `top-24`
  widthClass = 'lg:w-64',
  containerClassName = '',
  itemClassName = '',
  activeItemClassName = '',
}) => {
  return (
    <aside className={`${widthClass} flex-shrink-0`}>
      <div
        className={`sticky bg-white border-[3px] border-black rounded-xl p-4 overflow-y-auto max-h-[80vh] ${containerClassName}`}
        style={{ top: stickyTop }}
      >
        <h4 className="font-outfit font-bold text-lg mb-4 uppercase tracking-wider border-b-2 border-black pb-2">
          {title}
        </h4>

        <ul className="space-y-2">
          {items.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className={`
                    w-full text-left px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all
                    ${
                      isActive
                        ? `bg-black text-white border-black translate-x-[2px] translate-y-[2px] ${activeItemClassName}`
                        : `bg-gray-50 text-black border-transparent hover:bg-[#90a8ed] hover:border-black ${itemClassName}`
                    }
                  `}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
