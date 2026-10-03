import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="notice">
      <h1 className="notice__title">Page not found</h1>
      <p className="notice__text">That address doesn't lead anywhere.</p>
      <Link to="/" className="btn">
        Go to products
      </Link>
    </div>
  );
}
