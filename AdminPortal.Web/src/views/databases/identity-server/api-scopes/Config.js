import * as yup from "yup";

export const formConfig = [
  {
    Header: "Id",
    accessor: "Id",
    type: "text",
    table: "ApiScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Enabled",
    accessor: "Enabled",
    type: "bool",
    table: "ApiScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Name",
    accessor: "Name",
    type: "text",
    table: "ApiScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "DisplayName",
    accessor: "DisplayName",
    type: "text",
    table: "ApiScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Description",
    accessor: "Description",
    type: "text",
    table: "ApiScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Required",
    accessor: "Required",
    type: "bool",
    table: "ApiScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Emphasize",
    accessor: "Emphasize",
    type: "bool",
    table: "ApiScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "ShowInDiscoveryDocument",
    accessor: "ShowInDiscoveryDocument",
    type: "bool",
    table: "ApiScopes",
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
  Required: yup.bool().required("Required is required."),
  Emphasize: yup.bool().required("Emphasize is required."),
  ShowInDiscoveryDocument: yup
    .bool()
    .required("ShowInDiscoveryDocument is required."),
});

export const initialValues = getInitialValues(formConfig);

function getInitialValues(formConfig) {
  let obj = {};
  formConfig.map((c) => {
    obj[c.name] = c.initialValue;
  });

  return obj;
}
