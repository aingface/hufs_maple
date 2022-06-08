import Header from 'components/Header';
import React from 'react';
import Footer from 'components/Footer';

type layoutProps={
  children:React.ReactNode;
}

const Layout = ({children}:layoutProps ) => {
  return (
    <>
      <Header/>
        {children}
      <Footer/>
    </>
  );

}
export default Layout;