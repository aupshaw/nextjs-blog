import '../styles/global.css'
import {AppProps} from "next/app";

//MANTINE STYLES
// core styles are required for all packages
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

const theme = createTheme({});
export default function App({ Component, pageProps }: AppProps) {
    return (
      <MantineProvider theme={theme}>
          <Component {...pageProps} />;
      </MantineProvider>
    );
}
