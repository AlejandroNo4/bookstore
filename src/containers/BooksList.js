import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { deleteBook, changeFilter, removeFilter } from '../actions';

export default function BooksList() {
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.bookReducer);
  const filterBy = useSelector((state) => state.filterReducer);
  const booksToRender = filterBy.filter === 'All' ? allBooks : allBooks.filter((book) => book.category === filterBy.filter);

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
      <div>
        <CategoryFilter category="Action" selectHandler={handleFilterChange} />
      </div>
      <table>
        <tbody>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {booksToRender.map((book) => (
            <Book
              id={book.id}
              title={book.title}
              category={book.category}
              key={book.id}
              clickHandler={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
