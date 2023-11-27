/* eslint-disable react/jsx-no-undef */
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
