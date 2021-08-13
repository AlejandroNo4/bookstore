import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { deleteBook } from '../actions';

export default function BooksList() {
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(deleteBook(book));
  };

  const allBooks = useSelector((state) => state.bookReducer);
  return (
    <table>
      <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {allBooks.map((book) => (
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
  );
}
