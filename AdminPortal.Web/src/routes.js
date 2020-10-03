import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Clients = React.lazy(() => import("./views/clients/Clients"));

const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/identity-server/clients", name: "Clients", component: Clients },
  { path: "/", exact: true, name: "Home" },
];

export default routes;
