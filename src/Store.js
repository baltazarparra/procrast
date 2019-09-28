import React, { useState, useEffect } from 'react'

export const RoContext = React.createContext([])

export default function Store({children}) {
    const [roPost, setRoPost] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://www.reader.one/api/all/hn,reddit,ph,slashdot,dn,github,medium,lifehacker?limit=20')
            const data = await response.json()
            console.log(data)

            setRoPost(data)
        }

        fetchData()
    }, [])

    return (
        <RoContext.Provider value={[roPost, setRoPost]}>
            {children}
        </RoContext.Provider>
    )
}