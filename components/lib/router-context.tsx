'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define available routes
export type Route = '/' | '/docs';

interface RouterContextType {
  path: Route;
  push: (path: Route) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const useRouter = () => {
  const context = useContext(RouterContext);
  // Detailed error message to help debugging
  if (!context) {
    throw new Error(
      'useRouter must be used within a RouterProvider. ' +
      'Make sure you have wrapped your application root in <RouterProvider>.'
    );
  }
  return context;
};

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState<Route>('/');
  
  return (
    <RouterContext.Provider value={{ path, push: setPath }}>
      {children}
    </RouterContext.Provider>
  );
};