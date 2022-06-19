import type { NextPage } from 'next'
// import styles from '/styles/Home.module.css'
import MainContents from 'components/MainPage/MainContents'
import MainLayout from 'components/Layout/MainLayout'
const Home: NextPage = () => {
  return (
      <MainLayout>
        <MainContents/>  
      </MainLayout>
  )
}

export default Home
