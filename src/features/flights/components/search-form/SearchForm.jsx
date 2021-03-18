import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './searchForm.scss';

const SearchForm = ({ direction }) => {
  const [searchText, setSearchText] = useState('');

  const url = direction || 'departure';
  const search = searchText ? `?search=${searchText}` : '';

  return (
    <form className="search-form">
      <i className="search-form__icon fas fa-search fa-2x"></i>
      <input
        className="search-form__input"
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Destination or flight #"
      />
      <Link to={`${url}${search}`}>
        <button type="submit" className="btn search-form__btn">
          Search
        </button>
      </Link>
    </form>
  );
};

export default SearchForm;
