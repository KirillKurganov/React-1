import React from 'react';
import './searchPanel.css';

export const SearchPanel = () => {
    const searchText = 'Search';

    return (
      <input type="text" className="form-control search-input" placeholder={searchText}/>
    );
  };