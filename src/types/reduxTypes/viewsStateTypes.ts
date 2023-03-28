/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalName } from '@allTypes/modals'

export interface ViewsProps {
  redirection: RedirectionProps
  menu: MenuProps
  // Temporary solution
  modals: IOpenedModal<any>[]
  toastNotificationPopUp: IOpenedAlert<any>
}

export interface RedirectionProps {
  path: string
  params?: string
  apply: boolean
}

export interface MenuProps {
  openItem: string[]
  drawerOpen: boolean
}

export interface IOpenedModal<P> {
  name: ModalName
  props: P
}

export interface IOpenedAlert<P> {
  open: boolean
  props: P
}
