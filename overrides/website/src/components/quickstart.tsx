import { Flex, Grid, Stack, styled } from 'styled-system/jsx'
import { Text } from '~/components/ui/text'

export const Quickstart = () => {
  return (
    <Grid gap={{ base: '4', md: '6' }} columns={{ base: 2, sm: 3, xl: 5 }} className="not-prose">
      <a href="https://stackblitz.com/edit/qsdtpyst" target="_blank" rel="noreferrer">
        <Flex
          borderRadius="l3"
          borderWidth="1px"
          p="4"
          bg="bg.default"
          color="fg.default"
          align="center"
          justify="center"
        >
          <Stack gap="2.5" align="center">
            {/** biome-ignore lint/performance/noImgElement: <explanation> */}
            <styled.img alt="Ark Ripple" src="https://www.ripple-ts.com/favicon.svg" height="24" />
            <Text textStyle="sm" textAlign="center">
              Ripple TS
            </Text>
          </Stack>
        </Flex>
      </a>
    </Grid>
  )
}
