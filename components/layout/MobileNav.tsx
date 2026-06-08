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
import NavigationContentService from '@/services/navigationContent.service'

export function MobileNav() {
  const { menuOptions } = NavigationContentService()
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
          {menuOptions?.map((item, i) => {
            return (
              <SheetClose asChild key={i + 1}>
                <a href={`#${item?.id}`}>{item?.value}</a>
              </SheetClose>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
