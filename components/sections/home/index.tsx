'use client'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function HomeSection() {
  // const text = 'Frontend Developer'
  return (
    <section id="home" className="min-h-screen scroll-mt-20 flex items-center">
      <div className="container mx-auto px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <p className="mb-2 text-lg text-muted-foreground">Hello, I'm</p>

              <h1 className="mb-4 text-5xl font-bold md:text-7xl">
                Subhankar Roy
              </h1>
              <TypeAnimation
                sequence={['Frontend Developer', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="mb-6 text-2xl text-primary md:text-3xl"
              />

              <p className="mb-8 max-w-xl text-muted-foreground">
                I build modern web applications using React, Next.js,
                TypeScript, and Tailwind CSS.
              </p>

              <div className="flex gap-4">
                <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground">
                  Contact Me
                </button>

                <button className="rounded-md border px-6 py-3">Resume</button>
              </div>
            </div>
          </motion.div>
          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center">
              {/** Only Desktop view */}
              <div className="hidden md:block">
                <div className="relative bottom-20 left-20 h-20 w-20 rounded-full bg-primary/10">
                  <Image
                    src="/assets/react.png"
                    alt="React"
                    fill
                    sizes="100px" // just for reference does not have any effects
                    className="object-cover"
                  />
                </div>
                <div className="relative bottom-40 left-60 h-20 w-20 rounded-full bg-primary/10">
                  <Image
                    src="/assets/nodejs.jpg"
                    alt="React"
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                <div className="relative bottom-20 left-10 h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="/assets/js-bg.webp"
                    alt="React"
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-1/2 right-1/3 h-35 w-35 rounded-full bg-primary/5" />
              </div>
              <Image
                src="/assets/developer-illustration.webp"
                alt="Developer Illustration"
                width={550}
                height={550}
                priority
                className="h-auto w-full max-w-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
