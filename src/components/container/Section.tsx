import { ReactNode } from 'react'

export default function Section({ colour, children, className = '' }: { colour: string, children: ReactNode, className?: string }) {
    return (
        <div style={{ background: `var(${colour})` }} className={className}>
            {children}
        </div>
    )
}
