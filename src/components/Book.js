import PropTypes from 'prop-types';

export default function Book({
  id, title, category, clickHandler,
}) {
  const handleClick = (book) => clickHandler(book);

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td className="btn-cell">
        <button
          type="button"
          className="btn-delete"
          onClick={() => handleClick({ id, title, category })}
        >
          Remove Book 🗑
        </button>
      </td>
    </tr>
  );
}

Book.defaultProps = {
  clickHandler: null,
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};
