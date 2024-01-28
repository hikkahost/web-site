import Head from "next/head";
import { MantineProvider, createTheme, rem } from "@mantine/core";
import '@mantine/core/styles.css';
import "@fontsource/golos-ui";

const theme = createTheme({
  fontFamily: 'Golos UI',
  primaryColor: 'cyan',

  /** Customization */
  headings: {
    fontFamily: 'Golos UI',
  },
});

export default function App({ Component, pageProps }: any) {

  return (
    <>
      <MantineProvider theme={theme} cssVariablesSelector="html" classNamesPrefix="hikkahost">
        <Head>
          <title>HikkaHost</title>
          <link rel="shortcut icon" href="/logo.png" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
