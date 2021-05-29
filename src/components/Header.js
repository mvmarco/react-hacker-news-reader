import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import { FirebaseContext } from "../firebase";
function Header() {
  const { user, firebase } = React.useContext(FirebaseContext);

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
            {user && (
              <>
                <div className="divider">|</div>
                <NavLink to="/create" className="header-link">
                  Submit
                </NavLink>{" "}
                <div className="divider">|</div>
              </>
            )}

            {user ? (
              <>
                <div className="header-name">{user.displayName}</div>
                <div className="divider-logout">|</div>
                <div className="header-link-logout"
                 onClick={() => firebase.logout()}>
                  Logout
                </div>
              </>
            ) : (
              <>
                <div className="divider">|</div>
                <div className="header-name">
                  <NavLink to="/login" className="header-link">
                    Login
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
