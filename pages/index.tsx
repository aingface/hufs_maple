import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '/styles/Home.module.css'
// import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MainContents from 'components/MainContents'
import Layout from 'components/Layout'
const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <MainContents/>  
      </Layout>
    </>
  )
}

export default Home

// const FontTest=styled.div`
//   font-family: Maplestory_OTF_Light;
//   font-size: 2rem;
// `