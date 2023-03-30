import React from 'react'

export interface IContainerProps {
  className?: string
  children: React.ReactNode | string
}

export const Container = ({ className, children }: IContainerProps) => (
  <div className={`container ${className}`}>{children}</div>
)
