import type { FC } from 'react';

interface MenuProps {
  user?: User | null;
  isLoggedIn: boolean;
}

const Menu: FC<MenuProps> = ({ user, isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Todo App
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggler="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="nav-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {isLoggedIn && user && (
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#todos">
                  My Todos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#logout">
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
