import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '/styles/Home.module.css'
// import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MainContents from 'components/MainContents'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>한국외대 메이플스토리 동아리</title>
        <meta name="description" content="Hufs Maplestory club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <MainContents/>
      <Footer/>  
    </>
  )
}

export default Home

// const FontTest=styled.div`
//   font-family: Maplestory_OTF_Light;
//   font-size: 2rem;
// `