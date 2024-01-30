import React from 'react';
import { useTable } from 'react-table';
import ModifyTableButton from '../ModifyTableButton';

const DynamicTable = ({ columns, data, className, deleteAction  }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  console.log("tableprops",deleteAction)
  return (
    <div className="grid grid-cols-1">
      <div className="grid-item">
        <table {...getTableProps()} className={`table table-dark table-striped container w-100` }>
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
              console.log("table component", row);
              return (
                <tr {...row.getRowProps()} style={{ borderBottom: '1px solid black' }}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} style={{ padding: '1px' }}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                  <td>
                    {/* Assuming data is an array of objects and each object has an 'id' property */}
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
