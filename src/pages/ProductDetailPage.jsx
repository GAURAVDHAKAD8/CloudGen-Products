import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        setError(null);
        setProduct(null);
        const data = await getProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);

  return (
    <section>
      <Link to="/" className="back-link">
        ← Back to Products
      </Link>

      {loading && <Loader label="Loading product…" />}
      {error && (
        <ErrorMessage
          message={error}
          onRetry={() => window.location.reload()}
        />
      )}

      {product && (
        <div className="detail">
          <div className="detail__image-wrap">
            <img
              className="detail__image"
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="detail__info">
            <span className="chip">{product.category}</span>
            <h1 className="detail__title">{product.title}</h1>
            <p className="detail__price">${product.price.toFixed(2)}</p>
            {product.rating && (
              <p className="detail__rating">
                Rated {product.rating.rate} / 5 by {product.rating.count} buyers
              </p>
            )}
            <h2 className="detail__heading">Description</h2>
            <p className="detail__description">{product.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}