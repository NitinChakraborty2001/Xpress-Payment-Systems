import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ children, className = '' }: PageLayoutProps) => (
  <main className={`flex-grow bg-black pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 flex flex-col ${className}`}>
    <div className="max-w-7xl mx-auto w-full">
      {children}
    </div>
  </main>
);
