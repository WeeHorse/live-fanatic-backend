import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import Logout from "../Logout";
import SearchBar from "../SearchBar";

const links = [
  { href: "/events", name: "Events" },
  { href: "/artists", name: "Artists" },
];

const profileSubLinks = [
  { href: "/my-tickets", name: "My tickets" },
  { href: "/profile", name: "My Profile" },
];

const DesktopNavigation = ({ setIsModalOpen }) => {
  const [showSubLinks, setShowSublinks] = useState(false);
  const profileRef = useRef(null);

  useClickOutside(profileRef, () => setShowSublinks(false));

  return (
    <div className="site-navigation">
      <div>LOGO</div>
      <SearchBar placeholder={"Search"} />
      <div className="navigation-links">
        {links.map((link, index) => {
          return (
            <Link className="navigation-links__link" to={link.href} key={index}>
              {link.name}
            </Link>
          );
        })}

        <div
          ref={profileRef}
          className="navigation-links__link"
          onMouseEnter={() => setShowSublinks(true)}
          onMouseLeave={() => setShowSublinks(false)}
        >
          My Profile
          {showSubLinks && (
            <div className="sub-navigation">
              {profileSubLinks.map((subLink, index) => {
                return (
                  <Link
                    className="sub-navigation__link"
                    to={subLink.href}
                    key={index}
                  >
                    {subLink.name}
                  </Link>
                );
              })}
              <Logout />
            </div>
          )}
        </div>

        <button onClick={() => setIsModalOpen(true)}>Login</button>
      </div>
    </div>
  );
};

export default DesktopNavigation;
