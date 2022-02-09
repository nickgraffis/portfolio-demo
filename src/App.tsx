import React, { FC, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { About } from './About'
import logo from './logo.svg'
import { Navbar } from './Navbar'
import { Post } from './Post';

type Props = { }

export const RouteSwitch: FC<Props> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<App />} />
        <Route path="/:post" element={<Post />} />
      </Switch>
    </BrowserRouter>
  )
}

export const App: FC<Props> = () => {
  const posts = [
    'all-about-react',
  ]

  const unslugify = (post: string) => {
    post.replace(/-/g, ' ');
    return post.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  }

  return (<>
    <div className="w-screen h-screen absolute bg-[url('/bg.svg')] bg-cover flex flex-col">
      <div className="p-8 text-slate-200 w-screen relative z-20 flex-grow">
        <Navbar />
        <About />
      </div>
      <div className="text-slate-800 p-8 space-y-2">
        <p className="text-2xl font-semibold">Blog Posts</p>
        <ul>
          {
          posts
          .map((post, i) => <li className="hover:underline cursor-pointer" key={i}>
            <Link to={`/${post}.md`}>{unslugify(post)}</Link>
          </li>)
          }
        </ul>
      </div>
    </div>
  </>)
}