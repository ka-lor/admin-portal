import React from "react";
import {
  formConfig,
  yupSchema,
  initialValues,
} from "../../configs/tables/ClientSecrets";
import AdminPages from "../../reusable/admin-pages/AdminPages";

function ClientSecrets() {
  return (
    <div>
      <AdminPages
        formConfig={formConfig}
        yupSchema={yupSchema}
        initialValues={initialValues}
        apiEndpoint="api/v1/admin-portal/controllers/client-secrets"
      />
    </div>
  );
}

export default ClientSecrets;
