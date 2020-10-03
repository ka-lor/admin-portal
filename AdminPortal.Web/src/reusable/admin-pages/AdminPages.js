import React, { useState, useEffect } from "react";
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CBadge,
  CButton,
} from "@coreui/react";
import AdminForm from "./AdminForm";
import axios from "axios";

function AdminPages(props) {
  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState({ Id: "hi", Enabled: "not today" });
  const [modal, setModal] = useState(false);
  const [display, setDisplay] = useState("");

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

  useEffect(() => {
    callApi();
  }, []);

  return (
    <CContainer>
      <CCard>
        <CCardHeader>AdminPages</CCardHeader>
        <CCardBody>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <CButton color="primary" onClick={() => toggle("add")}>
                Add
              </CButton>
            </div>
          </div>
          <br />
          <CDataTable
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
          />
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

export default AdminPages;
