import { useEffect } from 'react'
import { ModalName } from '@allTypes/modals'
import { dispatch, useAppSelector } from '@redux/hooks'
import { viewsMiddleware, viewsSelector } from '@redux/slices/views'

const ErrorMessagePopup = () => {
  const error = useAppSelector(viewsSelector.error)

  useEffect(() => {
    if (error) {
      dispatch(
        viewsMiddleware.openModal({
          name: ModalName.getErrorMessage,
          props: {
            error,
          },
        })
      )
    }
  }, [error])

  return null
}

export default ErrorMessagePopup
