import { useEffect } from 'react'
import { ControllerFieldState } from 'react-hook-form'

interface IUseFormErrorScroll {
  scrollToError?: boolean
  fieldState: ControllerFieldState
  fieldError?: string | null
  ref: React.MutableRefObject<HTMLDivElement | null>
}

export const useFormErrorScroll = ({
  scrollToError,
  fieldError,
  ref,
  fieldState,
}: IUseFormErrorScroll) => {
  useEffect(() => {
    if (scrollToError && fieldError && ref.current) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }
  }, [fieldState, fieldError, scrollToError, ref])
}

export default useFormErrorScroll
