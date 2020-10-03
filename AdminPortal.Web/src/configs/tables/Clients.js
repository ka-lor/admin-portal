import * as yup from "yup";

export const formConfig = [
  {
    name: "Id",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: true,
    initialValue: "",
  },
  {
    name: "Enabled",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "123",
  },
  {
    name: "ClientId",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "abc",
  },
  {
    name: "ProtocolType",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RequireClientSecret",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "ClientName",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Description",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "ClientUri",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "LogoUri",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RequireConsent",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowRememberConsent",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AlwaysIncludeUserClaimsInIdToken",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RequirePkce",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowPlainTextPkce",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RequireRequestObject",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowAccessTokensViaBrowser",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "FrontChannelLogoutUri",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "FrontChannelLogoutSessionRequired",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "BackChannelLogoutUri",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "BackChannelLogoutSessionRequired",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowOfflineAccess",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "IdentityTokenLifetime",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowedIdentityTokenSigningAlgorithms",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AccessTokenLifetime",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AuthorizationCodeLifetime",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "ConsentLifetime",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AbsoluteRefreshTokenLifetime",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "SlidingRefreshTokenLifetime",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RefreshTokenUsage",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "UpdateAccessTokenClaimsOnRefresh",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RefreshTokenExpiration",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AccessTokenType",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "EnableLocalLogin",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "IncludeJwtId",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AlwaysSendClientClaims",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "ClientClaimsPrefix",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "PairWiseSubjectSalt",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Created",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Updated",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "LastAccessed",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "UserSsoLifetime",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "UserCodeType",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "DeviceCodeLifetime",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "NonEditable",
    type: "bool",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
];

export const yupSchema = yup.object({
  Id: yup.number().required("Id is required."),
  Enabled: yup.bool().required("Enabled is required."),
  ClientId: yup.string().required("ClientId is required."),
  ProtocolType: yup.string().required("ProtocolType is required."),
  RequireClientSecret: yup.bool().required("RequireClientSecret is required."),
  ClientName: yup.string(),
  Description: yup.string(),
  ClientUri: yup.string(),
  LogoUri: yup.string(),
  RequireConsent: yup.bool().required("RequireConsent is required."),
  AllowRememberConsent: yup
    .bool()
    .required("AllowRememberConsent is required."),
  AlwaysIncludeUserClaimsInIdToken: yup
    .bool()
    .required("AlwaysIncludeUserClaimsInIdToken is required."),
  RequirePkce: yup.bool().required("RequirePkce is required."),
  AllowPlainTextPkce: yup.bool().required("AllowPlainTextPkce is required."),
  RequireRequestObject: yup
    .bool()
    .required("RequireRequestObject is required."),
  AllowAccessTokensViaBrowser: yup
    .bool()
    .required("AllowAccessTokensViaBrowser is required."),
  FrontChannelLogoutUri: yup.string(),
  FrontChannelLogoutSessionRequired: yup
    .bool()
    .required("FrontChannelLogoutSessionRequired is required."),
  BackChannelLogoutUri: yup.string(),
  BackChannelLogoutSessionRequired: yup
    .bool()
    .required("BackChannelLogoutSessionRequired is required."),
  AllowOfflineAccess: yup.bool().required("AllowOfflineAccess is required."),
  IdentityTokenLifetime: yup
    .number()
    .required("IdentityTokenLifetime is required."),
  AllowedIdentityTokenSigningAlgorithms: yup.string(),
  AccessTokenLifetime: yup
    .number()
    .required("AccessTokenLifetime is required."),
  AuthorizationCodeLifetime: yup
    .number()
    .required("AuthorizationCodeLifetime is required."),
  ConsentLifetime: yup.number(),
  AbsoluteRefreshTokenLifetime: yup
    .number()
    .required("AbsoluteRefreshTokenLifetime is required."),
  SlidingRefreshTokenLifetime: yup
    .number()
    .required("SlidingRefreshTokenLifetime is required."),
  RefreshTokenUsage: yup.number().required("RefreshTokenUsage is required."),
  UpdateAccessTokenClaimsOnRefresh: yup
    .bool()
    .required("UpdateAccessTokenClaimsOnRefresh is required."),
  RefreshTokenExpiration: yup
    .number()
    .required("RefreshTokenExpiration is required."),
  AccessTokenType: yup.number().required("AccessTokenType is required."),
  EnableLocalLogin: yup.bool().required("EnableLocalLogin is required."),
  IncludeJwtId: yup.bool().required("IncludeJwtId is required."),
  AlwaysSendClientClaims: yup
    .bool()
    .required("AlwaysSendClientClaims is required."),
  ClientClaimsPrefix: yup.string(),
  PairWiseSubjectSalt: yup.string(),
  Created: yup.string().required("Created is required."),
  Updated: yup.string(),
  LastAccessed: yup.string(),
  UserSsoLifetime: yup.number(),
  UserCodeType: yup.string(),
  DeviceCodeLifetime: yup.number().required("DeviceCodeLifetime is required."),
  NonEditable: yup.bool().required("NonEditable is required."),
});

export const initialValues = getInitialValues(formConfig);

function getInitialValues(formConfig) {
  let obj = {};
  formConfig.map((c) => {
    obj[c.name] = c.initialValue;
  });

  return obj;
}
