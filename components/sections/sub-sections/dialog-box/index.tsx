import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function DialogBox({
  open,
  setOpen,
  orgData,
}: {
  open: boolean
  setOpen: (open: boolean) => void
  orgData: any
}) {
  const longProfessionalSummaryArray = orgData?.professionalSummary?.split('.')
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {orgData?.organizationName}
          </DialogTitle>
          <DialogDescription>
            {orgData?.jobRole} <span>-({orgData?.employmentType})</span>
          </DialogDescription>
          <hr />
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          <p className="text-md font-bold mb-4">
            What I do/did as {orgData?.jobRole}@{orgData?.organizationName}?
          </p>
          <ul className="mb-4 leading-normal list-disc list-inside pl-4">
            {longProfessionalSummaryArray?.map((item: string, i: number) => {
              return <li key={i + 1}>{item + '.'}</li>
            })}
          </ul>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
