import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, useRouter } from './components/lib/router-context';
import RootLayout from './app/layout';
import HomePage from './app/page';
import DocsPage from './app/docs/page';

const PageSwitcher = () => {
  const { path } = useRouter();
  
  // Simple Route Matching
  if (path === '/docs') {
    return <DocsPage />;
  }
  
  // Default to Home
  return <HomePage />;
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider>
      <RootLayout>
        <PageSwitcher />
      </RootLayout>
    </RouterProvider>
  </React.StrictMode>
);