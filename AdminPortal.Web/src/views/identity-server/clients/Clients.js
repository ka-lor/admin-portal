import React from "react";
import {
  formConfig,
  yupSchema,
  initialValues,
  columnNames,
} from "../../../configs/tables/Clients";
import AdminPages from "../../../reusable/admin-pages/AdminPages";

function Clients() {
  return (
    <div>
      <AdminPages
        formConfig={formConfig}
        yupSchema={yupSchema}
        initialValues={initialValues}
        apiEndpoint="api/v1/admin-portal/controllers/clients"
      />
    </div>
  );
}

export default Clients;
