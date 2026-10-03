export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="notice notice--error" role="alert">
      <h2 className="notice__title">Something went wrong</h2>
      <p className="notice__text">{message}</p>
      {onRetry && (
        <button type="button" className="btn" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
