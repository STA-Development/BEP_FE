import React from 'react'

const Loading = () => (
  <div className="flex w-full justify-center">
    <svg
      aria-hidden="true"
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin fill-blue-600 dark:text-gray-600"
    >
      <path
        d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM15 50C15 69.33 30.67 85 50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50Z"
        fill="white"
      />
      <path
        d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM15 50C15 69.33 30.67 85 50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50Z"
        fill="url(#paint0_angular_559_3529)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_559_3529"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(80 50) rotate(100) scale(100)"
        >
          <stop stopColor="#326789" />
          <stop
            offset="1"
            stopColor="#326789"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>
    </svg>
  </div>
)

export default Loading
