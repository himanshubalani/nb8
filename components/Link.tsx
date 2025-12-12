'use client';
import React from 'react';
import { useRouter, Route } from '../lib/router-context';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: Route;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...props }) => {
  const { push } = useRouter();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    push(href);
    window.scrollTo(0, 0);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};