import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';

const App = () => (
  <div className="bg-primary font-sans">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
