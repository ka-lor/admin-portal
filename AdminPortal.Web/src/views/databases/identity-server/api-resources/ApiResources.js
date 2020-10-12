import React from "react";
import { formConfig, yupSchema, initialValues, columnNames } from "./Config";
import AdminPages from "../../../../reusable/admin-pages/AdminPages";

function ApiResources() {
  return (
    <div>
      <AdminPages
        formConfig={formConfig}
        yupSchema={yupSchema}
        initialValues={initialValues}
        apiEndpoint="api/v1/admin-portal/controllers/api-resources"
      />
    </div>
  );
}

export default ApiResources;
