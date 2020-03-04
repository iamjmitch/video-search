import React, { useState } from 'react';

const SearchBar = props => {
  const [term, setTerm] = useState('React Js Tutorials');

  const onInputChange = e => {
    setTerm(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    this.props.onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
