import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getCssText, getTheme, globalStyles, presetsKeys } from 'theme'
import { useTranslate } from 'hooks'

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  const { translate } = useTranslate()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="default"
      value={getTheme()}
      themes={presetsKeys}
    >
      <Head>
        <title>{translate('title')}</title>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false
})
