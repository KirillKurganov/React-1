import React from 'react';

export const SearchPanel = () => {
    const searchText = 'Type here for search';
    const searchSTyle = {
      fontSize: '18px'
    };
    return (
      <input style={searchSTyle} placeholder={searchText}/>
    );
  };