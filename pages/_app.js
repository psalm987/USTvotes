import { useContext } from 'react';
import ThemeContext from '../components/states/theme/themeContext.js';

import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

import theme from '../styles/theme';

import AllStates from '../components/states/AllStates.js';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  const { themeMode } = useContext(ThemeContext);
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>You Vote</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Frsust%2F&psig=AOvVaw2kXQDTXW18rs8l0RYST8EY&ust=1644410541522000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCr6eiQ8PUCFQAAAAAdAAAAABAD"
        />
      </Head>

      <ThemeProvider theme={theme(themeMode)}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

const AddStates = (props) => {
  return (
    <AllStates>
      <MyApp {...props} />
    </AllStates>
  );
};

export default AddStates;
