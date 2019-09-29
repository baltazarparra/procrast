import React from 'react'
import PostList from './Components/postList'
import Nav from './Components/navigation'
import styled from 'styled-components'
import { Reset } from 'styled-reset'
import { Lines } from 'react-preloaders'

const Wrapper = styled.div`
  overflow-y: hidden;
  height: 100vh;

  @media (min-width: 768px) {
    display: flex;
  }
`

export default function App() {
  return (
    <Wrapper>
      <Lines color="#ccc" background="#333"/>
      <Reset />
      <Nav />
      <PostList />
    </Wrapper>
  )
}