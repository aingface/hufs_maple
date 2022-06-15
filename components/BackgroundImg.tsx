import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface bgImgProps{
  imgUrl:string;
}

const  BackgroundImg= ({imgUrl}:bgImgProps)=> {
  return (
    <BgImgWrapper>
      <Image
        src={imgUrl}
        alt={`background:Background Image.jpeg`}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority= {true}
      />
    </BgImgWrapper>
);
}

export default BackgroundImg;

const BgImgWrapper=styled.div`
  z-index: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
`