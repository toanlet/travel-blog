import About from './components/about';
import Background from './components/background';

import Header from './components/header';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Background>
        <Header />
        <Navbar />
      </Background>
    </div>
  );
}

export default App;
