"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs"

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="md:hidden relative" ref={menuRef}>
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-9 w-9 p-0 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950" 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-white dark:bg-card shadow-xl shadow-slate-200/50 dark:shadow-black/30 ring-1 ring-slate-200/50 dark:ring-border z-50 overflow-hidden">
          <div className="py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <SignedOut>
              <div className="border-t border-slate-100 dark:border-border mt-2 pt-2 px-3 pb-2 space-y-2">
                <SignInButton mode="modal">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-sm text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-500/25">
                    Get Started
                  </Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </div>
      )}
    </div>
  )
}
