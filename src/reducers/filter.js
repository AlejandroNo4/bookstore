const initialState = {
  filter: 'All',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, filter: action.payload.filter };
    case 'REMOVE_FILTER':
      return { ...initialState };
    default:
      return state;
  }
}
