import brandLogo from "../../assets/brand-logo/brand-logo.svg";
import moreMenu from "../../assets/icons/more-menu.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container nav__container">
        <div className="nav__brand">
          <img
            className="nav__brand-logo"
            src={brandLogo}
            alt="Brand-Logo"
            className="nav__brand-logo"
          />
          <h1 className="nav__brand-name">Stack Shopping</h1>
        </div>
        <div className="nav__menu">
          <div className="nav__menu-items">
            <img className="nav__menu-icon" src={moreMenu} alt="More Menu" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
