import { useEffect } from 'react'
import { ControllerFieldState } from 'react-hook-form'

interface FormErrorScroll {
  scrollError?: boolean
  fieldError?: string | null
  fieldState: ControllerFieldState
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const ScrollError = ({ scrollError, fieldError, ref, fieldState }: FormErrorScroll) => {
  useEffect(() => {
    if (scrollError && fieldError && ref.current) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }
  }, [fieldState, fieldError, scrollError, ref])
}

export default ScrollError
