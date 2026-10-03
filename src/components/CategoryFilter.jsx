export const ALL_CATEGORIES = "all";

export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="field">
      <label htmlFor="category" className="field__label">
        Category
      </label>
      <select
        id="category"
        className="field__input"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value={ALL_CATEGORIES}>All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
