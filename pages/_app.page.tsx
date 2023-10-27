import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';

const robotoFont = Roboto({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <style jsx global>{`
          :root {
            --rotobo-font: ${robotoFont.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
