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
import { CIcon } from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
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
  setRowData,
  pageCount: controlledPageCount,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
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
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        sortBy: [{ id: "Id", desc: false }],
      }, // Pass our hoisted table state
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
        <table
          className={`table table-striped table-hover${loading && " loading"}`}
          {...getTableProps()}
        >
          <thead style={{ tableLayout: "fixed" }}>
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
                          ? " -- down"
                          : " -- up"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody style={{ tableLayout: "fixed" }} {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  onClick={() => {
                    setRowData(row.values);
                    toggle("view");
                  }}
                >
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
            disabled={!canPreviousPage || loading}
          >
            {"<<"}
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={() => previousPage()}
            disabled={!canPreviousPage || loading}
          >
            {"<"}
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={() => nextPage()}
            disabled={!canNextPage || loading}
          >
            {">"}
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage || loading}
          >
            {">>"}
          </CButton>{" "}
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </div>
        <div>
          <CSelect
            value={pageSize}
            disabled={loading}
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
