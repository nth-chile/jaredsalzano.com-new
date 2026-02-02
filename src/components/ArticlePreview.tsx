import ContinuousImage from "@/components/ContinuousImage";

export default function ArticlePreview({
  frontMatter,
  slug,
  hasContent,
}: {
  frontMatter: any;
  slug: string;
  hasContent?: boolean;
}) {
  return (
    <div className="flex gap-8">
      <div className="relative flex-shrink-0 w-[500px]" style={{ aspectRatio: "16/9" }}>
        <ContinuousImage
          src={
            frontMatter.featuredImage ||
            "https://via.placeholder.com/800x450/e5e7eb/9ca3af?text=Project"
          }
          alt={frontMatter.title}
          fill
          className="object-cover"
          radius={0.15}
          shadow
          material3d
        />
      </div>
      <div className="prose prose-lg flex-1">
        <h3 className="text-2xl font-semibold mt-0">{frontMatter.title}</h3>
        <p>
          {frontMatter.excerpt}
          {hasContent && (
            <>
              {" "}
              <a href={`/projects/${slug}`}>Read more</a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
