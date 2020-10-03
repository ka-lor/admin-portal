import React from "react";
import CIcon from "@coreui/icons-react";

export default [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Identity Server"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Clients",
    to: "/identity-server/clients",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Client Secrets",
    to: "/identity-server/client-secrets",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Client Scopes",
    to: "/identity-server/client-scopes",
    icon: "cil-pencil",
  },
];
