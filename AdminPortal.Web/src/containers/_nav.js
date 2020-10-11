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
    _children: ["API Management"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "API Resources",
    to: "/identity-server/clients",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Identity Server"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Tables",
    route: "/identity-server",
    icon: "cil-puzzle",
    _children: [
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
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Swagger",
    to: "/swagger/identity-server",
    icon: "cil-drop",
  },
];
