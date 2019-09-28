import React, { useContext } from 'react'
import { RoContext } from './Store'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

const List = styled.ul`
  padding: 1em;
  background: #f4f4f4;
`

const ListItem = styled.li`
  margin: 1em;
`

const Link = styled.a`
  display: block;
  font-family: sans-serif;
  text-decoration: none;
  color: #333;
`

const Sub = styled.p`
  display: inline-block;
  font-family: sans-serif;
  font-size: .8em;
  color: #666;
  padding-right: .4em;

  a {
    color: #666;
  }
`

export default function App() {
  const [roPost] = useContext(RoContext)
  return (
    <>
      <List>
        <Reset />
        {roPost.map(post => <ListItem key={post.id}>
          <Link href={post.url}>{post.title}</Link>
          { post.author &&
            <Sub>{post.author}</Sub>
          }
          { post.score && <Sub>Score: {post.score}</Sub> }
          { post.comments > 0 && 
            <Sub>
              <a href={post.comment_link}>
                <b>{post.comments}</b> comments
              </a>
            </Sub>
          }
        </ListItem>)}
      </List>
    </>
  )
}