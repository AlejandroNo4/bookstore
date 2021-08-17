import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

export default function App() {
  return (
    <div className="body">
      <BooksList />
      <BooksForm />
    </div>
  );
}
