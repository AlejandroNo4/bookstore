import PropTypes from 'prop-types';

export default function CategoryFilter({ selectHandler }) {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryList = categories.map((c) => <option key={c}>{c}</option>);
  const handleChange = (val) => selectHandler(val);

  return (
    <form>
      <p>Filter by category:</p>
      <select name="categoryName" className="i-field" onChange={(e) => handleChange(e.target.value)} value="Category">
        {categoryList}
      </select>
    </form>
  );
}

CategoryFilter.defaultProps = {
  selectHandler: null,
};

CategoryFilter.propTypes = {
  selectHandler: PropTypes.func,
};
