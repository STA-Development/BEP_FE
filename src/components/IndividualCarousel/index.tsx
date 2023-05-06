import React, { useRef, useState } from 'react'

export interface Images {
  id: number
  src: string
}
interface CarouselProps {
  images: Images[]
}

export const IndividualCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imagesRef = useRef<HTMLDivElement>(null)

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(images.length - 1)
    }
  }

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div
        className="relative h-96 overflow-hidden rounded-lg"
        ref={imagesRef}
      >
        {images.map((image, index) => (
          <div
            className={`flex duration-700 ease-in-out ${
              index === currentIndex ? 'active' : 'hidden'
            }`}
            data-carousel-item
            key={image.id}
          >
            <img
              src={image.src}
              className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {images.map((image, index) => (
          <button
            type="button"
            key={image.id}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : ''}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <button
        type="button"
        className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        <span className="sm:w-10 sm:h-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            aria-hidden="true"
            className="sm:w-6 sm:h-6 h-5 w-5 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="z- 30 group absolute right-0  top-0 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        <span className="sm:w-10 sm:h-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            aria-hidden="true"
            className="sm:w-6 sm:h-6 h-5 w-5 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}
