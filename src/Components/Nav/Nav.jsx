import PropTypes from "prop-types";
import { navigate } from "@reach/router";

const Nav = ({ brandLogo, name, showMenu, moreMenu }) => {
  return (
    <nav className="nav">
      <div className="container nav__container">
        <div className="nav__brand">
          <img
            className="nav__brand-logo"
            src={brandLogo}
            alt="Brand-Logo"
            onClick={() => navigate("/")}
          />
          <h1 className="nav__brand-name">{name}</h1>
        </div>
        {showMenu && (
          <div className="nav__menu">
            <div className="nav__menu-items">
              <img className="nav__menu-icon" src={moreMenu} alt="More Menu" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  brandLogo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  showMenu: PropTypes.bool.isRequired,
  moreMenu: PropTypes.string.isRequired,
};

export default Nav;
