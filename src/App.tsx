import React, { FC, useState } from 'react'
import { About } from './About'
import logo from './logo.svg'
import { Navbar } from './Navbar'

type Props = { }

export const App: FC<Props> = () => {

  return (
    <div className="max-w-3xl mx-auto">
      <Navbar />
      <About />
      <div className="py-4">
        <ul>
          <li>React</li>
          <li>TypeScript</li>
        </ul>
      </div>
    </div>
  )
}