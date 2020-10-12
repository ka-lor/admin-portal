import * as yup from "yup";

export const formConfig = [
  {
    Header: "Id",
    accessor: "Id",
    type: "text",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Enabled",
    accessor: "Enabled",
    type: "bool",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Name",
    accessor: "Name",
    type: "text",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "DisplayName",
    accessor: "DisplayName",
    type: "text",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Description",
    accessor: "Description",
    type: "text",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "AllowedAccessTokenSigningAlgorithms",
    accessor: "AllowedAccessTokenSigningAlgorithms",
    type: "text",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "ShowInDiscoveryDocument",
    accessor: "ShowInDiscoveryDocument",
    type: "bool",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Created",
    accessor: "Created",
    type: "text",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Updated",
    accessor: "Updated",
    type: "text",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "LastAccessed",
    accessor: "LastAccessed",
    type: "text",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "NonEditable",
    accessor: "NonEditable",
    type: "bool",
    table: "ApiResources",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
];

export const yupSchema = yup.object({
  Id: yup.number().required("Id is required."),
  Enabled: yup.bool().required("Enabled is required."),
  Name: yup.string().required("Name is required."),
  DisplayName: yup.string().nullable(),
  Description: yup.string().nullable(),
  AllowedAccessTokenSigningAlgorithms: yup.string().nullable(),
  ShowInDiscoveryDocument: yup
    .bool()
    .required("ShowInDiscoveryDocument is required."),
  Created: yup.string().required("Created is required."),
  Updated: yup.string().nullable(),
  LastAccessed: yup.string().nullable(),
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
