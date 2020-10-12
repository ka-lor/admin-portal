import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { CContainer, CCard, CCardHeader, CCardBody } from "@coreui/react";

function Swagger() {
  return (
    // <CContainer>
    <CCard>
      <CCardHeader>Identity Server API Swagger</CCardHeader>
      <CCardBody>
        <SwaggerUI url="https://localhost:5001/swagger/v1/swagger.json" />
      </CCardBody>
    </CCard>
    // </CContainer>
  );
}

export default Swagger;
