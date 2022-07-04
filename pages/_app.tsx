import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode 
}
type AppPropsWithLAyout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLAyout) {
  const getLayout = Component.getLayout || ((page) => page);
  
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
