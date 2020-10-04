import * as yup from "yup";

export const formConfig = [
  {
    Header: "Id",
    accessor: "Id",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "Scope",
    accessor: "Scope",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
  {
    Header: "ClientId",
    accessor: "ClientId",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hidden: false,
    initialValue: "",
  },
];

export const yupSchema = yup.object({
  Id: yup.number().required("Id is required."),
  Scope: yup.string().required("Scope is required."),
  ClientId: yup.number().required("ClientId is required."),
});

export const initialValues = getInitialValues(formConfig);

function getInitialValues(formConfig) {
  let obj = {};
  formConfig.map((c) => {
    obj[c.name] = c.initialValue;
    obj[c.accessor] = c.initialValue;
  });

  return obj;
}
