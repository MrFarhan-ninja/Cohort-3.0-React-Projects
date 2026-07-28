import { ShoppingCart, LogOut, Menu } from "lucide-react";

const UserSection = ({
  user,
  cartItems,
  handleLogout,
  setIsCartOpen,
  setOpenMenu,
}) => {
  return (
    <div className="flex items-center gap-3">
      {/* User Card */}
      <div className="hidden md:flex items-center gap-3 px-3 py-2 rounded-full bg-white shadow-md border border-white/40">
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-gradient-to-br
            from-[var(--primary)]
            to-[var(--secondary)]
            flex
            items-center
            justify-center
            text-white
            font-bold
          "
        >
          {user?.fullName?.charAt(0).toUpperCase()}
        </div>

        <div className="leading-tight">
          {/* <p className="text-xs text-[var(--text-soft)]">
            Welcome 
          </p>

          <p className="font-semibold text-[var(--text)]">
            {user?.fullName}
          </p> */}
          <p className="text-sm font-semibold text-[var(--text)]">
            Hi, {user?.name?.split(" ")[0]} 👋
        
          </p>
        </div>
      </div>

      {/* Cart */}

      <button
        onClick={() => setIsCartOpen(true)}
        className="
          relative
          w-12
          h-12
          rounded-full
          bg-white
          shadow-md
          hover:scale-105
          transition
          flex
          items-center
          justify-center
        "
      >
        <ShoppingCart className="text-[var(--primary)]" size={22} />

        {cartItems.length > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              w-5
              h-5
              rounded-full
              bg-[var(--primary)]
              text-white
              text-xs
              flex
              items-center
              justify-center
              font-bold
            "
          >
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="
    hidden
    md:flex
    w-12
    h-12
    rounded-full
    bg-white
    text-red-500
    shadow-md
    items-center
    justify-center
    hover:bg-red-500
    hover:text-white
    transition-all
    duration-300
  "
      >
        <LogOut size={20} />
      </button>
      {/* <button
        onClick={handleLogout}
        className="
          hidden
          md:flex
          w-12
          h-12
          rounded-full
          bg-white
          shadow-md
          items-center
          justify-center
          hover:bg-red-500
          hover:text-white
          transition
        "
      >

        <LogOut size={20} />

      </button> */}

      {/* Mobile Menu */}

      <button
        onClick={() => setOpenMenu(true)}
        className="
          md:hidden
          w-12
          h-12
          rounded-full
          bg-white
          shadow-md
          flex
          items-center
          justify-center
        "
      >
        <Menu className="text-[var(--primary)]" size={22} />
      </button>
    </div>
  );
};

export default UserSection;
