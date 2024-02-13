import React, { useMemo, useEffect } from 'react';
import { useTable, usePagination } from 'react-table';
import Search from '../Search';
import ModifyTableButton from '../ModifyTableButton';

const DynamicTable = ({
  columns,
  data,
  searchData,
  setSearchTerm,
  deleteAction,
  showOneRow,
  showOneRowData,
  setPageIndexTrip,
  setPageSizeTrip,
  setTotalPagesTrip,
  pageIndexReducer,
  totalPagesReducer,
  pageSizeReducer,
  count,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data: data, // Use the page data for rendering
      initialState: { pageIndex: pageIndexReducer, pageSize: pageSizeReducer }, // Initial state from Redux
      pageCount: totalPagesReducer, // Page count from Redux
    },
    usePagination
  );

  useEffect(() => {
    // Dispatch action to set total pages
    setTotalPagesTrip(Math.ceil(count / pageSizeReducer));
  }, [count, pageSizeReducer, setTotalPagesTrip]);

  const handleSetPageIndex = newPageIndex => {
    gotoPage(newPageIndex);
    setPageIndexTrip(newPageIndex); // Dispatch action to set new page index
  };

  const handleSetPageSize = newPageSize => {
    setPageSizeTrip(newPageSize); // Dispatch action to set new page size
  };

  return (
    <div className="grid grid-cols-1">
      <div className="grid-item">
        <Search value={searchData} onChange={setSearchTerm} />
        <div className="table-container">
          <table {...getTableProps()} className={`table table-dark table-striped container w-100`}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps()}
                      className={index === 0 || index === columns.length - 1 || index === columns.length - 2 ? 'hidden' : 'trip-table-th'}
                    >
                      {column.render('Header')}
                    </th>
                  ))}
                  <th>Edit/Delete</th>
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} style={{ borderBottom: '1px solid black' }}>
                    {row.cells.map((cell, index) => (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '1px',
                          display: index === 0 || index === columns.length - 1 || index === columns.length - 2 ? 'none' : 'table-cell',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    ))}
                    <td>
                      <ModifyTableButton rowID={row.original.id} deleteAction={deleteAction} showOneRow={showOneRow} showOneRowData={showOneRowData} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <span>
            Page <strong>{pageIndex + 1}</strong> of <strong>{totalPagesReducer}</strong>
          </span>
          <button onClick={() => handleSetPageIndex(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button onClick={previousPage} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={nextPage} disabled={!canNextPage}>
            Next
          </button>
          <button onClick={() => handleSetPageIndex(totalPagesReducer - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicTable;
