import React from 'react';
import HeroLayout from '../layouts/school/HeroLayout';
import AboutLayout from '../layouts/school/AboutLayout';
import ContactLayout from '../layouts/home/ContactLayout';
import AdmissionLayout from '../layouts/school/AdmissionLayout';
import ScrollToTop from '../variants/ScrollToTop';

const SchoolPage = () => {
  return (
    <div>
      <ScrollToTop/>
      <HeroLayout/>
      <AboutLayout/>
      <AdmissionLayout/>
      <ContactLayout/>
    </div>
  )
}

export default SchoolPage;
