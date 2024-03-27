  // DynamicTable.js

  import React, { useMemo } from 'react';
  import { useTable, useSortBy } from 'react-table';
  import Search from '../Search';
  import ModifyTableButton from '../ModifyTableButton';
  import Pagination from 'react-bootstrap/Pagination';


  const DynamicTable = ({
    columns,
    data,
    searchColumns, 
    handleSearch,
    handleClear,
    deleteAction,
    showOneRow,
    showOneRowData,
    count,
    showAll,
    setCurrentPage,
    currentPageReducer,
    
  }) => {
    const tableData = useMemo(() => data, [data]);
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data: tableData,
        initialState: {
          hiddenColumns: columns
            .filter(column => column.showByDefault)
            .map(column => column.accessor),
        },
      },
      useSortBy
    );
    const pageSize=10


    const handlePageChange = (pageNumber,pageSize) => {
      console.log("handlepagechange",pageNumber,pageSize)
      setCurrentPage(pageNumber);
      showAll(pageNumber, pageSize); // Assuming 10 items per page
    };


    return (
      <div className="grid grid-cols-1">
        <div className="grid-item">
          {console.log("table component search function columns",searchColumns)}
          <Search onSubmit={handleSearch} columns={searchColumns} onClear={handleClear}/>

          <div className="table-container">
            <table {...getTableProps()} className="table table-striped  ">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, index) => (
                      <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className={
                          index === 0 || index === columns.length - 1 || index === columns.length - 2
                            ? 'hidden'
                            : 'trip-table-th'
                        }
                      >
                        {column.render('Header')}
                        {column.isSorted && <span>{column.isSortedDesc ? '🔽' : '🔼'}</span>}
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
                      {row.cells.map((cell, index) => (
                        <td
                          key={index}
                          {...cell.getCellProps()}
                          style={{
                            padding: '1px',
                            display:
                              index === 0 || index === columns.length - 1 || index === columns.length - 2
                                ? 'none'
                                : 'table-cell',
                          }}
                        >
                          {cell.render('Cell')}
                        </td>
                      ))}
                      <td>
                        {row.original?.id && (
                          <ModifyTableButton
                            rowID={row.original.id}
                            deleteAction={deleteAction}
                            showOneRow={showOneRow}
                            showOneRowData={showOneRowData}
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
                <div className='pagination-container'>
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(Math.max(currentPageReducer - 1, 1),pageSize)}
              disabled={currentPageReducer <= 1}
              className='pagination-item'

            />
            {Array.from({ length: Math.ceil(count / pageSize) }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPageReducer}
                onClick={() => handlePageChange(index + 1,pageSize)}
                className='pagination-item'
              >
                {index + 1}
              </Pagination.Item>
            ))}
          <Pagination.Next
            onClick={() => handlePageChange(Math.min(currentPageReducer + 1, Math.ceil(count / pageSize)),pageSize)}
            disabled={currentPageReducer === Math.ceil(count / pageSize)}
            className='pagination-item'

          />
          </Pagination>
          </div>
        </div>
      </div>
    );
  };

  export default DynamicTable;
