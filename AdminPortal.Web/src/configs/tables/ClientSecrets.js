import * as yup from "yup";

export const formConfig = [
  {
    Header: "Id",
    accessor: "Id",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Description",
    accessor: "Description",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Value",
    accessor: "Value",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Expiration",
    accessor: "Expiration",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Type",
    accessor: "Type",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Created",
    accessor: "Created",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "ClientId",
    accessor: "ClientId",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
];

export const yupSchema = yup.object({
  Id: yup.number().required("Id is required."),
  Description: yup.string(),
  Value: yup.string().required("Value is required."),
  Expiration: yup.string(),
  Type: yup.string().required("Type is required."),
  Created: yup.string().required("Created is required."),
  ClientId: yup.number().required("ClientId is required."),
});

export const initialValues = getInitialValues(formConfig);

function getInitialValues(formConfig) {
  let obj = {};
  formConfig.map((c) => {
    obj[c.name] = c.initialValue;
  });

  return obj;
}
