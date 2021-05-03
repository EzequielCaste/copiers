import React from 'react';
import AOhead from '../AOhead';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({children}) => {
  return (
    <>
      <AOhead />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
