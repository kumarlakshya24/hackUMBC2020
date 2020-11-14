import React from 'react';
// import sections
import Hero from '../components/sections/Hero.jsx';
import FeaturesTiles from '../components/sections/FeaturesTiles.jsx';
import FeaturesSplit from '../components/sections/FeaturesSplit.jsx';
import Testimonial from '../components/sections/Testimonial.jsx';
import Cta from '../components/sections/Cta.jsx';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;