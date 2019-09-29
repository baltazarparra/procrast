import React, { useState, useEffect } from 'react'

export const PostsContext = React.createContext([])

export default function Store({children}) {
    const [post, setPost] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://www.reader.one/api/all/hn,reddit,ph,slashdot,dn,github,medium,lifehacker?limit=5')
            const data = await response.json()
            
            setPost(data)
        }
        
        fetchData()
    }, [])

    return (
        <PostsContext.Provider value={[post, setPost]}>
            {children}
        </PostsContext.Provider>
    )
}