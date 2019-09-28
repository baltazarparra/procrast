import React, { useContext } from 'react'
import { PostsContext } from '../Stores/Store'
import styled from 'styled-components'

const Nav = styled.nav`
    flex: 1;
    background: #eee;
    padding: 2em;
`

const ListItem = styled.li`
    font-family: sans-serif;
    margin: .4em;
    padding: .6em;
    color: #666;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 3px 4px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04);
        text-shadow: 0 3px 4px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.18);
    }
`

const Title = styled.h2`
    font-family: sans-serif;
    font-size: 2em;
`

const Navigation = () => {
    const [,setPost] = useContext(PostsContext)

    async function handleList(source) {
        const response = await fetch(`https://www.reader.one/api/all/${source}?limit=25`)
        const data = await response.json()

        setPost(data)
    }

    return (
        <Nav>
            <Title>Procast</Title>
            <ul>
                <ListItem onClick={() => handleList('hn')}>Hacker News</ListItem>
                <ListItem onClick={() => handleList('reddit')}>Reddit</ListItem>
                <ListItem onClick={() => handleList('ph')}>Product Hunt</ListItem>
                <ListItem onClick={() => handleList('slashdot')}>Slashdot</ListItem>
                <ListItem onClick={() => handleList('dn')}>Designer News</ListItem>
                <ListItem onClick={() => handleList('github')}>Github Trending</ListItem>
                <ListItem onClick={() => handleList('medium')}>Medium</ListItem>
                <ListItem onClick={() => handleList('lifehacker')}>Lifehacker</ListItem>
            </ul>
        </Nav>
    )
}

export default Navigation