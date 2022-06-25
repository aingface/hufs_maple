import React from 'react';
import styled from 'styled-components';
import Image,{StaticImageData} from 'next/image';

interface bgImgProps{
  imgUrl:StaticImageData;
}

const  BackgroundImg= ({imgUrl}:bgImgProps)=> {
  return (
    <BgImgWrapper>
      <ImgWrapper>
        <Image
          src={imgUrl}
          alt={`background:infoBgImage.jpeg`}
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