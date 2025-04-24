"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CarouselSize({ gallery }: { gallery: string[] }) {
  const itemBasis = gallery.length >= 3 ? "33.33%" : `${100 / gallery.length}%`;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full mb-8 space-y-4" dir="ltr">
        <CarouselContent>
          {gallery.map((src, index) => (
            <CarouselItem
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                gallery.length >= 3
                  ? `md:basis-1/3`
                  : `md:basis-[calc(${itemBasis})]`
              }`}
            >
              <div className="p-1  md:h-[250px] lg:h-[300px]">
                <Image
                  src={src}
                  width={1200}
                  height={600}
                  alt={`Slide ${index + 1}`}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" hidden={current <= 1} />
        <CarouselNext className="right-2" hidden={current >= count} />
      </Carousel>
    </>
  );
}

{
  /* <div className="mb-8 space-y-4">
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {service.gallery?.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${service.name} - صورة ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div> */
}
