import React, { FC, useState } from 'react'
import logo from './logo.svg'

type Props = { }

export const About: FC<Props> = () => {

  return (
    <p>Hey, my name is Nick Graffis and I love to play around
      on the computer! I'm a software developer, and I'm currently
      working on a project called <a href=''>Portfolio</a>.
      I'm also a student at the University of Waterloo, and I'm
      looking for a full-time position in the future.

    </p>
  )
}