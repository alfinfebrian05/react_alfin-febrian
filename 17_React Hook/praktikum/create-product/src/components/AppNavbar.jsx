import { Link, useLocation } from "react-router-dom";

function AppNavbar() {
  const location = useLocation();
  const pageName = location.pathname;
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-capitalize" to={pageName}>
            {pageName.replace(/[/-]/g, " ").trim()}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end round p-md-3"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav gap-3 text-sm-center mt-lg-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav aria-label="breadcrumb">
        <div className="container-fluid">
          <ol className="breadcrumb py-2">
            <li className="breadcrumb-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {pageName.replace(/[/-]/g, " ").trim().toUpperCase()}
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}

export default AppNavbar;
