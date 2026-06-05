import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navs'>
      <NavLink 
        to="/" 
        end
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Home
      </NavLink>
      <NavLink 
        to="/courses" end
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Courses
      </NavLink>
      <NavLink 
        to="/about" end
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        About
      </NavLink>
      <NavLink 
        to="/contact" end
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;