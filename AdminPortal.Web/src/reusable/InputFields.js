import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CForm,
  CInput,
  CFormGroup,
  CLabel,
  CFormText,
  CSelect,
} from "@coreui/react";

function InputFields(props) {
  const [data, setData] = useState([]);

  const callApi = async () => {
    await axios
      .get(props.apiEndpoint)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (props.remote) {
      callApi();
    }
  }, []);

  switch (props.input.type) {
    case "text":
      return (
        <CFormGroup>
          <CLabel htmlFor={props.input.name}>{props.input.name}</CLabel>
          <CInput
            type="text"
            disabled={props.input.hide}
            id={props.input.name}
            name={props.input.name}
            value={props.formik.values[props.input.name]}
            placeholder=""
            onChange={props.formik.handleChange}
            autoComplete={props.input.name}
          />
          {props.formik.errors[props.input.name] && (
            <CFormText color="danger" className="help-block">
              {props.formik.errors[props.input.name]}
            </CFormText>
          )}
        </CFormGroup>
      );
    case "boolean":
      return (
        <CFormGroup>
          <CLabel htmlFor={props.input.name}>{props.input.name}</CLabel>
          <CSelect
            custom
            id={props.input.name}
            name={props.input.name}
            value={props.formik.values[props.input.name]}
            disabled={props.input.hide}
            onChange={props.formik.handleChange}
            autoComplete="name"
          >
            <option value="">-</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </CSelect>
          {props.formik.errors[props.input.name] && (
            <CFormText color="danger" className="help-block">
              {props.formik.errors[props.input.name]}
            </CFormText>
          )}
        </CFormGroup>
      );
    case "tokenLifetime":
      return (
        <CFormGroup>
          <CLabel htmlFor={props.input.name}>{props.input.name}</CLabel>
          <CSelect
            custom
            id={props.input.name}
            name={props.input.name}
            value={props.formik.values[props.input.name]}
            disabled={props.input.hide}
            onChange={props.formik.handleChange}
            autoComplete="name"
          >
            <option value="">-</option>
            <option value={0}>0</option>
            <option value={300}>300</option>
            <option value={3600}>3600</option>
            <option value={1296000}>1296000</option>
            <option value={2592000}>2592000</option>
          </CSelect>
          {props.formik.errors[props.input.name] && (
            <CFormText color="danger" className="help-block">
              {props.formik.errors[props.input.name]}
            </CFormText>
          )}
        </CFormGroup>
      );
    default:
      return (
        <CFormGroup>
          <CLabel htmlFor={props.input.name}>Email</CLabel>
          <CInput
            disabled={props.input.hide}
            type={props.input.name}
            id={props.input.name}
            value={props.formik.values[props.input.name]}
            name={props.input.name}
            placeholder=""
            onChange={props.formik.handleChange}
            autoComplete={props.input.name}
          />
          {props.formik.errors[props.input.name] && (
            <CFormText color="danger" className="help-block">
              {props.formik.errors[props.input.name]}
            </CFormText>
          )}
        </CFormGroup>
      );
  }
}

export default InputFields;
