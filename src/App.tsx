import { Outlet } from 'react-router';
import About from './components/about';
import Background from './components/background';
import Footer from './components/footer';

import Header from './components/header';
import Navbar from './components/navbar';

import Routing from './router';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Background>
          <Header />
          <Navbar />
        </Background>
        <Routing />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
