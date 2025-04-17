import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

interface ServiceProps {
  id: number
  title: string
  category: string
  description: string
  rating: number
  price: string
  image: string
}

interface ServiceCardProps {
  service: ServiceProps
}

export function ServiceCard({ service }: ServiceCardProps) {
  // Function to get the category badge color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "venue":
        return "bg-green-500"
      case "artist":
        return "bg-purple-500"
      case "photographer":
        return "bg-amber-500"
      default:
        return "bg-blue-500"
    }
  }

  // Function to get the category display name
  const getCategoryName = (category: string) => {
    switch (category) {
      case "venue":
        return "Venue"
      case "artist":
        return "Artist"
      case "photographer":
        return "Photographer"
      default:
        return category
    }
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-200 overflow-hidden pt-0">
      <div className="relative h-48 w-full">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover rounded-t-lg"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${getCategoryColor(service.category)} text-white border-none`}>
            {getCategoryName(service.category)}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{service.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{service.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <p className="text-muted-foreground text-sm">{service.description}</p>
        <p className="font-bold text-lg mt-2">{service.price}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          باقي التفاصيل
        </Button>
      </CardFooter>
    </Card>
  )
}
