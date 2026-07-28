import React, { useContext } from "react";
import { ShoppingCart, Check, Star } from "lucide-react";
import { CartContext } from "../context/cart-context";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const MotionDiv = motion.div;

  const isAdded = cartItems.some((item) => item.id === product.id);

  return (
    <Link to={`/products/${product.id}`} className="block">
      <MotionDiv
        whileHover={{ y: -10 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="
          group
          overflow-hidden
          rounded-3xl
          bg-white/70
          backdrop-blur-xl
          border
          border-white/40
          shadow-lg
          shadow-purple-200/40
          hover:shadow-2xl
          hover:shadow-purple-300/40
          transition-all
          duration-300
        "
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white to-[var(--surface)] h-64 flex items-center justify-center p-6">

          {/* Category */}
          <span className="absolute top-4 left-4 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white capitalize shadow">
            {product.category}
          </span>

          {/* Image */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-44 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5">

          {/* Title */}
          <h3
            className="min-h-[56px] text-lg font-semibold text-[var(--text)] line-clamp-2"
            style={{ fontFamily: "Syne" }}
          >
            {product.title}
          </h3>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-1">

            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={15}
                fill={
                  index < Math.round(product.rating)
                    ? "#FACC15"
                    : "transparent"
                }
                className="text-yellow-400"
              />
            ))}

            <span className="ml-2 text-sm text-[var(--text-soft)]">
              ({product.stock})
            </span>

          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>

          {/* Bottom */}
          <div className="flex items-center justify-between">

            {/* Price */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-soft)]">
                Price
              </p>

              <h2
                className="text-2xl text-[var(--primary)]"
                style={{ fontFamily: "Clash Display" }}
              >
                ${product.price}
              </h2>
            </div>

            {/* Button */}
            {isAdded ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-green-100
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-green-700
                "
              >
                <Check size={16} />
                Added
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[var(--primary)]
                  to-[var(--secondary)]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <ShoppingCart size={16} />
                Add
              </button>
            )}

          </div>

        </div>
      </MotionDiv>
    </Link>
  );
};

export default ProductCard;
