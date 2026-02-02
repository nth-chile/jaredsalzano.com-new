import getPreviewsForAllPosts from "@/utils/getPreviewsForAllPosts"

export async function getNextProject(projectSlug: string) {
  const allProjectSlugs = [
    'apple', 'blackstone', 'openai', 'xfinity', 'elephant-website',
    'luupe', 'thought-catalog', 'studio-apartment', 'dojobase', 'linode', 'tolli', 'moni-jar', '826chi-2016', '826chi-2017',
    'music-practice', 'sugarstream', 'fs-shows'
  ]

  const currentIndex = allProjectSlugs.indexOf(projectSlug)
  if (currentIndex === -1 || currentIndex >= allProjectSlugs.length - 1) {
    return null
  }

  const nextSlug = allProjectSlugs[currentIndex + 1]
  const posts = await getPreviewsForAllPosts()
  return posts.find((post: any) => post.slug === nextSlug) || null
}
