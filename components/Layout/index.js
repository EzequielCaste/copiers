import React from 'react';
import AOhead from '../AOhead';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({children}) => {
  return (
    <>
      <AOhead />

      <main className="max-w-screen-lg mx-auto">
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
