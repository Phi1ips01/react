  // DynamicTable.js

  import React, { useMemo } from 'react';
  import { useTable, useSortBy } from 'react-table';
  import Search from '../Search';
  import ModifyTableButton from '../ModifyTableButton';
  import { CSVLink } from 'react-csv';
  import Pagination from 'react-bootstrap/Pagination';


  const DynamicTable = ({
    columns,
    data,
    searchData,
    setSearchTerm,
    deleteAction,
    showOneRow,
    showOneRowData,
    count,
    showAll,
    setCurrentPage,
    currentPageReducer
  }) => {
    const tableData = useMemo(() => data, [data]);
console.log("currentPageReducer",currentPageReducer)
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
  console.log("rows table",rows)
    const filteredRows = useMemo(() => {
      if (searchData.trim()=='') return rows.values;

      return rows.filter(row => {
        return columns.some(column => {
          const cellValue = String(row.values[column.accessor]).toLowerCase();
          return cellValue.includes(searchData.toLowerCase());
        });
      });
    }, [searchData, rows, columns]);
    const displayRows = searchData.trim() ? filteredRows : rows;

    const handlePageChange = (pageNumber) => {
      console.log("handlepagechange",pageNumber)
      setCurrentPage(pageNumber);
      showAll(pageNumber, pageSize); // Assuming 10 items per page
    };

    return (
      <div className="grid grid-cols-1">
        <div className="grid-item">
          <Search value={searchData} onChange={setSearchTerm} />

          <div className="table-container">
            <table {...getTableProps()} className="table table-dark table-striped container w-100">
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
                {displayRows.map(row => {
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

          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(Math.max(currentPageReducer - 1, 1))}
              disabled={currentPageReducer <= 1}
            />
            {Array.from({ length: Math.ceil(count / pageSize) }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPageReducer}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          <Pagination.Next
            onClick={() => handlePageChange(Math.min(currentPageReducer + 1, Math.ceil(count / pageSize)))}
            disabled={currentPageReducer === Math.ceil(count / pageSize)}
          />
          </Pagination>
          <CSVLink
            data={data.map(({ createdAt, updatedAt, ...rest }) => rest)}
            className="btn btn-danger btn-sm"
            onClick={() => {
              console.log('You click the link', data); // Your click handling logic
            }}
          >
            Download CSV
          </CSVLink>
        </div>
      </div>
    );
  };

  export default DynamicTable;
