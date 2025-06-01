import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => `nav-link${isActive ? ' acitve' : ''}`}
      >
        Candidate Search
      </NavLink>


      <NavLink
        to="/SavedCandidates"
        className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
      >
        Saved Candidates
      </NavLink>
    </nav>
  );
};

export default Nav;
