import { ReactNode } from 'react';
import '../styles/marquee.scss';

export default function Marquee({ children, className = '' }: { children: ReactNode, className: string }) {
    return (
        <div className={`marquee flex gap-4 ${className}`}>
            <div className='flex-shrink-0 flex gap-4 marquee-group'>{children}</div>
            <div aria-hidden className='flex-shrink-0 flex gap-4 marquee-group'>{children}</div>
        </div>
    );
}