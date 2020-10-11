import React, { useState, useEffect, useRef } from "react";
import { CContainer, CCard, CCardBody, CCardHeader } from "@coreui/react";
import AdminForm from "./AdminForm";
import axios from "axios";

import AdminDataTable from "./AdminDataTable";

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

  const fetchData = async ({ pageSize, pageIndex, sortBy }) => {
    const fetchId = ++fetchIdRef.current;
    let sortQuery = "";

    if (sortBy.length > 0) {
      sortQuery = `&orderBy=${sortBy[0].id}&desc=${sortBy[0].desc}`;
    }

    console.log(sortBy.length);

    setLoading(true);

    if (fetchId === fetchIdRef.current) {
      await axios
        .get(
          `https://localhost:5001/${props.apiEndpoint}?pageSize=${pageSize}&page=${pageIndex}${sortQuery}`
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
          <AdminDataTable
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
