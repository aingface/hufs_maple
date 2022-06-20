import type { NextPage } from 'next'
// import MainContents from 'components/MainPage/MainContents'
import MainLayout from 'components/Layout/MainLayout'
import React from 'react';
import styled from 'styled-components';
import StickyBackgroundImg from 'components/MainPage/StickyBackgroundImg'
import JoinRequirement from 'components/MainPage/JoinRequirement'



const Home: NextPage = () => {
  return (
      <MainLayout>
         <MainContentsWrapper>
          <StickyBackgroundImg imgUrl={'/images/maple_island.jpeg'}/>
          <JoinRequirement/>
        </MainContentsWrapper>  
      </MainLayout>
  )
}

export default Home

const MainContentsWrapper=styled.div`
  position: relative;
  height: 500vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`