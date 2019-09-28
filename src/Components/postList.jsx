import React, { useContext } from 'react'
import { PostsContext } from '../Stores/Store'
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

  b {
      font-weight: bold;
  }
`

const PostList = () => {
    const [post] = useContext(PostsContext)
    return (
      <>
        <List>
          <Reset />
          {post.map(post => <ListItem key={Math.random()}>
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
      </>
    )
}

export default PostList