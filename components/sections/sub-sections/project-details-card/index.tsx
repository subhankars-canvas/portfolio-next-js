'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export default function ProjectDetailsCard({
  alignment,
  projectImage,
  projectName,
  projectSubHeading,
  projectDescription,
  projectTechStacks,
}: {
  alignment: string
  projectImage: string
  projectName: string
  projectSubHeading: string
  projectDescription: string
  projectTechStacks: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      id="project-details-card"
    >
      {alignment === 'right' ? (
        <>
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            <div>{projectDescription}</div>
            <div>
              <Card className="relative mx-auto w-full max-w-full sm:max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <Image
                  src={`/assets/${projectImage}`}
                  alt="Event cover"
                  height={400}
                  width={400}
                  className="relative z-20 aspect-video w-full object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {projectName}
                  </CardTitle>
                  <CardDescription>{projectSubHeading}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            {projectTechStacks?.map((item, i) => {
              return (
                <div
                  key={i + 1}
                  className="mt-4 text-xs sm:text-sm leading-none font-small border border-[oklch(0.145_0_0)] rounded-[10px] py-1 px-2 sm:px-3 whitespace-nowrap"
                >
                  {item}
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <>
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            <div>
              <Card className="relative mx-auto w-full max-w-full sm:max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <Image
                  src={`/assets/${projectImage}`}
                  alt="Event cover"
                  height={400}
                  width={400}
                  className="relative z-20 aspect-video w-full object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {projectName}
                  </CardTitle>
                  <CardDescription>{projectSubHeading}</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>{projectDescription}</div>
          </div>
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-end">
            {projectTechStacks?.map((item, i) => {
              return (
                <div
                  key={i + 1}
                  className="mt-4 text-xs sm:text-sm leading-none font-small border border-[oklch(0.145_0_0)] rounded-[10px] py-1 px-2 sm:px-3 whitespace-nowrap"
                >
                  {item}
                </div>
              )
            })}
          </div>
        </>
      )}
    </motion.div>
  )
}
