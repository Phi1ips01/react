// DynamicTable.js
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import Search from '../Search'
import ModifyTableButton from '../ModifyTableButton'
const DynamicTable = ({ columns, data, searchData, setSearchTerm, deleteAction }) => {
  console.log('Columns:', columns);
  console.log('Data:', data);
  console.log('Search Term:', searchData);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const filteredRows = useMemo(() => {
    if (!searchData) return rows;

    return rows.filter(row => {
      return columns.some(column => {
        const cellValue = String(row.values[column.accessor]).toLowerCase();
        return cellValue.includes(searchData.toLowerCase());
      });
    });
  }, [searchData, rows, columns]);

  const displayRows = searchData ? filteredRows : rows;
  console.log('Filtered Rows:', filteredRows);
  console.log('Display Rows:', displayRows);
  return (
      <div className="grid grid-cols-1">
        <div className="grid-item">
          <Search value={searchData} onChange={setSearchTerm} />
          <table {...getTableProps()} className={`table table-dark table-striped container w-100`}>
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
              {displayRows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} style={{ borderBottom: '1px solid black' }}>
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} style={{ padding: '1px' }}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                    <td>
                      <ModifyTableButton rowID={row.original.id} deleteAction={deleteAction} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default DynamicTable;
