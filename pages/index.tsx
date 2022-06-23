import type { NextPage } from 'next'
import MainLayout from 'components/Layout/MainLayout'
import React, { useEffect } from 'react';
import styled from 'styled-components';
import StickyBackgroundImg from 'components/MainPage/StickyBackgroundImg'
import JoinRequirement from 'components/MainPage/JoinRequirement'

import { useDispatch } from 'react-redux';
import { IState } from 'store/modules';
import { setWindowSize } from 'store/modules/slice/windowSizeSlice';

const Home: NextPage = () => {
  const dispatch=useDispatch();
  
  const setMainPageSize=()=>{
    dispatch(setWindowSize( {
      innerWidth: window.innerWidth, innerHeight: window.innerHeight
    }))
  }
  
  useEffect(()=>{
    setMainPageSize();
  },[])

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