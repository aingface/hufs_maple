import React from 'react';
import styled from 'styled-components'
import Image from 'next/image';
import instagram1 from '/public/images/instagram1.png'
const Footer = () => {
  return (
    <>
      <FooterWrapper className='footer-wrapper'>
        <p className='footer_text'>Copyright@ 2022 aingface</p>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper=styled.footer`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction:column;
  width: 100vw;
  height: 10vh;
  margin: 0;
  background-color: #485055;
  color: white;
  p{
    font-size: 0.8rem;
    opacity: 70%;
    margin: 0.2rem 0;
  }
  font-family: Maplestory_OTF_Light;
`
