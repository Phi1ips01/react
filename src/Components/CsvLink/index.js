import { CSVDownload } from 'react-csv';
import React from 'react';
import { format } from 'date-fns';
const CsvLink = ({ data,name,columns }) => {
  const now = new Date();
const formattedDate = format(now, 'yyyyMMddHHmm');
  const csvData = Array.isArray(data) ? data : [];
  console.log("csv",columns)
  const slicedColumns = columns.slice(0, -2);

  const headers = slicedColumns.map(column => ({
    label: column.Header.charAt(0).toUpperCase() + column.Header.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
    key: column.accessor,
  }));
  // const headers = columns.map(column => ({
  //   Header: column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' '), // Convert underscore to space and capitalize
  //   accessor: column,
  // }));
  return (
    <>
    
    <CSVDownload
      target="_blank" 
      headers={headers}
      asyncOnClick={true}
      filename={`${formattedDate}_name`}
      data={csvData.map(({ createdAt, updatedAt, ...rest }) => rest)}
      className="btn btn-danger btn-sm"
    >
      Download CSV
    </CSVDownload>
    </>
  );
};

export default CsvLink;