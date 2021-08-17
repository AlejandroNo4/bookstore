import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import userIcon from '../assets/user-icon.svg';
import { deleteBook, changeFilter, removeFilter } from '../actions';

export default function BooksList() {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.bookReducer);
  const filterBy = useSelector((state) => state.filterReducer);
  const booksToRender = filterBy.filter === 'All'
    ? allBooks
    : allBooks.filter((book) => book.category === filterBy.filter);

  const handleRemoveBook = (book) => {
    dispatch(deleteBook(book));
  };

  const handleFilterChange = (catFilter) => {
    if (catFilter === 'All') {
      dispatch(removeFilter());
    } else {
      dispatch(changeFilter(catFilter));
    }
  };

  return (
    <div>
      <nav className="nav-bar">
        <div className="d-flex links-container">
          <div className="d-flex nav-links-right">
            <button className="button-logo pointer" type="button">Bookstore CMS</button>
            <button type="button" className="nav-link pointer">BOOKS</button>
            <CategoryFilter category="Action" selectHandler={handleFilterChange} />
          </div>
          <button type="button" className="user-btn pointer">
            <img src={userIcon} alt="user icon" className="user-icon" />
          </button>
        </div>
      </nav>
      {booksToRender.map((book) => (
        <Book
          id={book.id}
          title={book.title}
          category={book.category}
          key={book.id}
          clickHandler={handleRemoveBook}
        />
      ))}
    </div>
  );
}
