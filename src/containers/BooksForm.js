export default function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryList = categories.map((c) => <option key={c}>{c}</option>);
  return (
    <form className="book-form">
      <p>Book title:</p>
      <input type="text" id="title" name="title" placeholder="Title" required="true" className="i-field" />
      <p>Select a category:</p>
      <select name="categories" className="i-field">
        {categoryList}
      </select>
    </form>
  );
}
