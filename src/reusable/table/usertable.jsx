import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import './usertable.css'

const TableFrame = ({ columns, recordData }) => {
  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  useEffect(() => {
    setRecords(recordData);
    setFilterRecords(recordData);
  }, [recordData]);

  const handleFilter = (event) => {
    const newData = records.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilterRecords(newData);
  };

  return (
    <div className="table-container">
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
        />
      </div>
      <DataTable
       className="table-layout"
        columns={columns}
        data={filterRecords.length > 0 ? filterRecords : ""}
        pagination
        paginationPerPage={5}
        fixedHeader
      />
    </div>
  );
};

export default TableFrame;
