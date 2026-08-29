"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const testimonials = [
  { src: "/images/pv/testimonials/1.webp", alt: "Depoimento elogiando o dossiê de Engenharia Social pelas dicas e insights para atuação em campo" },
  { src: "/images/pv/testimonials/7.webp", alt: "Depoimento destacando a profundidade técnica e o olhar prático dos dossiês" },
  { src: "/images/pv/testimonials/5.webp", alt: "Depoimento afirmando que o material vale a pena e abre novos insights" },
  { src: "/images/pv/testimonials/4.webp", alt: "Depoimento de comprador recorrente elogiando profundidade e fácil compreensão" },
  { src: "/images/pv/testimonials/2.webp", alt: "Depoimento sobre aplicar observação e percepção na vida e no trabalho" },
  { src: "/images/pv/testimonials/3.webp", alt: "Depoimento elogiando a escrita, a leitura e as aplicações além da área técnica" },
  { src: "/images/pv/testimonials/6.webp", alt: "Depoimento afirmando que o acervo vale cada centavo e serve para consulta contínua" },
]

export function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateCurrent = useCallback((carouselApi: NonNullable<CarouselApi>) => {
    setCurrent(carouselApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return

    updateCurrent(api)
    api.on("select", updateCurrent)
    api.on("reInit", updateCurrent)

    return () => {
      api.off("select", updateCurrent)
      api.off("reInit", updateCurrent)
    }
  }, [api, updateCurrent])

  useEffect(() => {
    if (!api || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const timer = window.setInterval(() => api.scrollNext(), 5000)
    return () => window.clearInterval(timer)
  }, [api, paused])

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "center", loop: true }}
      className="mx-auto w-full max-w-6xl"
      aria-label="Depoimentos de leitores do Acervo Tático"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <CarouselContent className="-ml-3 md:-ml-5">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={testimonial.src} className="basis-[86%] pl-3 sm:basis-[62%] md:basis-[44%] md:pl-5 lg:basis-[34%]">
            <figure className="relative overflow-hidden border border-humint-bone/15 bg-humint-paper shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
              <div className="relative aspect-[9/16] w-full">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  fill
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 44vw, 34vw"
                  className="object-cover"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
              <figcaption className="sr-only">{testimonial.alt}</figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          className="inline-flex size-11 items-center justify-center border border-humint-bone/20 text-humint-bone transition-colors hover:border-humint-amber hover:text-humint-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-humint-amber"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft aria-hidden />
        </button>

        <div className="flex items-center gap-2" aria-label={`Depoimento ${current + 1} de ${testimonials.length}`}>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.src}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-humint-amber",
                current === index ? "w-8 bg-humint-amber" : "w-2 bg-humint-bone/25 hover:bg-humint-bone/50",
              )}
              aria-label={`Ir para depoimento ${index + 1}`}
              aria-current={current === index ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => api?.scrollNext()}
          className="inline-flex size-11 items-center justify-center border border-humint-bone/20 text-humint-bone transition-colors hover:border-humint-amber hover:text-humint-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-humint-amber"
          aria-label="Próximo depoimento"
        >
          <ChevronRight aria-hidden />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Depoimento {current + 1} de {testimonials.length}
      </p>
    </Carousel>
  )
}
