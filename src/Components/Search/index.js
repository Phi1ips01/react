// Search.js
import React from 'react';

const Search = ({ value, onChange }) => {
    return(
      <div className='search'>
<input
  type="text"
  placeholder="🔍 Search..."
  value={value}
  onChange={(e) => onChange(e.target.value)}
  className='search-input'
/>
  </div>
)}

export default Search;
