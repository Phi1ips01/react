// Search.js
import React from 'react';

const Search = ({ onSubmit,columns }) => {
    return(
      
      <div className='search'>
      <form onSubmit={onSubmit}>
        <select name='searchCol' id='searchCol' className='search-dropdown'>
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
        <button type='submit' className='search-button'>
          <svg className='icon-magnifier' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25a1 1 0 1 0 1.41-1.41l-4.25-4.25zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/>
          </svg>
        </button>
      </form>
    </div>
)}

export default Search;
