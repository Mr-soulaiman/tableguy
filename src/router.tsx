import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type RoutePath =
  | '/'
  | '/table-generator'
  | '/about'
  | '/contact'
  | '/privacy-policy'
  | '/terms'
  | '/404'
  | string;

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);

interface RouterProviderProps {
  children: ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title?: string;
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Link({ href, children, className = '', target, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!target || target === '_self') {
      e.preventDefault();
      navigate(href);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={href} target={target} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}

