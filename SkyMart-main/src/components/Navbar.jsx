

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { CartContext } from "../context/cart-context";

import Cart from "./Cart";

import Logo from "./Navbar/Logo";
import NavLinks from "./Navbar/NavLinks";
import UserSection from "./Navbar/UserSection";
import MobileSidebar from "./Navbar/MobileSidebar";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    setIsCartOpen,
  } = useContext(CartContext);

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <>
      <nav
        className={`
          sticky
          top-4
          z-50
          w-[95%]
          max-w-7xl
          mx-auto
          rounded-[28px]
          border
          border-white/40
          bg-white/70
          backdrop-blur-2xl
          transition-all
          duration-300
          ${
            scrolled
              ? "shadow-2xl shadow-purple-300/40"
              : "shadow-lg shadow-purple-200/30"
          }
        `}
      >
        <div className="h-20 px-6 lg:px-10 flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Right Side */}
          <UserSection
            user={user}
            cartItems={cartItems}
            handleLogout={handleLogout}
            setIsCartOpen={setIsCartOpen}
            setOpenMenu={setOpenMenu}
          />

        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        user={user}
        cartItems={cartItems}
        handleLogout={handleLogout}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Cart Drawer */}
      <Cart />
    </>
  );
};

export default Navbar;
