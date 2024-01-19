import React from 'react';
import { useTable } from 'react-table';
import ModifyTableButton from '../ModifyTableButton'
const DynamicTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (

    <div className="table-responsive ">
      <table {...getTableProps()} className="table table-dark table-striped w-75 container">
      
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className='trip-table-th'>
                  {column.render('Header')}
                </th>
              ))}
              <th>Edit/Delete</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              
              <tr {...row.getRowProps()} style={{ borderBottom: '1px solid black' }}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} style={{ padding: '8px' }}>
                    {cell.render('Cell')}
                  </td>))}
                  <td><ModifyTableButton/></td>
                
              </tr>
         
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
