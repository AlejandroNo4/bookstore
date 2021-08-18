import PropTypes from 'prop-types';
import circle from '../assets/circle-percent.svg';

export default function Book({
  id, title, category, clickHandler,
}) {
  const handleClick = (book) => clickHandler(book);

  return (
    <div className="book-panel d-flex align-center justyfy-between border-gray">
      <div>
        <p className="category bold-font">{category}</p>
        <p className="title bold-font">{title}</p>
        <span className="link pointer">Author Name</span>
        <ul className="link-list d-flex align-center">
          <li>
            <button type="button" className="link pointer">
              Commens
            </button>
          </li>
          <li className="line border-gray" />
          <li>
            <button
              type="button"
              className="link pointer"
              onClick={() => handleClick({ id, title, category })}
            >
              Remove
            </button>
          </li>
          <li className="line border-gray" />
          <li>
            <button type="button" className="link pointer">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="d-flex align-center">
        <div className="d-flex progress-container-left">
          <img src={circle} alt="progress icon" className="circle" />
          <div>
            <p className="percentage">0%</p>
            <p className="opacity">Completed</p>
          </div>
        </div>
        <div className="line-two border-gray" />
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
