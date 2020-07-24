import React from 'react';

import './App.scss';
import NavHeader from '../Components/NavHeader/NavHeader';
import Header from '../Components/Header/Header';
import AuthorSection from '../Components/AuthorSection/AuthorSection';
import AboutSection from '../Components/AboutSection/AboutSection';
import FormSection from '../Components/FormSection/FormSection';

function App() {
  return (
    <div>
      <NavHeader />
      <Header />
      <AuthorSection />
      <AboutSection />
      <FormSection />
      
    </div>
  );
}

export default App;
