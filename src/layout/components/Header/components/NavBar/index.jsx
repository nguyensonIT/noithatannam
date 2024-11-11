import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#60a5fa" : "",
  });
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className="nav-link max-[640px]:text-[12px]"
            style={navLinkStyle}
          >
            Trang Chủ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="nav-link max-[640px]:text-[12px]"
            style={navLinkStyle}
          >
            Liên Hệ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
