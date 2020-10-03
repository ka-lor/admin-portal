import React from "react";
import {
  formConfig,
  yupSchema,
  initialValues,
} from "../../configs/tables/ClientScopes";
import AdminPages from "../../reusable/admin-pages/AdminPages";

function ClientScopes() {
  return (
    <div>
      <AdminPages
        formConfig={formConfig}
        yupSchema={yupSchema}
        initialValues={initialValues}
        apiEndpoint="api/v1/admin-portal/controllers/client-scopes"
      />
    </div>
  );
}

export default ClientScopes;
