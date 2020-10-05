import * as yup from "yup";

export const formConfig = [
  {
    Header: "Id",
    accessor: "Id",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Scope",
    accessor: "Scope",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Client Id",
    accessor: "ClientId",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
];

export const yupSchema = yup.object({
  Id: yup.number().required("Id is required."),
  Scope: yup.string().required("Scope is required."),
  ClientId: yup.number().required("ClientId is required."),
});

export const initialValues = getInitialValues(formConfig);

function getInitialValues(formConfig) {
  let obj = {};
  formConfig.map((c) => {
    obj[c.name] = c.initialValue;
    obj[c.accessor] = c.initialValue;
  });

  return obj;
}

{
  /* <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          </div> */
}
{
  /* <pre>
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
          </pre> */
}
{
  /* <CDataTable
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
        /> */
}
