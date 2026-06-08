'use client'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { MobileNav } from './MobileNav'
import Image from 'next/image'
import NavigationContentService from '@/services/navigationContent.service'

export default function Navbar() {
  const { menuOptions } = NavigationContentService()
  return (
    <header className="fixed top-0 h-16 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 mx-3">
          <Image
            src="/assets/brand-logo.png"
            alt="Subhankar Canvas"
            width={40}
            height={40}
            sizes="48px"
            className="rounded-md"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <span className="font-bold text-xl hidden sm:block">
            Subhankar's Canvas
          </span>
        </Link>
        {/* Desktop */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuOptions?.map((item, i) => {
                return (
                  <NavigationMenuItem key={i + 1}>
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href={`#${item?.id}`}>{item?.value}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
