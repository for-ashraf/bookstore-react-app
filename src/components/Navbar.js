import { Link } from 'react-router-dom';
import './Navbar.css';
import { IoIosPerson } from 'react-icons/io';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BOOKS',
  },
  {
    id: 2,
    path: '/categories',
    text: 'CATEGORIES',
  },
];
function Navbar() {
  return (
    <nav>
      <div className="navContainer">
        <h3 className="logo">Bookstore CMS</h3>
        <ul className="navLinks">
          {links.map((link) => (
            <li className="NavLink" key={link.id}>
              <Link to={link.path}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="profile-container">
          <IoIosPerson className="profile-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
