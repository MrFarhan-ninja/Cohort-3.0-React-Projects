import { NavLink } from "react-router";

const NavLinks = () => {
  const navStyle = ({ isActive }) =>
    `relative font-semibold transition-all duration-300
     ${
       isActive
         ? "text-[var(--primary)]"
         : "text-[var(--text)] hover:text-[var(--secondary)]"
     }`;

  return (
    <div className="hidden lg:flex items-center gap-10">
      <NavLink className={navStyle} to="/home">
        Home
      </NavLink>

      <NavLink className={navStyle} to="/shop">
        Shop
      </NavLink>

      <NavLink className={navStyle} to="/about">
        About
      </NavLink>
    </div>
  );
};

export default NavLinks;