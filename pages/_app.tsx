import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '/public/static/fonts/style.css'
import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//     @font-face {
//     font-family: 'Maplestory_OTF_Bold';
//     src: url('src/public/static/fonts/Maplestory_OTF_Bold.otf') format('otf');
//     font-style: normal;
//     font-weight: 400;
//     font-display: swap;
//   }
//   @font-face {
//     font-family: 'Maplestory_OTF_Light';
//     src: url('src/public/static/fonts/Maplestory_OTF_Light.otf') format('otf');
//     font-style: bold;
//     font-weight: 700;
//     font-display: swap;
//   }
// `;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GlobalStyle/> */}
      <Component {...pageProps} />
    </>

  )

}

export default MyApp
