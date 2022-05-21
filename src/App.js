import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import "./App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [pageCount, setPageCount] = useState(1);

  const planetsData = useMemo(() => [...data], [data]);
  const planetsColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0])
            .filter(
              (planet) =>
                !["edited", "residents", "films", "created", "url"].includes(
                  planet
                )
            )
            .map((key) => ({
              Header:
                key.charAt(0).toUpperCase() + key.slice(1).replace("_", " "),
              accessor: key,
            }))
        : [],
    [data]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: planetsColumns, data: planetsData });

  const fetchData = () => {
    fetch(`https://swapi.dev/api/planets/?page=${pageCount}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((newData) => {
        if (newData.next) {
          setPageCount(pageCount + 1);
        }
        setData([...data, ...newData.results]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [pageCount]);

  return (
    <TableContainer component={Paper}>
      <Table {...getTableProps}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  style={{ backgroundColor: "#473485", color: "white" }}
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell, index) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
