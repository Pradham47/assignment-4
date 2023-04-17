const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light shadow-2xl header sticky-top">
      <img
        className="logo-image-navbar"
        src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
      ></img>
      <ul className="navbar-nav flex flex-row nav-headings">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#search" className="nav-link">
            Items
          </a>
        </li>
        <li className="nav-item">
          <a href="#footer" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <img
            className="cart-img"
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
          ></img>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;