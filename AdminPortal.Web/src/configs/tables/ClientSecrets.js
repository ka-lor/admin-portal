import * as yup from "yup";

export const formConfig = [
  {
    name: "Id",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Description",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Value",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Expiration",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Type",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Created",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "ClientId",
    type: "text",
    table: "ClientSecrets",
    colSize: 6,
    hide: false,
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
