import '../styles/globals.scss';
import { useRef } from 'react';
import { AppProps /* , AppContext */ } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

import { AppProvider } from 'context/app-context';
import seoConfig from 'constants/seo';

function App({ Component, pageProps }: AppProps) {
  const queryClientRef: any = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <AppProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <DefaultSeo {...seoConfig} />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </AppProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
