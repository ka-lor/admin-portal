import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Clients = React.lazy(() =>
  import("./views/databases/identity-server/clients/Clients")
);
const Swagger = React.lazy(() =>
  import("./views/identity-server/swagger/Swagger")
);
const ClientScopes = React.lazy(() =>
  import("./views/databases/identity-server/client-scopes/ClientScopes")
);
const ClientSecrets = React.lazy(() =>
  import("./views/databases/identity-server/client-secrets/ClientSecrets")
);
const ApiResources = React.lazy(() =>
  import("./views/api-m/api-resources/ApiResources")
);
const ApiClients = React.lazy(() => import("./views/api-m/clients/Clients"));
const DatabaseApiResources = React.lazy(() =>
  import("./views/databases/identity-server/api-resources/ApiResources")
);
const DatabaseApiResourceSecrets = React.lazy(() =>
  import(
    "./views/databases/identity-server/api-resource-secrets/ApiResourceSecrets"
  )
);
const DatabaseApiResourceScopes = React.lazy(() =>
  import(
    "./views/databases/identity-server/api-resource-scopes/ApiResourceScopes"
  )
);
const DatabaseApiScopes = React.lazy(() =>
  import("./views/databases/identity-server/api-scopes/ApiScopes")
);

const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/api-m/api-resources",
    name: "API Resources",
    component: ApiResources,
  },
  { path: "/api-m/clients", name: "Clients", component: ApiClients },

  { path: "/swagger/identity-server", name: "Swagger", component: Swagger },
  //Database Tables
  {
    path: "/databases/identity-server/client-secrets",
    name: "Client Secrets",
    component: ClientSecrets,
  },
  {
    path: "/databases/identity-server/client-scopes",
    name: "Client Scopes",
    component: ClientScopes,
  },
  {
    path: "/databases/identity-server/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/databases/identity-server/api-resources",
    name: "API Resources",
    component: DatabaseApiResources,
  },
  {
    path: "/databases/identity-server/api-scopes",
    name: "API Scopes",
    component: DatabaseApiScopes,
  },
  {
    path: "/databases/identity-server/api-resource-secrets",
    name: "API Resource Secrets",
    component: DatabaseApiResourceSecrets,
  },
  {
    path: "/databases/identity-server/api-resource-scopes",
    name: "API Resources Scopes",
    component: DatabaseApiResourceScopes,
  },

  { path: "/", exact: true, name: "Home" },
];

export default routes;
