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
  setPageIndex,
  setPageSize,
  setTotalPages,
  pageIndexReducer,
  totalPagesReducer,
  pageSizeReducer,
  count,
  showAll,
}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state: { pageIndex, pageSize },
    gotoPage,
    page,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage
  } = useTable(
    {
      columns,
      data: data, // Use the page data for rendering
      count: count,
      initialState: { pageIndex: pageIndexReducer, pageSize: pageSizeReducer }, // Initial state from Redux
      pageCount: totalPagesReducer, // Page count from Redux
    },
    usePagination
  );

  console.log("page",page)
  // const canPreviousPage = previousPage ? true : false;
  // const canNextPage = nextPage ? true : false;
  // console.log("gotopage",gotoPage)
  // console.log("previousPage",previousPage)
  // console.log("nextPage",nextPage)
  // console.log("canNextPage",canNextPage)
  // console.log("canPreviousPage",canPreviousPage)
  useEffect(() => {
    // Dispatch action to set total pages
    setTotalPages(Math.ceil(count / pageSizeReducer));
  }, [count, pageSizeReducer, setTotalPages]);

  const handleSetPageIndex = (newPageIndex,e) => {
    gotoPage(newPageIndex);
    setPageIndex(newPageIndex); // Dispatch action to set new page index
    console.log("handleSetPageIndex",newPageIndex,pageSizeReducer)
    showAll(newPageIndex, pageSizeReducer); // Fetch data for the new page
  };

  const handleSetPageSize = newPageSize => {

    setPageSize(newPageSize); // Dispatch action to set new page size
    showAll(pageIndexReducer, newPageSize); // Fetch data for the new page size
    console.log("showAll",showAll(pageIndexReducer,newPageSize))
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
          {row.original && row.original.id && (
            <ModifyTableButton rowID={row.original.id} deleteAction={deleteAction} showOneRow={showOneRow} showOneRowData={showOneRowData} />
          )}
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
          <button onClick={(e) => handleSetPageIndex(0,e)} disabled={!canPreviousPage}>
            {'<<'}
          </button>
          <button onClick={(e)=>handleSetPageIndex(pageIndex-1,e)} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={(e)=>handleSetPageIndex(pageIndex+1,e)} disabled={!canNextPage}>
            Next
          </button>
          <button onClick={(e) => handleSetPageIndex(totalPagesReducer - 1,e)} disabled={!canNextPage}>
            {'>>'}
          </button>
          <select
            value={pageSize}
            onChange={e => {
              handleSetPageSize(Number(e.target.value));
            }}
          >
            {[0, 10, 20, 30, 40, 50].map(pageSizeOption => (
              <option key={pageSizeOption} value={pageSizeOption}>
                Show {pageSizeOption}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};


export default DynamicTable;
