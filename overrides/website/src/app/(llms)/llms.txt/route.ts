import { getSidebarGroups } from '~/lib/sidebar'

export const dynamic = 'force-static'

export const GET = async () => {
  const sidebarGroups = getSidebarGroups()

  const generateUrl = (slug: string) => `https://ark-ui.ripple/docs/${slug}`

  const generatePageLinks = (page: { title: string; slug: string }) =>
    `- [${page.title}](${generateUrl(page.slug)})`

  const generateCategorySection = (group: (typeof sidebarGroups)[number]) => {
    const header = `# ${group.title.toUpperCase()}\n`
    const pageLinks = group.items.map(generatePageLinks).join('\n')
    return `${header}\n${pageLinks}`
  }

  const content = sidebarGroups.map(generateCategorySection).join('\n\n')

  return new Response(content)
}
