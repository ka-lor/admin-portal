import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Clients = React.lazy(() => import("./views/clients/Clients"));
const Swagger = React.lazy(() =>
  import("./views/identity-server/swagger/Swagger")
);
const ClientScopes = React.lazy(() =>
  import("./views/client-scopes/ClientScopes")
);
const ClientSecrets = React.lazy(() =>
  import("./views/client-secrets/ClientSecrets")
);

const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
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
