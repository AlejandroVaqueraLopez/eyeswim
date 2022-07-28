import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
          
        <NavLink className="navbar-brand" to="/">
          <img src="./src/assets/logo.png" className="logo-img mb-1" alt="" />
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/movies">link 1</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/2">link 2</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/3">link 3</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;