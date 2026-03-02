import { createHighlighter, type Highlighter } from 'shiki'
import rippleGrammar from './ripple.tmLanguage.json'

const cache = new Map<string, Promise<unknown>>()

function cachePromise<T>(key: string, setPromise: () => Promise<T>): Promise<T> {
  const cached = cache.get(key)
  if (cached) return cached as Promise<T>

  const promise = setPromise()
  cache.set(key, promise)
  return promise
}

export async function getHighlighter(): Promise<Highlighter> {
  return cachePromise('highlighter', () =>
    createHighlighter({
      themes: ['github-dark-default'],
      langs: [
        'jsx',
        'tsx',
        'vue',
        'bash',
        'javascript',
        'typescript',
        'json',
        'svelte',
        'css',
        { ...rippleGrammar, name: 'ripple' as const, embeddedLangs: ['jsx', 'tsx', 'css'] } as any,
      ],
    }),
  )
}

export function disposeHighlighter() {
  cache.clear()
}
