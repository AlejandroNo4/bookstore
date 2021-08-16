import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

export default function BooksForm() {
  const dispatch = useDispatch();

  const initialState = {
    title: '',
    categoryName: 'Action',
  };
  const [form, updateInput] = useState(initialState);

  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const categoryList = categories.map((c) => <option key={c}>{c}</option>);

  const handleChange = (e) => {
    updateInput({ ...form, [e.target.name]: e.target.value });
  };

  const random = () => Math.floor(Math.random() * (1000 - 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createBook({
        id: random(),
        title: form.title,
        category: form.categoryName,
      }),
    );
    updateInput({ ...initialState });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <p>Book title:</p>
      <input
        type="text"
        id="title"
        name="title"
        required
        className="i-field"
        value={form.title}
        onChange={handleChange}
      />
      <p>Select a category:</p>
      <select
        name="categoryName"
        className="i-field"
        value={form.categoryName}
        onChange={handleChange}
      >
        {categoryList}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
