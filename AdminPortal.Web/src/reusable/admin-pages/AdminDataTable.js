import React, { useState, useEffect, useRef } from "react";
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CBadge,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CFormGroup,
  CSelect,
  CInput,
  CLabel,
  CRow,
  CCol,
} from "@coreui/react";
import AdminForm from "./AdminForm";
import axios from "axios";
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from "react-table";

const style = {
  dropDownItem: {
    backgroundColor: "transparent",
    color: "#4f5d73",
    width: "100%",
    padding: ".1rem 1rem",
    "&:hover": {
      backgroundColor: "red",
    },
  },
};

function AdminDataTable({
  columns,
  data,
  toggle,
  fetchData,
  loading,
  pageCount: controlledPageCount,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, sortBy },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 20 }, // Pass our hoisted table state
      manualSortBy: true,
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
      autoResetSortBy: false,
      autoResetPage: false,
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize, sortBy });
  }, [pageIndex, pageSize, sortBy]);

  return (
    <>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div></div>
        <div style={{ marginLeft: 8 }}>
          <CDropdown>
            <CDropdownToggle caret color="primary">
              Columns
            </CDropdownToggle>
            <CDropdownMenu
              placement="bottom-end"
              style={{ maxHeight: 400, overflow: "auto" }}
            >
              {allColumns.map((column) => (
                <div key={column.id} style={style.dropDownItem}>
                  <label>
                    <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
                    {column.id}
                  </label>
                </div>
              ))}
            </CDropdownMenu>
          </CDropdown>
        </div>
        <div style={{ marginLeft: 8 }}>
          <CButton color="primary" onClick={() => toggle("add")}>
            Add
          </CButton>
        </div>
      </div>
      <br />
      <div className="table-responsive">
        <table className="table table-striped table-hover" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <div
        className="pagination"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <CButton
            color="secondary"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </CButton>{" "}
        </div>
        <div>
          <CLabel>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </CLabel>
        </div>
        <div>
          <CSelect
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </CSelect>
        </div>
      </div>
    </>
  );
}

export default AdminDataTable;
