import React, { useContext } from 'react'
import { RoContext } from './Store'

export default function App() {
  const [roPost] = useContext(RoContext)
  return (
    <>
      <ul>
        {roPost.map(post => <li key={post.id}>
          <a href={post.url}>{post.title}</a>
          <span>{post.author}</span>
          <i>Score: {post.score}</i>
          <a href={post.comment_link}>
            <b>{post.comments}</b> comments
          </a>
        </li>)}
      </ul>
    </>
  )
}