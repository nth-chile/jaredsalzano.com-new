import Image from "next/image"
import '../styles/home-projects.css';

export default function ProjectGrid({ posts, className = '' }: { className: string, posts: any[] }) {


    return (
        <div className={`project-grid grid grid-cols-2 gap-0 px-0 ${className}`}>
            {
                posts.map(({ frontMatter, slug }, index) => (
                    <a key={index} href={`/projects/${slug}`}>
                        <article className="relative overflow-hidden" style={{ aspectRatio: "1.6 / 1" }}>
                            {frontMatter.featuredImage.endsWith('.mp4') ? (
                                <video
                                    className={`${frontMatter.imgClass} w-full object-cover`}
                                    src={frontMatter.featuredImage}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <Image
                                    className={`${frontMatter.imgClass} w-full object-cover`}
                                    src={frontMatter.featuredImage}
                                    alt={frontMatter.title}
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            )}
                            {/* <Image
                                className={`${frontMatter.imgClass} w-full object-cover`}
                                src={frontMatter.featuredImage}
                                alt={frontMatter.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            /> */}
                            <h2 className="opacity-0 absolute bottom-4 pl-5 pr-6 font-semibold text-xl text-white drop-shadow-sm z-20">{frontMatter.title}</h2>
                        </article>
                    </a>
                )
                )
            }
        </div>
    );
}