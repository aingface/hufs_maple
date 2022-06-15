import React from 'react';
import Layout from 'components/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import reverse_city from '/public/images/reverse_city.jpeg'
import Charts from 'components/Charts'
import MemberAVG from 'components/MemberAVG'
import BackgroundImg from 'components/BackgroundImg'
interface Props{
  positionY:number;
  innerWidth:number;
}

const info = () => {  
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

const BgImgWrapper=styled.div`
  z-index: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
`

const ContentsWrapper=styled.div`
  position: relative;
  height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Maplestory_OTF_Light;
  min-width: 350px;
  width: 100vw;
  /* background:linear-gradient( #60f4fffc, 15%,#862cbaf9 25%, #f6f7f9ce 5%); */
`