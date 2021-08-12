const createBook = (book) => {
  const { id, title, category } = book;
  return {
    type: 'CREATE_BOOK',
    payload: {
      id,
      title,
      category,
    },
  };
};

const deleteBook = (book) => {
  const { id } = book;
  return {
    type: 'REMOVE_BOOK',
    payload: {
      id,
    },
  };
};

export { createBook, deleteBook };
