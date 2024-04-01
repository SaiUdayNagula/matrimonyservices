import React from 'react'

const CommonLayout = ({ children }) => {
    return (
        <main className=' mx-auto'>
            {children}
        </main>
    )
}

export default CommonLayout