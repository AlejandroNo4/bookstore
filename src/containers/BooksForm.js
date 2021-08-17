import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

export default function BooksForm() {
  const dispatch = useDispatch();

  const initialState = {
    title: '',
    categoryName: 'Category',
  };
  const [form, updateInput] = useState(initialState);
  const [buttonState, updateButtonState] = useState(true);

  const categories = [
    'Category',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const categoryList = categories.map((c) => (c === 'Category' ? <option key={c} value="Category" disabled selected hidden>{c}</option> : <option key={c}>{c}</option>));

  const handleChange = (e) => {
    if (e.target.name === 'categoryName') {
      updateButtonState(false);
    }
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
    updateButtonState(true);
  };

  const buttonStyle = () => {
    const styleName = buttonState === false ? 'btn-add btn-enabled' : 'btn-add btn-disabled';
    return styleName;
  };

  const selectStyle = () => {
    const styleName = form.categoryName === 'Category' ? 'field-with-placeholder' : 'i-field';
    return styleName;
  };

  return (
    <div className="book-form-container">
      <p className="form-title">ADD NEW BOOK</p>
      <form className="d-flex book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="i-field book-field"
          value={form.title}
          placeholder="Book title"
          onChange={handleChange}
        />
        <select
          name="categoryName"
          className={selectStyle()}
          required
          value={form.categoryName}
          onChange={handleChange}
        >
          {categoryList}
        </select>
        <button type="submit" disabled={buttonState} className={buttonStyle()}>ADD BOOK</button>
      </form>
    </div>

  );
}
