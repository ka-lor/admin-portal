import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/", exact: true, name: "Home" },
];

export default routes;
