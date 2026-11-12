import Link from 'next/link'
import { ReactNode } from 'react'

export default function Links({ href, className = '', children, onClick }: { href: string, className?: string, children: ReactNode, onClick?: React.MouseEventHandler<HTMLAnchorElement> }) {
    return (
        <Link className=' cursor-pointer' href={href} onClick={onClick}>{children}</Link>
    )
}
