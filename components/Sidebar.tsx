'use client';

import React from 'react';
import { cn } from '@/app/utils/cn';

export interface SidebarItem {
  id: string;
  label: string;
}

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  items: SidebarItem[];
  activeSection?: string;
  onItemClick: (id: string) => void;
  widthClass?: string;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, title = '', items, activeSection, onItemClick, widthClass = 'lg:w-64', ...props }, ref) => {
    return (
      <aside 
        ref={ref}
        className={cn("hidden lg:block flex-shrink-0", widthClass, className)} 
        {...props}
      >
        <div className="sticky top-24 bg-white border-[3px] border-black rounded-xl p-3 md:p-4 overflow-y-auto max-h-[80vh]">
          <h4 className="font-outfit font-bold text-base md:text-lg mb-3 md:mb-4 uppercase tracking-wider border-b-2 border-black pb-2">
            {title}
          </h4>

          <ul className="space-y-2">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onItemClick(item.id)}
                    className={cn(
                      "w-full text-left px-2 md:px-3 py-2 rounded-lg border-2 font-bold text-xs md:text-sm transition-all",
                      isActive
                        ? "bg-black text-white border-none translate-x-[2px] translate-y-[2px]"
                        : "bg-gray-50 text-black border-transparent hover:bg-[#90a8ed] hover:border-black"
                    )}
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
  }
);

Sidebar.displayName = "Sidebar";

export { Sidebar };