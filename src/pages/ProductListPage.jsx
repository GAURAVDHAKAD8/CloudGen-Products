import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import CategoryFilter, { ALL_CATEGORIES } from "../components/CategoryFilter";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORIES);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

const q = query.trim().toLowerCase();
const visible = products.filter(
  (p) =>
    (category === ALL_CATEGORIES || p.category === category) &&
    p.title.toLowerCase().includes(q)
);

  const clearFilters = () => {
    setQuery("");
    setCategory(ALL_CATEGORIES);
  };

  if (loading) return <Loader label="Loading products…" />;
  if (error)
    return (
      <ErrorMessage
        message={error}
        onRetry={() => window.location.reload()}
      />
    );

  return (
    <section>
      <div className="page-head">
        <h1 className="page-title">All products</h1>
        <p className="page-sub">
          {visible.length} of {products.length} items
        </p>
      </div>

      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />
      </div>

      {visible.length === 0 ? (
        <div className="notice">
          <h2 className="notice__title">No products match</h2>
          <p className="notice__text">
            Try a different search term or choose another category.
          </p>
          <button type="button" className="btn" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}