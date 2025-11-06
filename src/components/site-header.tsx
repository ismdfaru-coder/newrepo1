
'use client';

import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Button } from './ui/button';
import { PanelLeft } from 'lucide-react';
import { usePublicLayout } from '@/app/(public)/public-layout-context';

export function SiteHeader() {
  const { toggleSidebar } = usePublicLayout();
  
  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={toggleSidebar}>
                <PanelLeft className="h-6 w-6"/>
                <span className="sr-only">Toggle Menu</span>
            </Button>
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-7 w-7 text-primary" />
            <span className="font-headline text-2xl font-bold tracking-tighter">Readme Hub</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end">
          {/* Admin login button removed from public view */}
        </div>
      </div>
    </header>
  );
}
