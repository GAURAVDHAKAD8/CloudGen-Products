import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card__link">
        <div className="card__image-wrap">
          <img
            className="card__image"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
        </div>
        <div className="card__body">
          <span className="chip">{product.category}</span>
          <h2 className="card__title">{product.title}</h2>
          <p className="card__price">${product.price.toFixed(2)}</p>
          <span className="card__cta">View details</span>
        </div>
      </Link>
    </article>
  );
}