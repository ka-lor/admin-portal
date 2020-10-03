import * as yup from "yup";

export const formConfig = [
  {
    name: "Id",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "Scope",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hide: false,
    initialValue: "",
  },
  {
    name: "ClientId",
    type: "text",
    table: "ClientScopes",
    colSize: 6,
    hide: false,
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
  });

  return obj;
}
