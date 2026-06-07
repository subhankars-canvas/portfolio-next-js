'use client'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function HomeSection() {
  return (
    <section id="home" className="min-h-auto scroll-mt-20 flex items-center">
      <div className="container mx-auto my-8 px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-6 sm:gap-8 md:gap-10 grid-cols-1 md:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-2 text-lg text-muted-foreground">Hello, I'm</p>

            <h1 className="mb-4 text-3xl sm:text-5xl md:text-7xl font-bold">
              Subhankar Roy
            </h1>
            <TypeAnimation
              sequence={['Frontend Developer', 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="mb-6 text-xl sm:text-2xl md:text-3xl text-primary"
            />

            <p className="mb-8 max-w-xl text-muted-foreground">
              I build modern web applications using React, Next.js, TypeScript,
              and Tailwind CSS.
            </p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <button className="rounded-md bg-primary px-4 sm:px-6 py-2 sm:py-3 text-primary-foreground text-sm sm:text-base">
                Contact Me
              </button>

              <button className="rounded-md border px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                Resume
              </button>
            </div>
          </motion.div>
          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[420px] flex items-center justify-center">
              {/* MAIN IMAGE (center layer) */}
              <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
                <Image
                  src="/assets/developer-illustration.webp"
                  alt="Developer Illustration"
                  fill
                  priority
                  sizes="400px"
                  className="object-contain z-10"
                />
              </div>
              {/* ICON 1 */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden sm:block">
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  whileHover="hover"
                  className="relative h-16 w-16 rounded-full bg-primary/10"
                >
                  <Image
                    src="/assets/js-bg.webp"
                    alt="JS"
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* ICON 2 */}
              <div className="absolute top-10 left-1/8 hidden sm:block">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  whileHover="hover"
                  className="relative h-16 w-16 rounded-full bg-primary/10"
                >
                  <Image
                    src="/assets/nodejs.jpg"
                    alt="JS"
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* ICON 3 */}
              <div className="absolute top-12 right-10 hidden sm:block">
                <motion.div
                  animate={{
                    y: [0, -11, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  whileHover="hover"
                  className="relative h-16 w-16 rounded-full bg-primary/10"
                >
                  <Image
                    src="/assets/react.png"
                    alt="JS"
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* ICON 4 */}
              <div className="absolute bottom-1 right-13 hidden sm:block">
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  whileHover="hover"
                  className="relative h-16 w-16 rounded-full bg-primary/10"
                >
                  <Image
                    src="/assets/next-js.png"
                    alt="JS"
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                    className="object-contain"
                  />
                </motion.div>
              </div>
              {/* ICON 5 */}
              <div className="absolute bottom-5 left-14 hidden sm:block">
                <motion.div
                  animate={{
                    x: [0, -8, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  whileHover="hover"
                  className="relative h-16 w-16 rounded-full bg-primary/10"
                >
                  <Image
                    src="/assets/jenkins.svg"
                    alt="JS"
                    fill
                    sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
