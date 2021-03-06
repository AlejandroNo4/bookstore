import PropTypes from 'prop-types';

export default function CategoryFilter({ selectHandler }) {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryList = categories.map((c) => <option key={c}>{c}</option>);
  const handleChange = (val) => selectHandler(val);

  return (
    <form>
      <select name="categoryName" className="nav-link opacity pointer" onChange={(e) => handleChange(e.target.value)}>
        <option value="" disabled selected hidden>CATEGORIES</option>
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
