import { FaMicrophone, FaLessThan } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/"><FaLessThan className="homeLink" /></Link>
        <h1 className="title">PokéDex</h1>
        <ul>
          <li><FaMicrophone /></li>
          <li><IoSettingsOutline /></li>
        </ul>

      </nav>

    </>
  );
}

export default Navbar;
