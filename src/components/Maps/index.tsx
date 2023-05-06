import React from 'react'

interface ImapURL {
  mapURL: string
  height: number
}
export const Maps = ({ mapURL, height }: ImapURL) => (
  <iframe
    title="map"
    src={mapURL}
    width="100%"
    height={height}
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
)
