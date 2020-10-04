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

function Table({
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
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
    },
    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  return (
    <>
      <pre>
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
      </pre>
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
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
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
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
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

function AdminPages(props) {
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState({ Id: "hi", Enabled: "not today" });
  const [modal, setModal] = useState(false);
  const [display, setDisplay] = useState("");
  const columns = props.formConfig;
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const fetchIdRef = React.useRef(0);

  const toggle = (type) => {
    setDisplay(type);
    setModal(!modal);
  };

  const fetchData = async ({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current;

    setLoading(true);

    if (fetchId === fetchIdRef.current) {
      await axios
        .get(
          `https://localhost:5001/${props.apiEndpoint}?pageSize=${pageSize}&page=${pageIndex}`
        )
        .then((res) => {
          setData(res.data.results);
          setPageCount(Math.ceil(res.data.count / pageSize));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <CContainer>
      <CCard>
        <CCardHeader>AdminPages</CCardHeader>
        <CCardBody>
          <Table
            toggle={toggle}
            columns={columns}
            data={data}
            fetchData={fetchData}
            loading={loading}
            pageCount={pageCount}
          />
          <AdminForm
            formConfig={props.formConfig}
            initialValues={props.initialValues}
            yupSchema={props.yupSchema}
            rowData={rowData}
            modal={modal}
            toggle={() => toggle()}
            display={display}
          />
        </CCardBody>
      </CCard>
    </CContainer>
  );
}

export default AdminPages;
