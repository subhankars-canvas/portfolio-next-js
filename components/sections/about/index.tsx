'use client'

import { motion } from 'framer-motion'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2 } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="min-h-auto scroll py-8"
      id="about"
    >
      <div className="container mx-auto px-8">
        <div className="flex justify-center flex-wrap">
          <p className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Who Am I? Where I have contributed so far?
          </p>
          <p className="text-center mt-6">
            Frontend Engineer with 10+ years of experience leading teams,
            building projects from scratch to production, and delivering
            optimized, scalable solutions. Experienced in technical
            architecture, UI/UX strategy, and modern web technologies including
            React JS, Vue JS, Node JS, JavaScript, TypeScript, HTML, and CSS.
            Proven track record of direct customer engagement, requirement
            analysis, and live project management. Recognized multiple times for
            outstanding contributions and excellence in client delivery.
          </p>
        </div>
        <hr className="my-6 border-t border-gray-200 dark:border-white/10" />
        <div className="flex justify-center flex-wrap gap-8">
          <Card
            className="relative bg-white shadow-lg border border-gray-100
                 shadow-[0_20px_60px_rgba(59,130,246,0.25)]
                 hover:shadow-xl transition-all duration-300 w-full max-w-sm"
          >
            <div className="absolute top-1 right-3 text-sm bg-[oklch(0.145_0_0)] text-white border border-[oklch(0.145_0_0)] rounded-[10px] px-3">
              {' '}
              Current
            </div>
            <CardHeader className="flex flex-row items-center gap-4 mt-3">
              {/* Icon / Banner */}
              <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/tcs-company.jpg"
                  alt="Company Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <div>
                <CardTitle className="text-lg font-semibold">
                  Next.js Portfolio Project
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Personal Project
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built a modern portfolio using Next.js App Router, Tailwind CSS,
                ShadCN UI, and Framer Motion for smooth animations and
                transitions.
              </p>

              {/* Button */}
              <Button className="w-full cursor-pointer">
                Show More Details
              </Button>
            </CardContent>
          </Card>
          <Card
            className="bg-white shadow-lg border border-gray-100
                 shadow-[0_20px_60px_rgba(59,130,246,0.25)]
                 hover:shadow-xl transition-all duration-300 w-full max-w-sm"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              {/* Icon / Banner */}
              <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Building2 className="text-blue-500" />
              </div>

              {/* Title */}
              <div>
                <CardTitle className="text-lg font-semibold">
                  Next.js Portfolio Project
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Personal Project
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built a modern portfolio using Next.js App Router, Tailwind CSS,
                ShadCN UI, and Framer Motion for smooth animations and
                transitions.
              </p>

              {/* Button */}
              <Button className="w-full cursor-pointer">
                Show More Details
              </Button>
            </CardContent>
          </Card>
          <Card
            className="bg-white shadow-lg border border-gray-100
                 shadow-[0_20px_60px_rgba(59,130,246,0.25)]
                 hover:shadow-xl transition-all duration-300 w-full max-w-sm"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              {/* Icon / Banner */}
              <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Building2 className="text-blue-500" />
              </div>

              {/* Title */}
              <div>
                <CardTitle className="text-lg font-semibold">
                  Next.js Portfolio Project
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Personal Project
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built a modern portfolio using Next.js App Router, Tailwind CSS,
                ShadCN UI, and Framer Motion for smooth animations and
                transitions.
              </p>

              {/* Button */}
              <Button className="w-full cursor-pointer">
                Show More Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  )
}
