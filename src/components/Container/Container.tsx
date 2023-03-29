import React, { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="container px-30"> {children} </div>
)
