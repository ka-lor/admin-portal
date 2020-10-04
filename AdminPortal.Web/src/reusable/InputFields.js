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
          <CLabel htmlFor={props.input.accessor}>{props.input.accessor}</CLabel>
          <CInput
            type="text"
            disabled={props.input.hidden}
            id={props.input.accessor}
            name={props.input.accessor}
            value={props.formik.values[props.input.accessor]}
            placeholder=""
            onChange={props.formik.handleChange}
            autoComplete={props.input.accessor}
          />
          {props.formik.errors[props.input.accessor] && (
            <CFormText color="danger" className="help-block">
              {props.formik.errors[props.input.accessor]}
            </CFormText>
          )}
        </CFormGroup>
      );
    case "boolean":
      return (
        <CFormGroup>
          <CLabel htmlFor={props.input.accessor}>{props.input.accessor}</CLabel>
          <CSelect
            custom
            id={props.input.accessor}
            name={props.input.accessor}
            value={props.formik.values[props.input.accessor]}
            disabled={props.input.hidden}
            onChange={props.formik.handleChange}
            autoComplete="name"
          >
            <option value="">-</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </CSelect>
          {props.formik.errors[props.input.accessor] && (
            <CFormText color="danger" className="help-block">
              {props.formik.errors[props.input.accessor]}
            </CFormText>
          )}
        </CFormGroup>
      );
    case "tokenLifetime":
      return (
        <CFormGroup>
          <CLabel htmlFor={props.input.accessor}>{props.input.accessor}</CLabel>
          <CSelect
            custom
            id={props.input.accessor}
            name={props.input.accessor}
            value={props.formik.values[props.input.accessor]}
            disabled={props.input.hidden}
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
          {props.formik.errors[props.input.accessor] && (
            <CFormText color="danger" className="help-block">
              {props.formik.errors[props.input.accessor]}
            </CFormText>
          )}
        </CFormGroup>
      );
    default:
      return (
        <CFormGroup>
          <CLabel htmlFor={props.input.accessor}>Email</CLabel>
          <CInput
            disabled={props.input.hidden}
            type={props.input.accessor}
            id={props.input.accessor}
            value={props.formik.values[props.input.accessor]}
            name={props.input.accessor}
            placeholder=""
            onChange={props.formik.handleChange}
            autoComplete={props.input.accessor}
          />
          {props.formik.errors[props.input.accessor] && (
            <CFormText color="danger" className="help-block">
              {props.formik.errors[props.input.accessor]}
            </CFormText>
          )}
        </CFormGroup>
      );
  }
}

export default InputFields;
