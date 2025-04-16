import { ReactNode } from 'react';
import '../styles/marquee.css';

export default function Marquee({ children, className = '' }: { children: ReactNode, className: string }) {
    return (
        <div className={`marquee overflow-hidden flex gap-4 ${className}`}>
            <div className='shrink-0 flex gap-4 marquee-group'>{children}</div>
            <div aria-hidden className='shrink-0 flex gap-4 marquee-group'>{children}</div>
        </div>
    );
}