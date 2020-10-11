import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Clients = React.lazy(() =>
  import("./views/identity-server/clients/Clients")
);
const Swagger = React.lazy(() =>
  import("./views/identity-server/swagger/Swagger")
);
const ClientScopes = React.lazy(() =>
  import("./views/identity-server/client-scopes/ClientScopes")
);
const ClientSecrets = React.lazy(() =>
  import("./views/identity-server/client-secrets/ClientSecrets")
);
const ApiResources = React.lazy(() =>
  import("./views/api-m/api-resources/ApiResources")
);
const ApiClients = React.lazy(() => import("./views/api-m/clients/Clients"));

const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/api-m/api-resources",
    name: "API Resources",
    component: ApiResources,
  },
  { path: "/api-m/clients", name: "Clients", component: ApiClients },
  {
    path: "/identity-server/client-secrets",
    name: "Client Secrets",
    component: ClientSecrets,
  },
  {
    path: "/identity-server/client-scopes",
    name: "Client Scopes",
    component: ClientScopes,
  },
  { path: "/identity-server/clients", name: "Clients", component: Clients },
  { path: "/swagger/identity-server", name: "Swagger", component: Swagger },
  { path: "/", exact: true, name: "Home" },
];

export default routes;
