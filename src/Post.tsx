import React, { FC, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import Markdown from 'markdown-to-jsx';

type Props = { }

export const Post: FC<Props> = () => {
  let { post } = useParams<{ post: string }>();
  const [postHTML, setPostHTML] = useState('');
  // On first render, get the post from the posts directory
  if (postHTML === '') {
    fetch(`/posts/${post}`)
      .then(res => res.text())
      .then(text => setPostHTML(text));
  }

  return (
    <div className="w-screen overflow-hidden h-screen bg-slate-800 text-slate-200 p-8">
      <Navbar />
      <div className="overflow-scroll prose prose-invert max-w-3xl mx-auto">
        {
          postHTML === '' ?
            <div className="text-center">
              <p className="text-3xl font-semibold">Loading...</p>
            </div>
            :
            <Markdown>{postHTML}</Markdown>
        }
      </div>
    </div>
  )
}