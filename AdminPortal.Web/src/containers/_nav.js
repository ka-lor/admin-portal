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
    name: "Clients",
    to: "/api-m/clients",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "API Resources",
    to: "/api-m/api-resources",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Swagger",
    to: "/swagger/identity-server",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["User Management"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Users",
    to: "/swagger/identity-server",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Roles",
    to: "/swagger/identity-server",
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
        name: "API Resources",
        to: "/databases/identity-server/api-resources",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "API Scopes",
        to: "/databases/identity-server/api-scopes",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "API Resource Scopes",
        to: "/databases/identity-server/api-resource-scopes",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "API Resource Secrets",
        to: "/databases/identity-server/api-resource-secrets",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Clients",
        to: "/databases/identity-server/clients",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Client Secrets",
        to: "/databases/identity-server/client-secrets",
        icon: "cil-pencil",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Client Scopes",
        to: "/databases/identity-server/client-scopes",
        icon: "cil-pencil",
      },
    ],
  },
];
