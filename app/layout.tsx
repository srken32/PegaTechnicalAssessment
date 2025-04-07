import './globals.css';
import { ReactNode } from 'react';
import MainNav from '@/app/components/menu';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <MainNav />
        <main className="ml-[375px] lg:ml-[375px] flex-1 transition-all duration-300 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
