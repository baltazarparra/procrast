import React, { useContext } from 'react'
import { PostsContext } from '../Stores/Store'
import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    line-height: 2;
    border-bottom: solid 1px #333;
    padding-right: 1em;
    background-color: #666;

    @media (min-width: 768px) {
        display: none;
    }
`
const MenuButton = styled.a`
    font-family: sans-serif;
    font-size: 1.4em;
    text-decoration: none;
    padding-right: 0;
    color: #ccc;

    @media (min-width: 768px) {
        display: none;
    }
    
`

const Title = styled.h3`
    font-family: sans-serif;
    font-size: 1.4em;
    padding-left: 1.4em;
    color: #ccc;

    @media (min-width: 768px) {
        font-size: 1.4em;
        font-weight: bold;
        padding-left: .6em;
        line-height: 2;
    }
`

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    flex: 1;
    height: 100vh;
    line-height: 2;
    text-align: right;
    background-color: #666;
    padding: 0 1em 0 4em;
    
    &:not(:target) {
        transform: translateX(100%);
        transition: right 1.5s;
        box-shadow: 0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.24);
    }
    
    &:target {
        transform: translateX(0);
        transform-origin: bottom left;
        transition: right 1s;
    }

    h3 {
        display: none;
    }

    @media (min-width: 768px) {
        position: inherit;
        flex: 1;
        text-align: left;
        padding: 1.4em;
        margin: 0;
        line-height: 1;

        h3 {
            display: block;
        }

        &:not(:target) {
            transform: translateX(0);
        }
        
        &:target {
            transform: translateX(0);
        }
    }
`

const ListItem = styled.li`
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 3px 4px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04);
        text-shadow: 0 3px 4px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.18);
    }

    @media (min-width: 768px) {
        display: block;
        margin: 0;
        padding: .8em;
    }
`

const ListLink = styled.a`
    text-decoration: none;
    color: #ccc;
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
                <Title onClick={() => handleList('hn,reddit,ph,slashdot,dn,github,medium,lifehacker')}>
                    <span role="img" aria-label="coffe">☕</span> Procrast
                </Title>
                <MenuButton href="#nav">☰Menu</MenuButton>
            </Header>
            <Nav id="nav">
                <Title>
                    <span role="img" aria-label="coffe">☕</span> Procrast
                </Title>
                <MenuButton href="https://baltazarparra.github.io/procrast/#">☰Close</MenuButton>
                <ul>
                    <ListItem onClick={() => handleList('hn')}>
                        <ListLink href="https://baltazarparra.github.io/procrast/#">Hacker News</ListLink>
                    </ListItem>
                    <ListItem onClick={() => handleList('reddit')}>
                        <ListLink href="https://baltazarparra.github.io/procrast/#">Reddit</ListLink>
                    </ListItem>
                    <ListItem onClick={() => handleList('ph')}>
                        <ListLink href="https://baltazarparra.github.io/procrast/#">Product Hunt</ListLink>
                    </ListItem>
                    <ListItem onClick={() => handleList('slashdot')}>
                        <ListLink href="https://baltazarparra.github.io/procrast/#">Slashdot</ListLink>
                    </ListItem>
                    <ListItem onClick={() => handleList('dn')}>
                        <ListLink href="https://baltazarparra.github.io/procrast/#">Designer News</ListLink>
                    </ListItem>
                    <ListItem onClick={() => handleList('github')}>
                        <ListLink href="https://baltazarparra.github.io/procrast/#">Github Trending</ListLink>
                    </ListItem>
                    <ListItem onClick={() => handleList('medium')}>
                        <ListLink href="https://baltazarparra.github.io/procrast/#">Medium</ListLink>
                    </ListItem>
                    <ListItem onClick={() => handleList('lifehacker')}>
                        <ListLink href="https://baltazarparra.github.io/procrast/#">Lifehacker</ListLink>
                    </ListItem>
                </ul>
            </Nav>
        </>
    )
}

export default Navigation