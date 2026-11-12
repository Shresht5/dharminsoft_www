import React, { ReactNode } from 'react'

export default function H({ colour = "", size = "16px", weight = "600", children, className = '' }: { colour?: string, size?: string, weight?: string, children: ReactNode, className?: string }) {
    return (
        <h1
            style={{ color: `var(${colour})`, fontSize: size, fontWeight: weight }}
            className={`${className}`}
        >
            {children}
        </h1>
    )
}
