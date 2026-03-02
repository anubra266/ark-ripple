import { Box } from 'styled-system/jsx'
import { Footer } from '~/components/marketing/footer'
import { Hero } from '~/components/marketing/hero'
import { Highlights } from '~/components/marketing/highlights'
import { Navbar } from '~/components/marketing/navbar'

export default function Home() {
  return (
    <Box minH="100%" position="relative" backgroundImage="url(/images/pattern.svg)" backgroundRepeat="repeat-x">
      <Box
        position="absolute"
        display={{ base: 'none', sm: 'block' }}
        inset="0"
        height="830px"
        background="radial-gradient(42.48% 42.48% at calc(50% + 100vw / 3) 30%, #5194F1 0%, rgba(81, 148, 241, 0) 100%), radial-gradient(42.48% 42.48% at calc(50% + 100vw / 2) center, #EB5E41 0%, rgba(235, 94, 65, 0) 100%)"
        filter="blur(282px)"
      />
      <Navbar />
      <Hero />
      <Highlights />
      <Footer />
    </Box>
  )
}
