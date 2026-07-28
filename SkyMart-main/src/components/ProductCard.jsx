// import React, { useContext } from "react";
// import { ShoppingCart, Check, Star } from "lucide-react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router";
// import { motion } from "framer-motion";

// const ProductCard = ({ product }) => {
//   const { cartItems, addToCart } = useContext(CartContext);

//   const isAdded = cartItems.some((item) => item.id === product.id);

//   return (
//     <Link to={`/products/${product.id}`} className="block">
//       <motion.div
//         whileHover={{ y: -8 }}
//         whileTap={{ scale: 0.98 }}
//         transition={{ duration: 0.25 }}
//         className="neu group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
//       >
//         {/* Image */}
//         <div className="relative bg-white h-[235px] flex items-center justify-center px-6 overflow-hidden rounded-t-2xl">
//           <span className="absolute top-4 left-4 bg-[#6B6B6B] text-white text-[12px] px-3 py-1 rounded-full capitalize font-medium z-10">
//             {product.category}
//           </span>

//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             className="max-h-[170px] object-contain transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>

//         {/* Content */}
//         <div className="px-5 py-4">
//           {/* Category */}
//           <p className="uppercase tracking-[2px] text-[11px] text-[#666] font-medium">
//             {product.category}
//           </p>

//           {/* Title */}
//           <h3
//             className="mt-2 text-[15px] leading-[22px] text-white font-semibold line-clamp-2 min-h-[44px]"
//             style={{ fontFamily: "Syne" }}
//           >
//             {product.title}
//           </h3>

//           {/* Rating */}
//           <div className="flex items-center gap-0.5 mt-3">
//             {[...Array(5)].map((_, index) => (
//               <Star
//                 key={index}
//                 size={13}
//                 fill={
//                   index < Math.round(product.rating) ? "#FACC15" : "transparent"
//                 }
//                 className="text-yellow-400"
//               />
//             ))}

//             <span className="text-[#666] text-[12px] ml-1">
//               ({product.stock})
//             </span>
//           </div>

//           {/* Divider */}
//           <div className="border-t border-white/5 my-4"></div>

//           {/* Bottom */}
//           <div className="flex items-center justify-between">
//             <h2
//               className="text-[18px] text-[#FF8FC7] font-semibold"
//               style={{ fontFamily: "Clash Display" }}
//             >
//               ${product.price}
//             </h2>

//             {isAdded ? (
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                 }}
//                 className="neu-inset h-9 px-4 rounded-2xl text-green-400 flex items-center gap-2 text-sm font-medium"
//               >
//                 <Check size={15} />
//                 Added
//               </button>
//             ) : (
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   addToCart(product);
//                 }}
//                 className="neu-accent neu-btn h-9 px-5 rounded-2xl text-black flex items-center gap-2 text-sm font-semibold"
//               >
//                 <ShoppingCart size={15} />
//                 Add
//               </button>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </Link>
//   );
// };

// export default ProductCard;

// import React, { useContext } from "react";
// import { ShoppingCart, Check, Star } from "lucide-react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router";
// import { motion } from "framer-motion";

// const ProductCard = ({ product }) => {
//   const { cartItems, addToCart } = useContext(CartContext);

//   const isAdded = cartItems.some((item) => item.id === product.id);

//   return (
//     <Link to={`/products/${product.id}`} className="block">
//       <motion.div
//         whileHover={{ y: -10 }}
//         whileTap={{ scale: 0.98 }}
//         transition={{ duration: 0.3 }}
//         className="
//           group
//           overflow-hidden
//           rounded-3xl
//           bg-white/70
//           backdrop-blur-xl
//           border
//           border-white/40
//           shadow-lg
//           shadow-purple-200/40
//           hover:shadow-2xl
//           hover:shadow-purple-300/40
//           transition-all
//           duration-300
//         "
//       >
//         {/* Image */}
//         <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8F2FF] to-[#EED9F8] h-50 flex items-center justify-center p-6">

