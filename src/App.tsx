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
import { GuidesPage } from './pages/GuidesPage';
import { GuideArticlePage } from './pages/GuideArticlePage';
import { TodoListPage } from './pages/TodoListPage';

function AppContent() {
  const { currentPath } = useRouter();

  const renderPage = () => {
    if (currentPath === '/') {
      return <HomePage />;
    }
    if (currentPath === '/table-generator') {
      return <TableGeneratorPage />;
    }
    if (currentPath === '/to-do-list') {
      return <TodoListPage />;
    }
    if (currentPath === '/guides') {
      return <GuidesPage />;
    }
    if (currentPath.startsWith('/guides/')) {
      const slug = currentPath.replace('/guides/', '').split('/')[0];
      if (slug) {
        return <GuideArticlePage slug={slug} />;
      }
      return <GuidesPage />;
    }
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }
    if (currentPath === '/terms') {
      return <TermsPage />;
    }
    if (currentPath === '/404') {
      return <NotFoundPage />;
    }
    return <NotFoundPage />;
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

