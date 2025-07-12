"use client";

import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  image: string;
  imageAlt: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Axelson found us the perfect lot before it ever hit the market. The process was fast and easy.",
    name: "Maria G.",
    location: "Harris County, TX",
    image: "/images/testimonial-5.jpg",
    imageAlt: "Maria G. - Satisfied land buyer from Harris County"
  },
  {
    quote: "We told Axelson our criteria and he brought us several off-market options. We picked the one that fit our needs best.",
    name: "James R.",
    location: "Brazoria County, TX",
    image: "/images/testimonial-6.jpg",
    imageAlt: "James R. - Happy land buyer from Brazoria County"
  },
  {
    quote: "No fluff, just real land deals. Highly recommend if you want first shot at Texas properties.",
    name: "Ayesha P.",
    location: "Bell County, TX",
    image: "/images/testimonial-7.jpg",
    imageAlt: "Ayesha P. - Pleased buyer from Bell County"
  },
  {
    quote: "The process was straightforward and fast. Axelson made sure we got exactly what we were looking for.",
    name: "John D.",
    location: "Williamson County, TX",
    image: "/images/testimonial-8.jpg",
    imageAlt: "John D. - Happy buyer from Williamson County"
  },
  {
    quote: "I was skeptical at first, but Axelson delivered exclusive deals I couldn't find anywhere else.",
    name: "Emily R.",
    location: "Travis County, TX",
    image: "/images/testimonial-9.jpg",
    imageAlt: "Emily R. - Satisfied client from Travis County"
  },
  {
    quote: "We got access to land before it was listed. Axelson is professional and knows the market.",
    name: "Michael B.",
    location: "Montgomery County, TX",
    image: "/images/testimonial-10.jpg",
    imageAlt: "Michael B. - Grateful buyer from Montgomery County"
  },
  {
    quote: "Buying land was a breeze with Axelson. He is trustworthy and efficient.",
    name: "Sarah L.",
    location: "Fort Bend County, TX",
    image: "/images/testimonial-11.jpg",
    imageAlt: "Sarah L. - Impressed client from Fort Bend County"
  },
  {
    quote: "I told Axelson my budget and location, and he matched me with the right property. Super easy.",
    name: "David K.",
    location: "Denton County, TX",
    image: "/images/testimonial-5.jpg",
    imageAlt: "David K. - Relieved buyer from Denton County"
  },
  {
    quote: "Fast, fair, and friendly. I couldn't have asked for a better experience buying my property.",
    name: "Jessica M.",
    location: "Collin County, TX",
    image: "/images/testimonial-6.jpg",
    imageAlt: "Jessica M. - Happy buyer from Collin County"
  },
  {
    quote: "From the first call to closing, the process was seamless. I'd recommend Axelson to any land buyer.",
    name: "Chris T.",
    location: "Tarrant County, TX",
    image: "/images/testimonial-7.jpg",
    imageAlt: "Chris T. - Satisfied buyer from Tarrant County"
  },
  {
    quote: "He made a complicated search much easier. I'm grateful for Axelson's help and professionalism.",
    name: "Amanda S.",
    location: "Dallas County, TX",
    image: "/images/testimonial-8.jpg",
    imageAlt: "Amanda S. - Thankful buyer from Dallas County"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Success Stories
          </h2>
        </div>
        
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial, index) => (
                <div key={`${testimonial.name}-${index}`} className="embla__slide">
                  <div className="bg-card p-8 rounded-lg shadow-lg mx-2 h-full flex flex-col">
                    {/* Profile Image */}
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.imageAlt}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full rounded-full"
                          onError={(e) => {
                            // Hide the image on error and show fallback
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        {/* Fallback avatar with initials */}
                        <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-primary to-primary/80 text-white font-bold text-xl">
                          {testimonial.name.split(' ').map(n => n.charAt(0)).join('')}
                        </div>
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex text-primary mb-4">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-foreground italic flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors duration-200 shadow-lg" 
              onClick={scrollPrev} 
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors duration-200 shadow-lg" 
              onClick={scrollNext} 
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
