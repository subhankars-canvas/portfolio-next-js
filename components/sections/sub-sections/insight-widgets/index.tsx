import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FlaskConical, Code, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'
import useCounter from '@/hooks/useCounter'

type WidgetProp = {
  widget: {
    count: number
    message: string
    icon: string
  }
}
export default function InsightWidgets({ widget }: WidgetProp) {
  const { count, message, icon } = widget
  const { rounded, start } = useCounter(count)
  const convertIconsToComponent = (icon: string) => {
    if (icon === 'FlaskConical') {
      return <FlaskConical />
    } else if (icon === 'Code') {
      return <Code />
    } else {
      return <Cpu />
    }
  }
  return (
    <>
      <CardHeader>
        <div className="flex justify-center flex-row gap-4">
          {convertIconsToComponent(icon)}
        </div>
        <CardTitle className="text-2xl font-bold text-center mt-2">
          <motion.h1
            onViewportEnter={() => start()}
            onViewportLeave={() => start()}
            viewport={{ amount: 0.5 }}
            className="text-4xl font-bold"
          >
            <motion.span>{rounded}</motion.span>
            <span>+</span>
          </motion.h1>
        </CardTitle>
        <hr className="my-2 border-t border-gray-200 dark:border-white/10" />
      </CardHeader>

      <CardContent>
        <p className="text-center text-sm text-gray-300">{message}</p>
      </CardContent>
    </>
  )
}
