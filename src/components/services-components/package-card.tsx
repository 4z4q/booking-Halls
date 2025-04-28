import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Image from "next/image"

interface PackageProps {
  id: number
  title: string
  description: string
  price: string
  features: string[]
  popular: boolean
  image: string
}

interface PackageCardProps {
  package: PackageProps
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <Card className={`h-full flex flex-col pb-6 pt-0 ${pkg.popular ? "border-primary shadow-lg" : ""}`} dir="rtl">
      <div className="relative h-48 w-full">
        <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover rounded-t-lg" />
        {pkg.popular && (
          <div className="absolute top-4 right-4">
            <Badge variant="default" className="bg-primary text-primary-foreground">
            الأكثر شهرة
            </Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{pkg.title}</CardTitle>
        <CardDescription className="text-base">{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-2xl font-bold mb-4">{pkg.price}</p>
        <ul className="space-y-2">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
          اختيار
        </Button>
      </CardFooter>
    </Card>
  )
}
