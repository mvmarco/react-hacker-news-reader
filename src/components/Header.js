import { withRouter, NavLink} from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <div className="header">
        <img src="/logo.png" alt="interflora logo" className="logo" />

        <div className="flex-row">


          <div>
            <NavLink to="/" className="header-title">
              Interflora hacker news
            </NavLink>
          </div>
          <div className="header-links">
            <NavLink to="/" className="header-link">
              Recent News
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/top" className="header-link">
              Top News
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/search" className="header-link">
              searchBar
            </NavLink>
            <div className="divider">|</div>
            <NavLink to="/create" className="header-link">
              Submit
            </NavLink>
          </div>

        </div>


      </div>
      <div className="header-logins">
        <NavLink to="/login" className="header-link">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Header);
