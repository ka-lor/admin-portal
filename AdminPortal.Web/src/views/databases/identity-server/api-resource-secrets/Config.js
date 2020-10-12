import * as yup from "yup";

export const formConfig = [
  {
    Header: "Id",
    accessor: "Id",
    type: "text",
    table: "ApiResourceSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Description",
    accessor: "Description",
    type: "text",
    table: "ApiResourceSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Value",
    accessor: "Value",
    type: "text",
    table: "ApiResourceSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Expiration",
    accessor: "Expiration",
    type: "text",
    table: "ApiResourceSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Type",
    accessor: "Type",
    type: "text",
    table: "ApiResourceSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Created",
    accessor: "Created",
    type: "text",
    table: "ApiResourceSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "ApiResourceId",
    accessor: "ApiResourceId",
    type: "text",
    table: "ApiResourceSecrets",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
];

export const yupSchema = yup.object({
  Id: yup.number().required("Id is required."),
  Description: yup.string().nullable(),
  Value: yup.string().required("Value is required."),
  Expiration: yup.string().nullable(),
  Type: yup.string().required("Type is required."),
  Created: yup.string().required("Created is required."),
  ApiResourceId: yup.number().required("ApiResourceId is required."),
});

export const initialValues = getInitialValues(formConfig);

function getInitialValues(formConfig) {
  let obj = {};
  formConfig.map((c) => {
    obj[c.name] = c.initialValue;
  });

  return obj;
}
