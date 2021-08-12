import { useSelector } from 'react-redux';
import Book from '../components/Book';

export default function BooksList() {
  const allBooks = useSelector((state) => state.bookReducer);
  return (
    <table>
      <tbody>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category;</th>
        </tr>
        {allBooks.map((book) => (
          <Book id={book.id} title={book.title} category={book.category} key={book.id} />
        ))}
      </tbody>
    </table>
  );
}
