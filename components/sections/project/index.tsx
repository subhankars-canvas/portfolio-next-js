'use client'

import { motion } from 'framer-motion'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FlaskConical, Code, Cpu } from 'lucide-react'
import useCounter from '@/hooks/useCounter'
import ProjectDetailsCard from '@/components/sections/sub-sections/project-details-card'
import ProjectContentService from '@/services/projectsContent.service'

export default function Project() {
  const { heading, description, projectInsightsWidgets, starProjectsData } =
    ProjectContentService()
  const convertIconsToComponent = (icon: string) => {
    if (icon === 'FlaskConical') {
      return <FlaskConical />
    } else if (icon === 'Code') {
      return <Code />
    } else {
      return <Cpu />
    }
  }
  console.log(starProjectsData)
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
            {heading}
          </p>
          <p className="text-center mt-6">{description}</p>
        </div>
        <hr className="my-6 border-t border-foreground dark:border-foreground" />
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
          {projectInsightsWidgets?.map((widget, i) => {
            return (
              <Card
                key={i + 1}
                className="w-full sm:w-auto sm:max-w-sm border bg-black text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-center flex-row gap-4">
                    {convertIconsToComponent(widget?.icon)}
                  </div>
                  <CardTitle className="text-2xl font-bold text-center mt-2">
                    <motion.h1
                      onViewportEnter={() => useCounter(widget?.count)?.start()}
                      onViewportLeave={() => useCounter(widget?.count)?.start()}
                      viewport={{ amount: 0.5 }}
                      className="text-4xl font-bold"
                    >
                      <motion.span>
                        {useCounter(widget?.count)?.rounded}
                      </motion.span>
                      <span>+</span>
                    </motion.h1>
                  </CardTitle>
                  <hr className="my-2 border-t border-gray-200 dark:border-white/10" />
                </CardHeader>

                <CardContent>
                  <p className="text-center text-sm text-gray-300">
                    {widget?.message}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        {starProjectsData?.map((project, i) => {
          return (
            <div className="grid mt-4 sm:mt-6 md:mt-8" key={i + 1}>
              <ProjectDetailsCard
                alignment={project?.alignment}
                projectImage={project.image}
                projectName={project?.name}
                projectSubHeading={project.subHeading}
                projectDescription={project?.description}
                projectTechStacks={project?.techstacks}
              />
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
