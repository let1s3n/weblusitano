import React, { useState, useEffect } from 'react'

export default function Layout({ children }) {

  return (
    <>
      <main className="main-container">{children}</main>
    </>
  )
}