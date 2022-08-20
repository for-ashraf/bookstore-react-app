import { Link } from 'react-router-dom';
import image from './images/user.png';

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
          <span className="profile-icon"><img src={image} alt="user" /></span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
