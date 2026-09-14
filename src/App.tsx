import React from 'react';
import { RouterProvider, useRouter } from './router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TableGeneratorPage } from './pages/TableGeneratorPage';

function AppContent() {
  const { currentPath } = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-black selection:bg-[#FFDE00] selection:text-black">
      <Navbar />
      <main className="flex-1">
        {currentPath === '/table-generator' ? (
          <TableGeneratorPage />
        ) : (
          <HomePage />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
