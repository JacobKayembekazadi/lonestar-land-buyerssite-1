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
    quote: "LoneStar's offer beat every other buyer and closed in ten days—exactly what I needed.",
    name: "Maria G.",
    location: "Harris County, TX",
    image: "/images/testimonial-5.jpg",
    imageAlt: "Maria G. - Satisfied landowner from Harris County"
  },
  {
    quote: "They handled the paperwork, paid my back taxes, and wired the cash the same day we signed.",
    name: "James R.",
    location: "Brazoria County, TX",
    image: "/images/testimonial-6.jpg",
    imageAlt: "James R. - Happy land seller from Brazoria County"
  },
  {
    quote: "No realtor fees and no hassle. Highly recommend if you've got vacant land to sell.",
    name: "Ayesha P.",
    location: "Bell County, TX",
    image: "/images/testimonial-7.jpg",
    imageAlt: "Ayesha P. - Pleased customer from Bell County"
  },
  {
    quote: "The process was straightforward and fast. I got a fair price for my land without any stress.",
    name: "John D.",
    location: "Williamson County, TX",
    image: "/images/testimonial-8.jpg",
    imageAlt: "John D. - Happy customer from Williamson County"
  },
  {
    quote: "I was skeptical at first, but LoneStar Land Buyers exceeded my expectations. Highly recommended.",
    name: "Emily R.",
    location: "Travis County, TX",
    image: "/images/testimonial-9.jpg",
    imageAlt: "Emily R. - Satisfied client from Travis County"
  },
  {
    quote: "They bought my land as-is, which was a huge relief. The team was professional and courteous.",
    name: "Michael B.",
    location: "Montgomery County, TX",
    image: "/images/testimonial-10.jpg",
    imageAlt: "Michael B. - Grateful seller from Montgomery County"
  },
  {
    quote: "Selling my land was a breeze with LoneStar. They are trustworthy and efficient.",
    name: "Sarah L.",
    location: "Fort Bend County, TX",
    image: "/images/testimonial-11.jpg",
    imageAlt: "Sarah L. - Impressed client from Fort Bend County"
  },
  {
    quote: "I inherited land and had no idea what to do. LoneStar gave me a fair cash offer and handled everything.",
    name: "David K.",
    location: "Denton County, TX",
    image: "/images/testimonial-5.jpg",
    imageAlt: "David K. - Relieved landowner from Denton County"
  },
  {
    quote: "Fast, fair, and friendly. I couldn't have asked for a better experience selling my property.",
    name: "Jessica M.",
    location: "Collin County, TX",
    image: "/images/testimonial-6.jpg",
    imageAlt: "Jessica M. - Happy seller from Collin County"
  },
  {
    quote: "From the first call to closing, the process was seamless. I'd recommend them to anyone.",
    name: "Chris T.",
    location: "Tarrant County, TX",
    image: "/images/testimonial-7.jpg",
    imageAlt: "Chris T. - Satisfied customer from Tarrant County"
  },
  {
    quote: "They made a difficult situation much easier. I'm grateful for their help and professionalism.",
    name: "Amanda S.",
    location: "Dallas County, TX",
    image: "/images/testimonial-8.jpg",
    imageAlt: "Amanda S. - Thankful client from Dallas County"
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
