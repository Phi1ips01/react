// Search.js
import React from 'react';

const Search = ({ onSubmit,columns }) => {
    return(

      <div className='search'>
        <form onSubmit={onSubmit}>
          <select name='searchCol' id='searchCol'>
            <option value="">Select column</option>
            {columns.map(column => (
                <option key={column.accessor} value={column.accessor}>{column.Header}</option>
            ))}
          </select>
        
          <input
            type="text"
            placeholder="🔍 Search..."
            className='search-input'
            name='searchKey'
            id='searchKey'
          />
          <input
          type='submit'
          value={'search'}
          />
        </form> 
  </div>
)}

export default Search;
