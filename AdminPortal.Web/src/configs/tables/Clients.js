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
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: true,
  },
  {
    name: "ClientId",
    type: "text",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
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
    type: "boolean",
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
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowRememberConsent",
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AlwaysIncludeUserClaimsInIdToken",
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RequirePkce",
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowPlainTextPkce",
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RequireRequestObject",
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowAccessTokensViaBrowser",
    type: "boolean",
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
    type: "boolean",
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
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AllowOfflineAccess",
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "IdentityTokenLifetime",
    type: "tokenLifetime",
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
    type: "tokenLifetime",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AuthorizationCodeLifetime",
    type: "tokenLifetime",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "ConsentLifetime",
    type: "tokenLifetime",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AbsoluteRefreshTokenLifetime",
    type: "tokenLifetime",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "SlidingRefreshTokenLifetime",
    type: "tokenLifetime",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "RefreshTokenUsage",
    type: "tokenLifetime",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "UpdateAccessTokenClaimsOnRefresh",
    type: "boolean",
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
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "IncludeJwtId",
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "AlwaysSendClientClaims",
    type: "boolean",
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
    type: "tokenLifetime",
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
    type: "tokenLifetime",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "NonEditable",
    type: "boolean",
    table: "clients",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
];

export const yupSchema = yup.object({
  Id: yup.number().required("Id is required."),
  Enabled: yup.boolean().required("Enabled is required."),
  ClientId: yup.string().required("ClientId is required."),
  ProtocolType: yup.string().required("ProtocolType is required."),
  RequireClientSecret: yup
    .boolean()
    .required("RequireClientSecret is required."),
  ClientName: yup.string(),
  Description: yup.string(),
  ClientUri: yup.string(),
  LogoUri: yup.string(),
  RequireConsent: yup.boolean().required("RequireConsent is required."),
  AllowRememberConsent: yup
    .boolean()
    .required("AllowRememberConsent is required."),
  AlwaysIncludeUserClaimsInIdToken: yup
    .boolean()
    .required("AlwaysIncludeUserClaimsInIdToken is required."),
  RequirePkce: yup.boolean().required("RequirePkce is required."),
  AllowPlainTextPkce: yup.boolean().required("AllowPlainTextPkce is required."),
  RequireRequestObject: yup
    .boolean()
    .required("RequireRequestObject is required."),
  AllowAccessTokensViaBrowser: yup
    .boolean()
    .required("AllowAccessTokensViaBrowser is required."),
  FrontChannelLogoutUri: yup.string(),
  FrontChannelLogoutSessionRequired: yup
    .boolean()
    .required("FrontChannelLogoutSessionRequired is required."),
  BackChannelLogoutUri: yup.string(),
  BackChannelLogoutSessionRequired: yup
    .boolean()
    .required("BackChannelLogoutSessionRequired is required."),
  AllowOfflineAccess: yup.boolean().required("AllowOfflineAccess is required."),
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
    .boolean()
    .required("UpdateAccessTokenClaimsOnRefresh is required."),
  RefreshTokenExpiration: yup
    .number()
    .required("RefreshTokenExpiration is required."),
  AccessTokenType: yup.number().required("AccessTokenType is required."),
  EnableLocalLogin: yup.boolean().required("EnableLocalLogin is required."),
  IncludeJwtId: yup.boolean().required("IncludeJwtId is required."),
  AlwaysSendClientClaims: yup
    .boolean()
    .required("AlwaysSendClientClaims is required."),
  ClientClaimsPrefix: yup.string(),
  PairWiseSubjectSalt: yup.string(),
  Created: yup.string().required("Created is required."),
  Updated: yup.string(),
  LastAccessed: yup.string(),
  UserSsoLifetime: yup.number(),
  UserCodeType: yup.string(),
  DeviceCodeLifetime: yup.number().required("DeviceCodeLifetime is required."),
  NonEditable: yup.boolean().required("NonEditable is required."),
});

export const initialValues = getInitialValues(formConfig);

function getInitialValues(formConfig) {
  let obj = {};
  formConfig.map((c) => {
    obj[c.name] = c.initialValue;
  });

  return obj;
}
