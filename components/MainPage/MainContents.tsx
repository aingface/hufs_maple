import React from 'react';
import styled from 'styled-components';
import StickyBackgroundImg from 'components/MainPage/StickyBackgroundImg'
import JoinRequirement from 'components/MainPage/JoinRequirement'

const MainContents = () => {
  return (
    <MainContentsWrapper>
      <StickyBackgroundImg imgUrl={'/images/maple_island.jpeg'}/>
      <JoinRequirement/>
    </MainContentsWrapper>
  );
} ;

export default MainContents;

const MainContentsWrapper=styled.div`
  position: relative;
  height: 500vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`