'use client'

import { motion } from 'framer-motion'

import { Card } from '@/components/ui/card'

import ProjectDetailsCard from '@/components/sections/sub-sections/project-details-card'
import ProjectContentService from '@/services/projectsContent.service'
import InsightWidgets from '@/components/sections/sub-sections/insight-widgets'

export default function Project() {
  const { heading, description, projectInsightsWidgets, starProjectsData } =
    ProjectContentService()
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
                <InsightWidgets widget={widget} />
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
