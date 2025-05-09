import Image from "next/image"
import '../styles/home.css';

export default function ProjectGrid({ posts }: { posts: any[] }) {


    return (
        <div className={`project-grid grid grid-cols-1 sm:grid-cols-2 gap-0 px-0`}>
            {
                posts.map(({ frontMatter, slug }, index) => (
                    <a key={index} href={`/projects/${slug}`}>
                        <article className="relative overflow-hidden" style={{ aspectRatio: "1.6 / 1" }}>
                            <Image
                                className={`${frontMatter.imgClass} w-full object-cover`}
                                src={frontMatter.tileImage || frontMatter.featuredImage}
                                alt={frontMatter.title}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <h2 className="absolute bottom-4 pl-5 pr-6 font-semibold text-xl text-white z-20">{frontMatter.title}</h2>
                        </article>
                    </a>
                )
                )
            }
        </div>
    );
}