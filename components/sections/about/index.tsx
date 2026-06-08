'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import AboutContentService from '@/services/aboutContent.service'
import DialogBox from '@/components/sections/sub-sections/dialog-box'

export default function About() {
  const { heading, description, organizations } = AboutContentService()
  const [open, setOpen] = useState(false)
  const [orgData, setOrgData] = useState({})
  const getProfessionalSummaryShort = (longProfessionalSummary: string) => {
    if (longProfessionalSummary) {
      if (longProfessionalSummary?.length > 150) {
        return longProfessionalSummary.slice(0, 150)
      } else {
        return longProfessionalSummary
      }
    } else {
      return ''
    }
  }
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="min-h-auto scroll py-8"
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-center flex-wrap">
          <p className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            {heading}
          </p>
          <p className="text-center mt-6">{description}</p>
        </div>
        <hr className="my-6 border-t border-gray-200 dark:border-white/10" />
        <DialogBox open={open} setOpen={setOpen} orgData={orgData} />
        <div className="flex justify-center flex-wrap gap-4 sm:gap-6 md:gap-8">
          {organizations?.map((org, i) => {
            return (
              <Card
                key={i + 1}
                className="relative bg-white shadow-lg border border-gray-100
                 shadow-[0_20px_60px_rgba(59,130,246,0.25)]
                 hover:shadow-xl transition-all duration-300 w-full sm:w-auto sm:max-w-sm"
              >
                {org?.isCurrent && (
                  <div className="absolute top-1 right-3 text-sm bg-[oklch(0.145_0_0)] text-white border border-[oklch(0.145_0_0)] rounded-[10px] px-3">
                    {' '}
                    Current
                  </div>
                )}
                <CardHeader className="flex flex-row items-center gap-4 mt-3">
                  {/* Icon / Banner */}
                  <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={`/assets/${org?.image}`}
                      alt="Company Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      {org?.organizationName}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {`${org?.startDate} - ${org?.endDate ? org?.endDate : 'Present'}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {`${org?.location}`}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Description */}
                  {getProfessionalSummaryShort(org?.professionalSummary)
                    .length > 0 && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {getProfessionalSummaryShort(org?.professionalSummary)}
                      <span className="font-semibold">
                        .To learn more click on the button below.
                      </span>
                    </p>
                  )}

                  {/* Button */}
                  <Button
                    className="w-full cursor-pointer"
                    onClick={() => {
                      setOpen(true)
                      setOrgData(org)
                    }}
                  >
                    Show More Details
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
