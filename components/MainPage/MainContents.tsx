import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import BackgroundImg from 'components/BackgroundImg'
import JoinRequirement from 'components/MainPage/JoinRequirement'

const MainContents = () => {
  return (
      <MainContentsWrapper>
        <BackgroundImg imgUrl={'/images/maple_island.jpeg'}/>
        <MainTitle>
          HUFS 그리고 메이플<br/> 
          외메동에서 더 즐겁게
        </MainTitle>
        <JoinButton>
          <Link href={'https://open.kakao.com/me/hufsmaple'}>
          가입하기
          </Link>
        </JoinButton>
        <JoinRequirement/>
      </MainContentsWrapper>
  );
} ;

export default MainContents;

const JoinButton=styled.button`
  margin: 20vh 0 25vh 0;
  padding: 1% 3%;
  font-family: NEXON_Lv2_Gothic_OTF;
  z-index: 3;
  cursor: pointer;
  width: clamp(8rem,30vw,12rem);
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem,1vw,2rem);
  color:white;
  background-color: rgb(229,72,82);
  border-radius:5px;
  :hover{
    background-color: rgb(211,57,51);
  }
`

const MainTitle=styled.p`
  z-index: 10;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: 15vh 0;
  width: 100vw;
  /* height: 100vh; */
  font-size: clamp(1.5rem,8vw,3rem); 
  font-weight: bold;

  /* background-color: red; */
`

const MainContentsWrapper=styled.div`
  position: relative;
  height: 200vh;
  width:100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`