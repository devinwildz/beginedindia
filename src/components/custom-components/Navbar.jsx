'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Resources', href: '/resources' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-8xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="BeginEd India" className="h-12 object-contain" />
              <span className="text-xl font-bold text-[#2b5e5e]">
                Begin Ed India®
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.name === 'Resources') {
                return (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger className="text-[#2b5e5e] cursor-pointer hover:text-[#2b5e5e] font-medium flex items-center">
                      Resources <span className="ml-1"><ChevronDown size={18} /></span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="cursor-pointer text-[#2b5e5e] data-highlighted:bg-[#c0e7c7] *:data-highlighted:text-[#2b5e5e]">All Resources</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-[#2b5e5e] data-highlighted:bg-[#c0e7c7] *:data-highlighted:text-[#2b5e5e]">Lactation Info Sheets</DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-[#2b5e5e] data-highlighted:bg-[#c0e7c7] *:data-highlighted:text-[#2b5e5e]">Professional Articles</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#2b5e5e] hover:text-[#2b5e5e] font-medium"
                >
                  {link.name}
                </Link>
              );
            })}

            {/* India Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[#2b5e5e] hover:text-[#2b5e5e] font-medium flex items-center gap-1.5 cursor-pointer">
                <Globe size={15} className="text-[#2b5e5e]" />
                India <span className="ml-1"><ChevronDown size={18} /></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer text-[#2b5e5e] data-highlighted:bg-[#c0e7c7] *:data-highlighted:text-[#2b5e5e]">India</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-[#2b5e5e] data-highlighted:bg-[#c0e7c7] *:data-highlighted:text-[#2b5e5e]">Global</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-green-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-green-700 hover:text-green-800 font-medium text-lg"
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                      {link.name === 'Resources' && <span className="ml-2">▼</span>}
                    </Link>
                  ))}
                  <div className="border-t pt-4">
                    <p className="text-green-700 font-medium text-lg flex items-center">
                      🇮🇳 India ▼
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}