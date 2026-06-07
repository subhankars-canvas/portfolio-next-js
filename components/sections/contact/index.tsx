'use client'
import { motion } from 'framer-motion'
import { Mail, FileUser, UserRound, Copyright } from 'lucide-react'
import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item'
import Image from 'next/image'
import Link from 'next/link'
import ContactContentService from '@/services/contactContent.service'

export default function Contact() {
  const {
    leftHeading,
    leftSubHeading,
    leftSubHeadingCountryIcon,
    leftDescription,
    RightConnectString,
    RightConnectMediums,
    copyrightSectionHeading,
    effortStacks,
    termsLabel,
    privacyLabel,
  } = ContactContentService()
  const getMediumIcon = (iconName: string) => {
    if (iconName === 'Mail') {
      return <Mail />
    } else if (iconName === 'FileUser') {
      return <FileUser />
    } else {
      return <UserRound />
    }
  }
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="min-h-auto scroll py-8"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex w-full justify-start gap-4 flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              {leftHeading}
            </p>
            <div className="text-sm text-muted-foreground leading-relaxed mt-2">
              {leftSubHeading}
              <Image
                src={`/assets/${leftSubHeadingCountryIcon}`}
                alt="Indian Flag"
                width={16}
                height={16}
                className="inline-block mx-2"
              />
            </div>
            <p className="mt-4">{leftDescription}</p>
          </div>
          <div className="w-full md:w-1/3">
            <p className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              {RightConnectString}
            </p>
            <div className="mt-4">
              {RightConnectMediums?.map((medium, i) => {
                return (
                  <Item key={i + 1}>
                    <ItemMedia variant="icon">
                      {getMediumIcon(medium?.icon)}
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{medium?.message}</ItemTitle>
                    </ItemContent>
                  </Item>
                )
              })}
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-200 dark:border-white/10" />
        <div className="flex gap-4 w-full flex-col md:flex-row">
          <div className="flex flex-1 justify-start text-center md:text-left">
            <Copyright
              className="text-sm text-muted-foreground leading-relaxed mx-[2px] my-[2px]"
              size={15}
            />
            <p className="text-sm text-muted-foreground leading-relaxed mx-2">
              {copyrightSectionHeading}
            </p>
          </div>
          <div className="flex flex-1 justify-center text-center">
            <p
              className="text-sm text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: effortStacks }}
            />
          </div>
          <div className="flex flex-1 justify-end flex-wrap md:flex-nowrap">
            <Link
              href="#tnc"
              className="px-2 mx-2 text-sm text-muted-foreground leading-relaxed"
            >
              {termsLabel}
            </Link>
            <Link
              href="#privacy"
              className="px-2 mx-2 text-sm text-muted-foreground leading-relaxed"
            >
              {privacyLabel}
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
