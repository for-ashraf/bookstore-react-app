import { Link } from 'react-router-dom';
import './Navbar.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BooksList',
  },
  {
    id: 2,
    path: '/categories',
    text: 'Categories',
  },
];
function Navbar() {
  return (
    <div className="navContainer">
      <nav>
        <h3 className="logo">EducationSoul</h3>
        <ul className="navLinks">
          {links.map((link) => (
            <li className="NavLink" key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
