import { ShoppingBag, X, Trash2, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const Navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    checkout,
    totalPrice,
    isCartOpen,
    setIsCartOpen
  } = useContext(CartContext);

  return (
    
      <>
  {/* Overlay */}
  <div
    onClick={() => setIsCartOpen(false)}
    className={`fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-all duration-300 ${
      isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  />

  {/* Drawer */}
  <aside
    className={`fixed top-0 right-0 h-screen w-full max-w-[430px]
    bg-[rgba(255,255,255,0.75)]
    backdrop-blur-2xl
    border-l border-white/40
    shadow-[-15px_0_40px_rgba(148,0,211,.15)]
    z-50
    flex
    flex-col
    transition-transform
    duration-300
    ${
      isCartOpen
        ? "translate-x-0"
        : "translate-x-full"
    }`}
  >

    {/* Header */}

    <div className="px-7 py-6 border-b border-purple-100">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-lg">

            <ShoppingBag
              size={22}
              className="text-white"
            />

          </div>

          <div>

            <h2
              className="text-2xl text-[var(--text)]"
              style={{ fontFamily: "Clash Display" }}
            >
              Shopping Cart
            </h2>

            <p className="text-sm text-[var(--text-soft)]">
              {cartItems.length} Item{cartItems.length !== 1 ? "s" : ""}
            </p>

          </div>

        </div>

        <button
          onClick={() => setIsCartOpen(false)}
          className="
          w-10
          h-10
          rounded-full
          bg-white
          shadow-md
          flex
          items-center
          justify-center
          hover:bg-[var(--primary)]
          hover:text-white
          transition
          "
        >
          <X size={18} />
        </button>

      </div>

    </div>
     
        <div className="h-full flex flex-col justify-center items-center text-center px-8">

  <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-xl">
    <ShoppingBag
      size={46}
      className="text-white"
    />
  </div>

  <h2
    className="mt-8 text-3xl text-[var(--text)]"
    style={{ fontFamily: "Clash Display" }}
  >
    Your Cart is Empty
  </h2>

  <p className="mt-3 text-[var(--text-soft)] leading-7">
    Looks like you haven't added anything yet.
  </p>

  <button
    onClick={() => setIsCartOpen(false)}
    className="
      mt-8
      h-12
      px-8
      rounded-full
      bg-gradient-to-r
      from-[var(--primary)]
      to-[var(--secondary)]
      text-white
      font-semibold
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
    "
  >
    Continue Shopping
  </button>

</div>
        {/* Footer */}

        {cartItems.length > 0 && (
          <div className="px-8 py-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[#6C6C6B] text-lg">Total</span>

              <span
                className="text-[30px] text-white"
                style={{ fontFamily: "Clash Display" }}
              >
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={checkout}
              className="neu-accent neu-btn w-full h-14 rounded-2xl text-black font-semibold text-lg"
            >
              Checkout →
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-5 text-[#6C6C6B] text-sm hover:text-white transition"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Cart;
