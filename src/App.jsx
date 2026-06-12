import React from 'react';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Home from './pages/home/home.component';

const App = () => {
  return (
    <div className="app-workspace-canvas">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;