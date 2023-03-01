import '@/styles/globals.css'
// context api
import { ProfileProvider } from '@/profileContext'
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  return <>
    <Script
      strategy="afterInteractive"
      async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
    />

    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
            page_path: window.location.pathname
          });`
      }}
    />

    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  </>
}
