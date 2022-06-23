import React,{useEffect} from 'react';
import Layout from 'components/Layout/Layout';
import styled from 'styled-components';
import Charts from 'components/InfoPage/Charts'
import MemberAVG from 'components/InfoPage/MemberAVG'
import BackgroundImg from 'components/BackgroundImg'

import { useDispatch } from 'react-redux';
import { setWindowSize } from 'store/modules/slice/windowSizeSlice';

const info = () => {  

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
    <Layout>
      <ContentsWrapper>
        <BackgroundImg imgUrl={'/images/reverse_city.jpeg'}/>
        <MemberAVG/>
        <Charts/>
      </ContentsWrapper>
    </Layout>  
  );
};

export default info;

const ContentsWrapper=styled.div`
  position: relative;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Maplestory_OTF_Light;
  /* min-width: 280px; */
  width: 100vw;
`