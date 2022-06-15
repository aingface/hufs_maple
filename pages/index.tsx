import type { NextPage } from 'next'
// import styles from '/styles/Home.module.css'
import MainContents from 'components/MainContents'
import Layout from 'components/Layout'
const Home: NextPage = () => {
  return (
      <Layout>
        <MainContents/>  
      </Layout>
  )
}

export default Home
