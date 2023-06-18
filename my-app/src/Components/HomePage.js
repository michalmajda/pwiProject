import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ResponsiveMenu from './ResponsiveMenu';
import CarouselItem from './Carousel';
import GridItems from './GridItems';
import ContactForm from './ContactForm';
import Footer from './Footer';

const HomePage = () => {
  return <div style={{textAlign: `center`}}>
    <ResponsiveMenu/>
    <div style={{maxWidth: `1600px`, margin: `0 auto`}}>
    <CarouselItem />
    <GridItems/>
    <ContactForm />
    </div>
    <Footer />
  </div> 
  
};

export default HomePage;