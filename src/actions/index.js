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
  const { id, title, category } = book;
  return {
    type: 'REMOVE_BOOK',
    payload: {
      id,
      title,
      category,
    },
  };
};

const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  payload: {
    filter,
  },
});

const removeFilter = () => ({ type: 'REMOVE_FILTER' });

export {
  createBook, deleteBook, changeFilter, removeFilter,
};
