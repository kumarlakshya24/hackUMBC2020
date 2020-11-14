import React from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;  