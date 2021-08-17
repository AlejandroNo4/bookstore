import PropTypes from 'prop-types';
import circle from '../assets/circle-percent.svg';

export default function Book({
  id, title, category, clickHandler,
}) {
  const handleClick = (book) => clickHandler(book);

  return (
    <div className="book-panel">
      <div>
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <span className="link pointer">Author Name</span>
        <ul className="link-list">
          <li>
            <button type="button" className="link pointer">
              Commens
            </button>
          </li>
          <li className="line" />
          <li>
            <button
              type="button"
              className="link pointer"
              onClick={() => handleClick({ id, title, category })}
            >
              Remove
            </button>
          </li>
          <li className="line" />
          <li>
            <button type="button" className="link pointer">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="progress-container">
        <div className="d-flex progress-container-left">
          <img src={circle} alt="progress icon" className="circle" />
          <div>
            <p className="percentage">0%</p>
            <p className="opacity">Completed</p>
          </div>
        </div>
        <div className="line-two" />
        <div className="progress-container-right">
          <div className="current-chapter">
            <p className="opacity">CURRENT CHAPTER</p>
            <p className="current-chapter">Introduction</p>
            <button type="button" className="progress-button pointer">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
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
