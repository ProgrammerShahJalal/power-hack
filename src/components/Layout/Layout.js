import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
