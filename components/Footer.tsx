import React from 'react';
import styled from 'styled-components'


const Footer = () => {
  return (
    <>
      <FooterWrapper className='footer-wrapper'>
        <Pstyle>Copyright@ 2022 aingface</Pstyle>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper=styled.footer`
  z-index: 999;
  font-family: Maplestory_OTF_Light;
  display: flex;
  height: 10vh;
  padding: 0 3rem;
  background-color: #485055;
  color: white;
  margin: 0;
  padding: 1rem;
  align-items: center;
`
const Pstyle=styled.p`
  font-size: 0.8rem;
  opacity: 70%;
  margin: auto;
`