//           {/* Category */}
//           <span className="absolute top-4 left-4 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-white capitalize shadow">
//             {product.category}
//           </span>

//           {/* Image */}
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             className="max-h-44 object-contain transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>

//         {/* Content */}
//         <div className="p-5">

//           {/* Title */}
//           <h3
//             className="min-h-[56px] text-lg font-semibold text-[var(--text)] line-clamp-2"
//             style={{ fontFamily: "Syne" }}
//           >
//             {product.title}
//           </h3>

//           {/* Rating */}
//           <div className="mt-3 flex items-center gap-1">

//             {[...Array(5)].map((_, index) => (
//               <Star
//                 key={index}
//                 size={15}
//                 fill={
//                   index < Math.round(product.rating)
//                     ? "#FACC15"
//                     : "transparent"
//                 }
//                 className="text-yellow-400"
//               />
//             ))}

//             <span className="ml-2 text-sm text-[var(--text-soft)]">
//               ({product.stock})
//             </span>

//           </div>

//           {/* Divider */}
//           <div className="my-5 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>

//           {/* Bottom */}
//           <div className="flex items-center justify-between">

//             {/* Price */}
//             <div>
//               <p className="text-xs uppercase tracking-wider text-[var(--text-soft)]">
//                 Price
//               </p>

//               <h2
//                 className="text-2xl text-[var(--primary)]"
//                 style={{ fontFamily: "Clash Display" }}
//               >
//                 ${product.price}
//               </h2>
//             </div>

//             {/* Button */}
//             {isAdded ? (
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                 }}
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-green-100
//                   px-5
//                   py-3
//                   text-sm
//                   font-semibold
//                   text-green-700
//                 "
//               >
//                 <Check size={16} />
//                 Added
//               </button>
//             ) : (
//               <button
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   addToCart(product);
//                 }}
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-gradient-to-r
//                   from-[var(--primary)]
//                   to-[var(--secondary)]
//                   px-5
//                   py-3
//                   text-sm
//                   font-semibold
//                   text-white
//                   shadow-lg
//                   transition-all
//                   duration-300
//                   hover:scale-105
//                 "
//               >
//                 <ShoppingCart size={16} />
//                 Add
//               </button>
//             )}

//           </div>

//         </div>
//       </motion.div>
//     </Link>
//   );
// };

// export default ProductCard;

import React, { useContext } from "react";
import { ShoppingCart, Check, Star, Heart } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  const isAdded = cartItems.some((item) => item.id === product.id);

  return (
    <Link to={`/products/${product.id}`} className="block">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-52 flex items-center justify-center bg-gradient-to-br from-white via-[#F9F3FF] to-[#EDD9F7]">

          {/* Category */}
          <span className="absolute top-4 left-4 px-4 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-semibold capitalize">
            {product.category}
          </span>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--primary)] transition hover:scale-110"
          >
            <Heart size={18} />
          </button>

          {/* Product */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-36 object-contain transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-5">

          {/* Title */}
          <h3
            className="text-xl font-semibold text-[var(--text)] line-clamp-2 min-h-[58px]"
            style={{ fontFamily: "Syne" }}
          >
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-3">

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

            <span className="ml-2 text-sm text-[var(--text-soft)] whitespace-nowrap">
              {product.rating} ({product.stock})
            </span>

          </div>

          {/* Divider */}
          <div className="my-4 border-t border-purple-100"></div>

          {/* Bottom */}
          <div className="flex items-center justify-between gap-3">

            {/* Price */}
            <div>
              <h2
                className="text-3xl text-[var(--primary)]"
                style={{ fontFamily: "Clash Display" }}
              >
                ${product.price}
              </h2>

              <p className="text-sm text-green-600 font-medium">
                Free Delivery
              </p>
            </div>

            {/* Button */}
            {isAdded ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className="flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-green-100 text-green-700 font-semibold"
              >
                <Check size={18} />
                Added
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold hover:scale-105 transition"
              >
                <ShoppingCart size={17} />
                Add
              </button>
            )}
          </div>

        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
