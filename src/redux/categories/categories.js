// actions
const CHECK_STATUS = '/src/redux/Categories/CHECKING_STATUS';

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

// action creators
export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under construction',
});
