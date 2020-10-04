import React, { useState, useEffect } from "react";
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
    padding: ".5rem 1.25rem",
    "&:hover": {
      backgroundColor: "red",
    },
  },
};

function AdminPages(props) {
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState({ Id: "hi", Enabled: "not today" });
  const [modal, setModal] = useState(false);
  const [display, setDisplay] = useState("");
  const columns = props.formConfig;

  const toggle = (type) => {
    setDisplay(type);
    setModal(!modal);
  };

  const callApi = async () => {
    await axios
      .get(`https://localhost:5001/${props.apiEndpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      allColumns,
      getToggleHideAllColumnsProps,
      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page

      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable({
      columns,
      data,
      initialState: { pageIndex: 0 },
      usePagination,
    });

    return (
      <CContainer>
        <CCard>
          <CCardHeader>AdminPages</CCardHeader>
          <CCardBody>
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
                          <input
                            type="checkbox"
                            {...column.getToggleHiddenProps()}
                          />{" "}
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
                className="table table-striped table-hover"
                {...getTableProps()}
              >
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
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <CButton
                  variant="outline"
                  color="secondary"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {"<<"}
                </CButton>{" "}
                <CButton
                  variant="outline"
                  color="secondary"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {"<"}
                </CButton>{" "}
                <CButton
                  variant="outline"
                  color="secondary"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {">"}
                </CButton>{" "}
                <CButton
                  variant="outline"
                  color="secondary"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {">>"}
                </CButton>{" "}
              </div>
              <div>
                {/* <CFormGroup className="pr-1">
                  <CLabel htmlFor="exampleInputName2" className="pr-1">Name</CLabel>
                  <CInput id="exampleInputName2" placeholder="Jane Doe" required />
                </CFormGroup> */}
                <span>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {rows.length}
                  </strong>{" "}
                </span>
                <span>| Go to page: </span>{" "}
                <input type="number" value={1} style={{ width: 50 }} />
              </div>
              <div>
                <CFormGroup>
                  <CSelect
                    custom
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                    id=""
                    autoComplete="name"
                  >
                    {[5, 10, 20, 50, 100].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize}
                      </option>
                    ))}
                  </CSelect>
                </CFormGroup>
              </div>
            </div>
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
            {/* <CDataTable
            striped={true}
            tableFilter={true}
            hover
            items={data}
            bordered
            onRowClick={(e) => {
              setRowData(e);
              toggle("edit");
            }}
            itemsPerPage={5}
            itemsPerPageSelect={true}
            pagination
            scopedSlots={{
              enabled: (item) => (
                <td>
                  <CBadge color={item.eEabled ? "success" : "danger"}>
                    {item.Enabled ? "Enabled" : "Disabled"}
                  </CBadge>
                </td>
              ),
            }}
          /> */}
          </CCardBody>
        </CCard>
        <AdminForm
          formConfig={props.formConfig}
          initialValues={props.initialValues}
          yupSchema={props.yupSchema}
          rowData={rowData}
          modal={modal}
          toggle={() => toggle()}
          display={display}
        />
      </CContainer>
    );
  }

  useEffect(() => {
    callApi();
  }, []);

  return <Table data={data} columns={columns} />;
}

export default AdminPages;
