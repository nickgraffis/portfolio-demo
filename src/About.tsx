import React, { FC, useState } from 'react'
import logo from './logo.svg'

type Props = { }

export const About: FC<Props> = () => {

  return (
    <p className='w-[500px] -mt-16'>
      Hey 👋 ! My name is Nick and I am an instructor at 
      <a href="uci.edu"> UC Irvine</a> 💙💛 College of Continuing Education.
      I am also a full-stack developer working at Model Match where
      I mostly work with AWS (ElasticSearch, AppSync, SQS, SNS), Angular, Typescript, and PySpark. 🤖
      <br />
      <br />
      This is a quick example of a React portfolio. With some blog
      posting functionality. Want to use it? Please do!
    </p>
  )
}