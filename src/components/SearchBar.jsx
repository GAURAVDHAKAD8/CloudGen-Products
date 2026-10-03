export default function SearchBar({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="search" className="field__label">
        Search
      </label>
      <input
        id="search"
        type="search"
        className="field__input"
        placeholder="Search by product name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
