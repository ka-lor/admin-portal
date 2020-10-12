import * as yup from "yup";

export const formConfig = [
  {
    Header: "Id",
    accessor: "Id",
    type: "text",
    table: "ApiResourceScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Scope",
    accessor: "Scope",
    type: "text",
    table: "ApiResourceScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "ApiResourceId",
    accessor: "ApiResourceId",
    type: "text",
    table: "ApiResourceScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
];

export const yupSchema = yup.object({
  Id: yup.number().required("Id is required."),
  Scope: yup.string().required("Scope is required."),
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
