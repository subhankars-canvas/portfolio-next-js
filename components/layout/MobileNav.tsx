'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <nav className="flex flex-col gap-4 m-2 p-2">
          <SheetClose asChild>
            <a href="/">Home</a>
          </SheetClose>

          <SheetClose asChild>
            <a href="#about">About</a>
          </SheetClose>

          <SheetClose asChild>
            <a href="#projects">Projects</a>
          </SheetClose>

          <SheetClose asChild>
            <a href="#contact">Contact</a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
