import { CSVLink } from 'react-csv';
import React from 'react';

const CsvLink = ({ data }) => {
  const csvData = Array.isArray(data) ? data : [];
  console.log("csv",csvData)
  return (
    <CSVLink
      data={csvData.map(({ createdAt, updatedAt, ...rest }) => rest)}
      className="btn btn-danger btn-sm"
    >
      Download CSV
    </CSVLink>
  );
};

export default CsvLink;