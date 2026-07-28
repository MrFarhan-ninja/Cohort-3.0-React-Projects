import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router";

const Logo = () => {
  return (
    <NavLink
      to="/home"
      className="flex items-center gap-3 group select-none"
    >
      <div
        className="
          w-12
          h-12
          rounded-2xl
          bg-gradient-to-br
          from-[var(--primary)]
          to-[var(--secondary)]
          flex
          items-center
          justify-center
          shadow-lg
          shadow-purple-300/40
          transition-all
          duration-300
          group-hover:rotate-6
          group-hover:scale-105
        "
      >
        <ShoppingBag className="w-6 h-6 text-white" />
      </div>

      <div>
        <h1
          className="
            text-2xl
            leading-none
            font-['Clash_Display']
            text-[var(--primary)]
          "
        >
          Wisteria Cart
        </h1>

        <p
          className="
            text-xs
            mt-1
            tracking-wide
            text-[var(--text-soft)]
          "
        >
          Where Shopping Blossoms
        </p>
      </div>
    </NavLink>
  );
};

export default Logo;