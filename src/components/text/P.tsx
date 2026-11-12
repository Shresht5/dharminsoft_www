import React, { ReactNode } from 'react'

export default function P({ colour = "", size = "", children, className = '' }: { colour?: string, size?: string, children: ReactNode, className?: string }) {
    return (
        <p
            style={{ color: `var(${colour})`, fontSize: size }}
            className={className}
        >
            {children}
        </p>
    )
}
