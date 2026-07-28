import { ShoppingBag, X, Trash2, Plus, Minus, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    checkout,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    navigate("/shop");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 z-40 bg-[rgba(45,33,64,0.24)] backdrop-blur-sm transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-[430px] flex-col border-l border-white/45 bg-white/72 shadow-[-18px_0_50px_rgba(148,0,211,0.16)] backdrop-blur-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b border-white/55 px-6 py-6 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-lg">
                <ShoppingBag size={24} className="text-white" />
              </div>

              <div>
                <h2
                  className="text-2xl text-[var(--text)]"
                  style={{ fontFamily: "Clash Display" }}
                >
                  Shopping Cart
                </h2>

                <p className="mt-1 text-sm text-[var(--text-soft)]">
                  {totalItems} item{totalItems !== 1 ? "s" : ""} ready to go
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--text-soft)] shadow hover:bg-[var(--primary)] hover:text-white transition"
              aria-label="Close cart"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-xl">
                <ShoppingBag size={44} className="text-white" />
              </div>

              <h2
                className="mt-8 text-3xl text-[var(--text)]"
                style={{ fontFamily: "Clash Display" }}
              >
                Your cart is empty
              </h2>

              <p className="mt-3 max-w-xs text-[15px] leading-7 text-[var(--text-soft)]">
                Add something lovely from the shop and it will appear here with
                the updated Wisteria Cart styling.
              </p>

              <button
                onClick={handleContinueShopping}
                className="mt-8 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              <div className="mb-5 flex items-center justify-between rounded-2xl bg-white/55 px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-soft)]">
                  <Sparkles size={16} className="text-[var(--primary)]" />
                  Wisteria picks in your bag
                </div>

                <span className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                  {cartItems.length} product{cartItems.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-white/45 bg-white/70 p-4 shadow-lg shadow-purple-200/30"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-white to-[var(--surface)] p-3">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="max-h-16 object-contain"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3
                              className="line-clamp-2 text-base font-semibold text-[var(--text)]"
                              style={{ fontFamily: "Syne" }}
                            >
                              {item.title}
                            </h3>

                            <p className="mt-1 text-xs uppercase tracking-wider text-[var(--text-soft)]">
                              ${item.price} each
                            </p>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2 rounded-full bg-[var(--surface)]/50 px-2 py-2">
                            <button
                              onClick={() => decreaseQty(item.id)}
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--text)] shadow transition hover:bg-[var(--primary)] hover:text-white"
                              aria-label={`Decrease quantity for ${item.title}`}
                            >
                              <Minus size={15} />
                            </button>

                            <span className="min-w-8 text-center font-semibold text-[var(--text)]">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => increaseQty(item.id)}
                              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--text)] shadow transition hover:bg-[var(--primary)] hover:text-white"
                              aria-label={`Increase quantity for ${item.title}`}
                            >
                              <Plus size={15} />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-xs uppercase tracking-wider text-[var(--text-soft)]">
                              Subtotal
                            </p>
                            <p
                              className="text-2xl text-[var(--primary)]"
                              style={{ fontFamily: "Clash Display" }}
                            >
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/55 bg-white/60 px-6 py-6 backdrop-blur-xl sm:px-7">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[var(--text-soft)]">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-[var(--text-soft)]">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>

              <div className="flex items-center justify-between border-t border-purple-100 pt-4">
                <span className="text-lg font-semibold text-[var(--text)]">
                  Total
                </span>

                <span
                  className="text-3xl text-[var(--primary)]"
                  style={{ fontFamily: "Clash Display" }}
                >
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={checkout}
              className="mt-6 h-14 w-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-lg font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="mt-4 h-12 w-full rounded-full border border-red-200 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
};


export default Cart;
