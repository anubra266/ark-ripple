import { getHighlighter } from '~/lib/highlighter'
import { Tabs } from '~/components/ui/tabs'
import { CodePreview } from '../code-preview'

const code = `import { Slider } from 'ark-ripple/slider';
import { track } from 'ripple';

export component Basic() {
	const value = track([30]);

	<Slider.Root 
      min={-50} 
      max={50} 
      {value} 
      onValueChange={(e) => (@value = e.value)}
    >
      <Slider.Label>{'Label'}</Slider.Label>
      <Slider.ValueText>{@value}</Slider.ValueText>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0} />
      </Slider.Control>
	</Slider.Root>
}`

export const CodeExamples = async () => {
  const highlighter = await getHighlighter()
  const html = highlighter.codeToHtml(code, { lang: 'ripple', theme: 'github-dark-default' })

  return (
    <Tabs.Root
      defaultValue="ripple"
      variant="line"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.dark.2"
    >
      <Tabs.List
        bg="gray.dark.a2"
        boxShadow="none"
        borderBottomWidth="1px"
        borderBottomColor="gray.dark.5"
        pt="2"
        px="4"
      >
        <Tabs.Trigger value={'ripple'} textTransform="capitalize" color="gray.dark.11" _selected={{ color: 'white' }}>
          App.ripple
        </Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value={'ripple'} pt="0">
        <CodePreview code={code} html={html} />
      </Tabs.Content>
    </Tabs.Root>
  )
}
