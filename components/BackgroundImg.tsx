import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface bgImgProps{
  imgUrl:string;
}

const  BackgroundImg= ({imgUrl}:bgImgProps)=> {
  return (
    <BgImgWrapper>
      <ImgWrapper>
        <Image
          src={imgUrl}
          alt={`background:Background Image.jpeg`}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority= {true}
        />
      </ImgWrapper>
    </BgImgWrapper>
);
}

export default BackgroundImg;

const ImgWrapper=styled.div`
  position:relative;
  width:100vw;
  height: 100vh;
`

const BgImgWrapper=styled.div`
  z-index: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
`