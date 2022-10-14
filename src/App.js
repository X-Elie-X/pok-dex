import Navbar from './components/Navbar';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './components/Pokemonlist';
import PokemonInfo from './components/Pokemoninfo';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonList />}></Route>
        <Route path="/pokemonInfo/:pokemonId" element={<PokemonInfo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
