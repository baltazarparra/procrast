import React, { useContext } from 'react'
import { PostsContext } from '../Stores/Store'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

const List = styled.ul`
  padding: 1em;
  background: #333;
  overflow: scroll;
  height: calc(100vh - 76px);

  @media (min-width: 768px) {
    height: 100vh;
    flex: 6;
  }
`

const ListItem = styled.li`
  padding: 1em;
  &:hover {
    background-color: #444;
  }
`

const Link = styled.a`
  display: block;
  font-family: sans-serif;
  text-decoration: none;
  color: #bbb;
`

const Sub = styled.p`
  display: inline-block;
  font-family: sans-serif;
  font-size: .8em;
  color: #888;
  padding-right: .4em;

  a {
    color: #ccc;
  }

  b {
      font-weight: bold;
  }
`

const PostList = () => {
  const [post] = useContext(PostsContext)

  return (
    <List>
      <Reset />
      {post.map((post, index) => <ListItem key={index}>
        <Link href={post.url}>{post.title}</Link>
        { post.author &&
          <Sub>Author: {post.author}</Sub>
        }
        { post.score && <Sub>Score: {post.score}</Sub> }
        { post.comments > 0 &&
          <Sub>
            <a href={post.comment_link}>
              <span>{post.comments}</span> comments
            </a>
          </Sub>
        }
        {
            post.one_sources[0] &&
            <Sub>
                <b>source: {post.one_sources[0]}</b>
            </Sub>
        }
      </ListItem>)}
    </List>
  )
}

export default PostList
