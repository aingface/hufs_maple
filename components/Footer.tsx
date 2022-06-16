import React from 'react';
import styled from 'styled-components'


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
  width: 100vw;
  .footer_text{
    font-size: 0.8rem;
    opacity: 70%;
    margin: auto;
  }
`
