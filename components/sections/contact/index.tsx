'use client'
import { motion } from 'framer-motion'
import { Mail, FileUser, UserRound, Copyright } from 'lucide-react'
import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="min-h-auto scroll py-8"
      id="contact"
    >
      <div className="container mx-auto px-8">
        <div className="flex w-full justify-start gap-4">
          <div className="w-2/3">
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              Subhankar Roy.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              FullStack Developer. AI-driven development.
            </p>
            <p className="mt-4">
              I help businesses build scalable, user-focused digital products
              through modern web technologies and AI-driven innovation. With 10+
              years of experience in full-stack development and 5+ years of
              engineering leadership, I specialize in React.js, Node.js,
              JavaScript, and delivering high-quality products in Agile
              environments.
            </p>
          </div>
          <div className="w-1/3">
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              Let's connect
            </p>
            <div className="mt-4">
              <Item>
                <ItemMedia variant="icon">
                  <Mail />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Email</ItemTitle>
                </ItemContent>
              </Item>
              <Item>
                <ItemMedia variant="icon">
                  <FileUser />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Resume</ItemTitle>
                </ItemContent>
              </Item>
              <Item>
                <ItemMedia variant="icon">
                  <UserRound />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>LinkedIn</ItemTitle>
                </ItemContent>
              </Item>
              <Item>
                <ItemMedia variant="icon">
                  <UserRound />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>GitHub</ItemTitle>
                </ItemContent>
              </Item>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-200 dark:border-white/10" />
        <div className="flex gap-4 w-full">
          <div className="flex flex-1 justify-start">
            <Copyright
              className="text-sm text-muted-foreground leading-relaxed mx-[2px] my-[2px]"
              size={15}
            />
            <p className="text-sm text-muted-foreground leading-relaxed mx-2">
              2026 Subhankar Roy. All rights reserved.
            </p>
          </div>
          <div className="flex flex-1 justify-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built with &#x2764;&#xFE0F; and Next Js(UI & BFF), Shadcn/UI(UI
              components), Tailwind CSS, Nest Js(API) over a weekend.
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <Link
              href="#tnc"
              className="px-2 mx-2 text-sm text-muted-foreground leading-relaxed"
            >
              Terms & conditions
            </Link>
            <Link
              href="#privacy"
              className="px-2 mx-2 text-sm text-muted-foreground leading-relaxed"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
