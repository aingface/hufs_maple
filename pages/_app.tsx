import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '/public/static/fonts/style.css';
import 'tailwindcss/tailwind.css';
// import { createGlobalStyle } from "styled-components";
import { wrapper } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
export default wrapper.withRedux(MyApp)
