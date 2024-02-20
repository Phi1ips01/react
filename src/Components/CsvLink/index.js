import { CSVDownload } from 'react-csv';
import React from 'react';
import { format } from 'date-fns';
const CsvLink = ({ data,name }) => {
  const now = new Date();
const formattedDate = format(now, 'yyyyMMddHHmm');
  const csvData = Array.isArray(data) ? data : [];
  console.log("csv",csvData)
  return (
    <>
    <CSVDownload
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