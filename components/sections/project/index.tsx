'use client'

import { motion } from 'framer-motion'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FlaskConical, Code, Cpu } from 'lucide-react'
import Image from 'next/image'
import useCounter from '@/hooks/useCounter'
import ProjectDetailsCard from '@/components/sections/sub-sections/project-details-card'

export default function Project() {
  const { rounded: roundedProjectCount, start: startProjectCounter } =
    useCounter(90)
  const { rounded: roundedDomainCount, start: startDomainCounter } =
    useCounter(5)
  const { rounded: roundedTechCount, start: startTechCounter } = useCounter(15)
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="min-h-auto scroll py-8"
      id="project"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-center flex-wrap">
          <p className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Project insights
          </p>
          <p className="text-center mt-6">
            Iam a full-stack developer with experience building applications
            end-to-end—from development to deployment using CI/CD pipelines. I
            have worked with technologies like React, TypeScript, Tailwind CSS,
            Adobe Experience Manager on the frontend, and Node.js, NestJS, and
            PHP on the backend. Since 2015, I have been delivering scalable
            solutions and leveraging AI tools to accelerate development and
            automation.
          </p>
        </div>
        <hr className="my-6 border-t border-foreground dark:border-foreground" />
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
          <Card
            className="w-full sm:w-auto sm:max-w-sm border bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                 hover:shadow-xl transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-center flex-row gap-4">
                <FlaskConical />
              </div>
              <CardTitle className="text-2xl font-bold text-center mt-2">
                <motion.h1
                  onViewportEnter={() => startProjectCounter()}
                  onViewportLeave={() => startProjectCounter()}
                  viewport={{ amount: 0.5 }}
                  className="text-4xl font-bold"
                >
                  <motion.span>{roundedProjectCount}</motion.span>
                  <span>+</span>
                </motion.h1>
              </CardTitle>
              <hr className="my-2 border-t border-gray-200 dark:border-white/10" />
            </CardHeader>

            <CardContent>
              <p className="text-center text-sm text-gray-300">
                Projects delivered
              </p>
            </CardContent>
          </Card>
          <Card
            className="w-auto max-w-sm border bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                 hover:shadow-xl transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-center flex-row gap-4">
                <Code />
              </div>
              <CardTitle className="text-2xl font-bold text-center mt-2">
                <motion.h1
                  onViewportEnter={() => startDomainCounter()}
                  onViewportLeave={() => startDomainCounter()}
                  viewport={{ amount: 0.5 }}
                  className="text-4xl font-bold"
                >
                  <motion.span>{roundedDomainCount}</motion.span>
                  <span>+</span>
                </motion.h1>
              </CardTitle>
              <hr className="my-2 border-t border-gray-200 dark:border-white/10" />
            </CardHeader>

            <CardContent>
              <p className="text-center text-sm text-gray-300">
                Sector experience
              </p>
            </CardContent>
          </Card>
          <Card
            className="w-auto max-w-sm border bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                 hover:shadow-xl transition-all duration-300"
          >
            <CardHeader>
              <div className="flex justify-center flex-row gap-4">
                <Cpu />
              </div>
              <CardTitle className="text-2xl font-bold text-center mt-2">
                <motion.h1
                  onViewportEnter={() => startTechCounter()}
                  onViewportLeave={() => startTechCounter()}
                  viewport={{ amount: 0.5 }}
                  className="text-4xl font-bold"
                >
                  <motion.span>{roundedTechCount}</motion.span>
                  <span>+</span>
                </motion.h1>
              </CardTitle>
              <hr className="my-2 border-t border-gray-200 dark:border-white/10" />
            </CardHeader>

            <CardContent>
              <p className="text-center text-sm text-gray-300">
                Technologies used.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid mt-4 sm:mt-6 md:mt-8">
          <ProjectDetailsCard
            alignment="left"
            projectImage="car-rental.png"
            projectName="WhiteLabel"
            projectSubHeading="A practical talk on component APIs, accessibility, and shipping faster."
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum."
            projectTechStacks={[
              'AEM',
              'React js',
              'JavaScript',
              'Jenkins',
              'Jest',
              'Bitbucket',
            ]}
          />
        </div>
        <div className="grid mt-4 sm:mt-6 md:mt-8">
          <ProjectDetailsCard
            alignment={'right'}
            projectImage="banking-project.jpg"
            projectName="HSBC banking & offers"
            projectSubHeading="A practical talk on component APIs, accessibility, and shipping faster."
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum."
            projectTechStacks={[
              'AEM',
              'React js',
              'JavaScript',
              'Jenkins',
              'Jest',
              'Bitbucket',
            ]}
          />
        </div>
        <div className="grid mt-4 sm:mt-6 md:mt-8">
          <ProjectDetailsCard
            alignment={'left'}
            projectImage="retail-project.webp"
            projectName="Operations clock"
            projectSubHeading="A practical talk on component APIs, accessibility, and shipping faster."
            projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum."
            projectTechStacks={[
              'AEM',
              'React js',
              'JavaScript',
              'Jenkins',
              'Jest',
              'Bitbucket',
            ]}
          />
        </div>
      </div>
    </motion.section>
  )
}
