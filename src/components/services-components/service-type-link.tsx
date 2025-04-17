import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface ServiceTypeProps {
  id: number
  title: string
  icon: ReactNode
  link: string
}

interface ServiceTypeLinkProps {
  serviceType: ServiceTypeProps
}

export function ServiceTypeLink({ serviceType }: ServiceTypeLinkProps) {
  return (
    <Link href={serviceType.link} className="block">
      <Card className="h-full hover:shadow-md transition-shadow duration-200 hover:border-primary">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <div className="mb-3 text-primary">{serviceType.icon}</div>
          <h3 className="font-medium text-center">{serviceType.title}</h3>
        </CardContent>
      </Card>
    </Link>
  )
}
