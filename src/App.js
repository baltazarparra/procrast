import React from 'react'
import PostList from './Components/postList'
import Nav from './Components/navigation'
import styled from 'styled-components'
import { Reset } from 'styled-reset'

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
      <Reset />
      <Nav />
      <PostList />
    </Wrapper>
  )
}