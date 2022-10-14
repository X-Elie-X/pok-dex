import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './style.css';
import PokemonList from './components/Pokemonlist';
import PokemonInfo from './components/Pokemoninfo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemonInfo/:pokemonId" element={<PokemonInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
