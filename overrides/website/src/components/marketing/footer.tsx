import NextLink from 'next/link'
import { Container, Stack } from 'styled-system/jsx'
import { Text } from '~/components/ui/text'
import { Logo } from '../logo'

const resources = [
  {
    name: 'GitHub',
    href: 'https://github.com/anubra66/ark-ripple',
  },
  {
    name: 'Ark UI',
    href: 'https://ark-ui.com',
  },
]

export const Footer = () => {
  return (
    <footer>
      <Container py="8">
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}
          justify="space-between"
          align={{ base: 'start', md: 'center' }}
          gap="8"
        >
          <Stack gap="1" align="start">
            <Logo />
            <Text color="fg.muted">Built with ❤️ by <a target="_blank" rel="noreferrer" href="https://github.com/anubra66">anubra266</a></Text>
          </Stack>
          <Stack direction="row" gap="8">
            <NextLink href="/docs/overview/getting-started">Docs</NextLink>
            {resources.map((resource) => (
              <a key={resource.name} href={resource.href} target="_blank" rel="noreferrer">
                {resource.name}
              </a>
            ))}
          </Stack>
        </Stack>
      </Container>
    </footer>
  )
}
