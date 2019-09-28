import React, { useContext } from 'react'
import { PostsContext } from '../Stores/Store'
import styled from 'styled-components'

const Nav = styled.nav`
    background: #eee;
    padding: 2em;

    h2 {
        font-family: sans-serif;
        font-size: 2em;
    }

    li {
        font-family: sans-serif;
        margin: 1em;
        color: #666;
    }
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
            <h2>Procast</h2>
            <ul>
                <li onClick={() => handleList('hn')}>Hacker News</li>
                <li onClick={() => handleList('reddit')}>Reddit</li>
                <li onClick={() => handleList('ph')}>Product Hunt</li>
                <li onClick={() => handleList('slashdot')}>Slashdot</li>
                <li onClick={() => handleList('dn')}>Designer News</li>
                <li onClick={() => handleList('github')}>Github Trending</li>
                <li onClick={() => handleList('medium')}>Medium</li>
                <li onClick={() => handleList('lifehacker')}>Lifehacker</li>
            </ul>
        </Nav>
    )
}

export default Navigation