import { useState } from "react";
import { Link } from "react-router-dom";
type Props = {
  style: string;
};
type DropdownState = {
  home: boolean;
  pages: boolean;
  shop: boolean;
  blog: boolean;
};
const NavSection = ({ style }: Props) => {
  const [dropdown, setDropdown] = useState<DropdownState>({
    home: false,
    pages: false,
    shop: false,
    blog: false,
  });

  const handleToggleDropdown = (dropdownName: keyof DropdownState) => {
    if (window.innerWidth < 992) {
      setDropdown((prevState) => ({
        ...prevState,
        [dropdownName]: !prevState[dropdownName],
      }));
    }
  };

  return (
    <div className={`rv-1-header__nav ${style}`}>
      <ul className="justify-content-center">
        <li className={dropdown.home ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("home")}>
            Home
          </a>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      
        <li className={dropdown.pages ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("pages")}>
            Weather
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/services">Local Forecast</Link>
            </li>
            <li>
              <Link to="/services/web-solution">Weather Alerts</Link>
            </li>
            
          </ul>
        </li>

        <li className={dropdown.shop ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("shop")}>
          Agri
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/shop">Agric News </Link>
            </li>
            <li>
              <Link to="/shop-sidebar">Ask AI</Link>
            </li>
            <li>
              <Link to="/shop/herbal-hair-oil">Notifications</Link>
            </li>
          </ul>
        </li>

        <li className={dropdown.blog ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("blog")}>
            Blog
          </a>
          <ul className="sub-menu">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog/finding-creative-flow-organic">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li className={dropdown.shop ? "rv-dropdown-active" : ""}>
          <a role="button" onClick={() => handleToggleDropdown("shop")}>
          Account
          </a>
          <ul className="sub-menu">
          <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </li>
                <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
