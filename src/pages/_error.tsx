import React from 'react'
import { NextPage } from 'next'

interface Props {
  statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }: Props) => (
  <div className="container">
    <p>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </p>
  </div>
)

Error.getInitialProps = ({ res, err }) => {
  let statusCode

  if (res) {
    statusCode = res.statusCode
  } else {
    statusCode = err ? err.statusCode : 404
  }

  return { statusCode }
}

export default Error
