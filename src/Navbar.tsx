import React, { FC, useState } from 'react'
import logo from './logo.svg'

type Props = { }

export const Navbar: FC<Props> = () => {

  return (
    <div className='py-4 flex space-x-4'>
      <p>Nick Graffis</p>
      <a href='github.com'>Github</a>
      <a href='linkedin.com'>LinkedIn</a>
    </div>
  )
}