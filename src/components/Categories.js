import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  return (
    <div className="books-categories">
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
      <p>{categories}</p>
    </div>
  );
};

export default Categories;
