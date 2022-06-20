import Header from 'components/Layout/Header';
import React from 'react';
import Footer from 'components/Layout/Footer';
import Head from 'next/head';
import styled from 'styled-components';

type layoutProps={
  children:React.ReactNode | JSX.Element;
}

const Layout = ({children}:layoutProps ) => {
  return (
    <LayoutWrapper>
      <Head>
        <title>한국외대 메이플스토리 동아리</title>
        <meta name="description" content="Hufs Maplestory club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        {children}
      <Footer/>
    </LayoutWrapper>
  );

}
export default Layout;

const LayoutWrapper=styled.div`
  width:100vw;
  backgroundColor:'#f6f7f9';
  
  /* max-width:1140px;
  min-width:280px; */
`