import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Simple markdown editor" />
        <link rel="icon" href="/markdown.svg" />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Lato&display=swap" 
          rel="stylesheet" 
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/markdown.svg" />
        <meta name="theme-color" content="#ffffff" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}