import Header from 'components/Header';
import React from 'react';
import Footer from 'components/Footer';
import Head from 'next/head'
type layoutProps={
  children:React.ReactNode | JSX.Element;
}

const Layout = ({children}:layoutProps ) => {
  return (
    <div
    style={{backgroundColor:'#f6f7f9', zIndex:'-9999'}}
    >
      <Head>
        <title>한국외대 메이플스토리 동아리</title>
        <meta name="description" content="Hufs Maplestory club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        {children}
      <Footer/>
    </div>
  );

}
export default Layout;

// max-width: 1140px;