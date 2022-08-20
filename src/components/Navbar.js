import { Link } from 'react-router-dom';
import userIcon from '../images/user.png';

const Navbar = () => (
  <nav className="navigation-bar">
    <div className="nav-div1">
      <span className="nav-logo">Bookstore CMS</span>
      <ul className="nav-ul">
        <li>
          <Link to="/" className="bookstore-link">
            Bookstore
          </Link>
        </li>
        <li>
          <Link to="/Categories" className="categories-link">
            Categories
          </Link>
        </li>
      </ul>
    </div>
    <div className="nav-div2">
      <img className="nav-user-icon" src={userIcon} alt="user-icon" />
    </div>
  </nav>
);

export default Navbar;
