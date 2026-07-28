import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { PackageSearch } from "lucide-react";
import { useSearchParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [sort, setSort] = useState(searchParams.get("sort") || "featured");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setCategory(searchParams.get("category") || "all");
    setSort(searchParams.get("sort") || "featured");
  }, [searchParams]);

  useEffect(() => {
    const params = {};

    if (search.trim()) {
      params.search = search.trim();
    }

    if (category !== "all") {
      params.category = category;
    }

    if (sort !== "featured") {
      params.sort = sort;
    }

    setSearchParams(params, { replace: true });
  }, [search, category, sort, setSearchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products || []);
      } catch (err) {
        console.log("Failed to load products:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      const matchesSearch =
        !normalizedSearch ||
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    switch (sort) {
      case "low-high":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "high-low":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "rating":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [products, search, category, sort]);

  const hasFilters =
    search.trim() || category !== "all" || sort !== "featured";

  return (
    <div className="min-h-screen text-white" style={{ background: "var(--bg)" }}>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <section className="neu rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-sm uppercase tracking-[4px] text-[#FF8FC7]">
            Browse Products
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl font-bold">
            Shop Wisteria Cart
          </h1>

          <p className="mt-4 max-w-2xl text-[#8C8C8C] leading-7">
            Explore curated products, filter by category, and sort the catalog
            to find exactly what you need.
          </p>
        </section>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />

        <section className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">All Products</h2>
            <p className="mt-1 text-sm text-[#8C8C8C]">
              {loading ? "Loading products..." : `${filteredProducts.length} products found`}
            </p>
          </div>

          {hasFilters ? (
            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
                setSort("featured");
              }}
              className="neu-btn neu self-start rounded-2xl px-5 py-3 text-sm font-semibold hover:text-[#FF8FC7] transition"
            >
              Clear Filters
            </button>
          ) : null}
        </section>

        {loading ? (
          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="neu animate-pulse rounded-3xl h-[420px]"
              />
            ))}
          </section>
        ) : null}

        {!loading && error ? (
          <section className="neu mt-8 rounded-3xl px-6 py-12 text-center">
            <p className="text-lg text-red-400">{error}</p>
          </section>
        ) : null}

        {!loading && !error && filteredProducts.length === 0 ? (
          <section className="neu mt-8 rounded-3xl px-6 py-14 text-center">
            <PackageSearch size={42} className="mx-auto text-[#FF8FC7]" />
            <h3 className="mt-5 text-2xl font-semibold">No products found</h3>
            <p className="mt-3 text-[#8C8C8C]">
              Try changing your search, category, or sort options.
            </p>
          </section>
        ) : null}

        {!loading && !error && filteredProducts.length > 0 ? (
          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
