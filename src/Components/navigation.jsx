import React, { useContext } from 'react'
import { PostsContext } from '../Stores/Store'
import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    line-height: 2;
`
const MenuButton = styled.a`
    font-family: sans-serif;
    font-size: 1.4em;
    text-decoration: none;
    padding-right: 1.4em;
    color: #666;
    
`

const Title = styled.h3`
    font-family: sans-serif;
    font-size: 1.4em;
    padding-left: 1.4em;
    color: #666;
`

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    flex: 1;
    height: 100vh;
    width: 200px;
    line-height: 2;
    text-align: right;
    background: #eee;
    
    &:not(:target) {
        transform: translateX(100%);
        transition: right 1.5s;
    }
    
    &:target {
        transform: translateX(0);
        transform-origin: bottom left;
        transition: right 1s;
    }
`

const ListItem = styled.li`
    font-family: sans-serif;
    margin: 0 .8em;
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

const ListLink = styled.a`
    text-decoration: none;
    color: #666;
`

const Navigation = () => {
    const [,setPost] = useContext(PostsContext)

    async function handleList(source) {
        const response = await fetch(`https://www.reader.one/api/all/${source}?limit=25`)
        const data = await response.json()

        setPost(data)
    }

    return (
        <>
        <Header>
            <Title>Procast</Title>
            <MenuButton href="#nav">☰Menu</MenuButton>
        </Header>
        <Nav id="nav">
            <MenuButton href="/#">☰Close</MenuButton>
            <ul>
                <ListItem onClick={() => handleList('hn')}>
                    <ListLink href="/#">Hacker News</ListLink>
                </ListItem>
                <ListItem onClick={() => handleList('reddit')}>
                    <ListLink href="/#">Reddit</ListLink>
                </ListItem>
                <ListItem onClick={() => handleList('ph')}>
                    <ListLink href="/#">Product Hunt</ListLink>
                </ListItem>
                <ListItem onClick={() => handleList('slashdot')}>
                    <ListLink href="/#">Slashdot</ListLink>
                </ListItem>
                <ListItem onClick={() => handleList('dn')}>
                    <ListLink href="/#">Designer News</ListLink>
                </ListItem>
                <ListItem onClick={() => handleList('github')}>
                    <ListLink href="/#">Github Trending</ListLink>
                </ListItem>
                <ListItem onClick={() => handleList('medium')}>
                    <ListLink href="/#">Medium</ListLink>
                </ListItem>
                <ListItem onClick={() => handleList('lifehacker')}>
                    <ListLink href="/#">Lifehacker</ListLink>
                </ListItem>
            </ul>
        </Nav>
        </>
    )
}

export default Navigation