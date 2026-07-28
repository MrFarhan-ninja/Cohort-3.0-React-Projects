import {
  X,
  ShoppingCart,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router";

const MobileSidebar = ({
  openMenu,
  setOpenMenu,
  user,
  cartItems,
  handleLogout,
  setIsCartOpen,
}) => {
  const menuStyle = ({ isActive }) =>
    `flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 ${
      isActive
        ? "bg-[var(--primary)] text-white shadow-lg"
        : "bg-white text-[var(--text)] hover:bg-[var(--surface)]"
    }`;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          openMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 bg-[var(--bg)] shadow-2xl z-50 transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">

          <div>
            <h2 className="font-['Clash_Display'] text-2xl text-[var(--primary)]">
              Wisteria Cart
            </h2>

            <p className="text-sm text-[var(--text-soft)]">
              Where Shopping Blossoms
            </p>
          </div>

          <button
            onClick={() => setOpenMenu(false)}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Card */}
        <div className="mx-5 bg-white rounded-3xl shadow-md p-5">

          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14
                rounded-full
                bg-gradient-to-br
                from-[var(--primary)]
                to-[var(--secondary)]
                flex
                items-center
                justify-center
                text-white
                text-xl
                font-bold
              "
            >
              {user?.fullName?.charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="text-sm text-[var(--text-soft)]">
                Welcome Back 👋
              </p>

              <h3 className="font-semibold text-lg text-[var(--text)]">
                {user?.fullName}
              </h3>
            </div>

          </div>

        </div>

        {/* Navigation */}

        <div className="px-5 mt-8 space-y-3">

          <NavLink
            to="/home"
            onClick={() => setOpenMenu(false)}
            className={menuStyle}
          >
            Home
            <ChevronRight size={18} />
          </NavLink>

          <NavLink
            to="/shop"
            onClick={() => setOpenMenu(false)}
            className={menuStyle}
          >
            Shop
            <ChevronRight size={18} />
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpenMenu(false)}
            className={menuStyle}
          >
            About
            <ChevronRight size={18} />
          </NavLink>

        </div>

        {/* Bottom */}

        <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">

          <button
            onClick={() => {
              setIsCartOpen(true);
              setOpenMenu(false);
            }}
            className="
              w-full
              flex
              justify-between
              items-center
              px-5
              py-4
              rounded-2xl
              bg-[var(--primary)]
              text-white
              shadow-lg
            "
          >

            <div className="flex items-center gap-3">
              <ShoppingCart size={20} />
              Cart
            </div>

            {cartItems.length > 0 && (
              <span className="bg-white text-[var(--primary)] rounded-full px-3 py-1 text-xs font-bold">
                {cartItems.length}
              </span>
            )}

          </button>

          <button
            onClick={handleLogout}
            className="
              w-full
              py-4
              rounded-2xl
              bg-red-500
              text-white
              hover:bg-red-600
              transition
              flex
              justify-center
              items-center
              gap-2
            "
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>

      </div>
    </>
  );
};

export default MobileSidebar;