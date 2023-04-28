import React from 'react'
import Head from 'next/head'

import Home from '../components/templates/Home/Home'

const index = () => {

  return (
    <>
      <Head>
        <title>Lusitano Maritime INC</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=2"
        />
        <meta
          name="title"
          content="Lusitano Maritime INC"
        />
        <meta
          name="description"
          content="lusitano maritime INC, lusitano maritime inc, lusitano maritime"
        />
      </Head>
      <Home />
    </>
  )
}

export default index
