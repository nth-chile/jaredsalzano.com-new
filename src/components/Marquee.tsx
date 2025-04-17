import Image from "next/image"
import '../styles/home-projects.css';

export default function Marquee({ posts, className = '' }: { className: string, posts: any[] }) {
    const items = posts
        .map(({ frontMatter, slug }, index) => (
            <a key={index} href={`/projects/${slug}`}>
                <article className="h-60 sm:h-72 relative rounded-2xl overflow-hidden shadow-sm" style={{ aspectRatio: "1.6 / 1" }}>
                    <Image
                        className={`${frontMatter.imgClass} w-full object-cover`}
                        src={frontMatter.featuredImage}
                        alt={frontMatter.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <h2 className="opacity-0 absolute bottom-4 pl-5 pr-6 font-semibold text-xl text-white drop-shadow-sm z-20">{frontMatter.title}</h2>
                </article>
            </a>
        )
        )

    return (
        <div className={`marquee overflow-hidden flex gap-4 ${className}`}>
            <div className='shrink-0 flex gap-4 marquee-group'>{items}</div>
            <div aria-hidden className='shrink-0 flex gap-4 marquee-group'>{items}</div>
        </div>
    );
}