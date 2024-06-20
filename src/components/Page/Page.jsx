import React from 'react'

export const Page = ({ children, style }) => {
    return (
        <div className={`min-h-[70vh] ${style ? style : ""}`}>{children}</div>
    )
}
