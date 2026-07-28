import { ShoppingBag, X, Trash2, Plus, Minus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
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

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen w-full max-w-[430px]
        bg-[rgba(255,255,255,0.82)]
        backdrop-blur-2xl
        border-l border-white/50
        shadow-[-10px_0_40px_rgba(148,0,211,.15)]
        z-50
        flex
        flex-col
        transition-transform
        duration-300
        ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
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
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition"
            >
              <X size={18} />
            </button>

          </div>

        </div>

        {/* Body */}

        <div className="flex-1 overflow-y-auto p-6">

          {cartItems.length === 0 ? (

            <div className="h-full flex flex-col items-center justify-center text-center">

              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center shadow-xl">

                <ShoppingBag
                  size={45}
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
                className="mt-8 px-8 h-12 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Continue Shopping
              </button>

            </div>

          ) : (

            cartItems.map((item) => (

              <div
                key={item.id}
                className="mb-5 rounded-3xl bg-white shadow-md p-4"
              >

                <div className="flex gap-4">

                  {/* Image */}

                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-[var(--surface)] flex items-center justify-center">

                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-contain"
                    />

                  </div>

                  {/* Info */}

                  <div className="flex-1">

                    <h3
                      className="text-lg font-semibold text-[var(--text)] line-clamp-2"
                      style={{ fontFamily: "Syne" }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-2 text-2xl text-[var(--primary)]"
                      style={{ fontFamily: "Clash Display" }}
                    >
                      ${item.price}
                    </p>

                    <div className="mt-4 flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-9 h-9 rounded-full bg-[var(--surface)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="w-8 text-center font-semibold text-[var(--text)]">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-9 h-9 rounded-full bg-[var(--surface)] flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition"
                        >
                          <Plus size={15} />
                        </button>

                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-10 h-10 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition"
                      >
                        <Trash2 size={18} className="mx-auto" />
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>
                {/* Footer */}

        {cartItems.length > 0 && (
          <div className="border-t border-purple-100 bg-white/70 backdrop-blur-xl p-6">

            {/* Summary */}

            <div className="space-y-3">

              <div className="flex justify-between text-[var(--text-soft)]">

                <span>Subtotal</span>

                <span>${totalPrice.toFixed(2)}</span>

              </div>

              <div className="flex justify-between text-[var(--text-soft)]">

                <span>Shipping</span>

                <span className="text-green-600 font-medium">
                  Free
                </span>

              </div>

              <div className="border-t border-purple-100 pt-4 flex justify-between items-center">

                <span
                  className="text-lg font-semibold text-[var(--text)]"
                >
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

            {/* Checkout */}

            <button
              onClick={checkout}
              className="
                mt-6
                w-full
                h-14
                rounded-full
                bg-gradient-to-r
                from-[var(--primary)]
                to-[var(--secondary)]
                text-white
                text-lg
                font-semibold
                shadow-lg
                hover:scale-[1.02]
                transition-all
                duration-300
              "
            >
              Proceed to Checkout →
            </button>

            {/* Clear Cart */}

            <button
              onClick={clearCart}
              className="
                mt-4
                w-full
                h-12
                rounded-full
                border
                border-red-200
                text-red-500
                hover:bg-red-500
                hover:text-white
                transition-all
                duration-300
              "
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