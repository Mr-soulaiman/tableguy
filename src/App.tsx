import React from 'react';
import { RouterProvider, useRouter } from './router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TableGeneratorPage } from './pages/TableGeneratorPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/table-generator':
        return <TableGeneratorPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms':
        return <TermsPage />;
      case '/404':
        return <NotFoundPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-black selection:bg-[#FFDE00] selection:text-black">
      <Navbar />
      <main className="flex-1">
        {renderPage()}
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

