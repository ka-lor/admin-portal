import React from "react";
import { formConfig, yupSchema, initialValues, columnNames } from "./Config";
import AdminPages from "../../../../reusable/admin-pages/AdminPages";

function ApiResourceScopes() {
  return (
    <div>
      <AdminPages
        formConfig={formConfig}
        yupSchema={yupSchema}
        initialValues={initialValues}
        apiEndpoint="api/v1/admin-portal/controllers/api-resource-scopes"
      />
    </div>
  );
}

export default ApiResourceScopes;
