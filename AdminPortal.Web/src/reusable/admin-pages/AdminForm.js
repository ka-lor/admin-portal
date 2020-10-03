import React, { useState, useEffect } from "react";
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
} from "@coreui/react";
import { useFormik } from "formik";

function AdminForm(props) {
  const formik = useFormik({
    initialValues: props.initialValues,
    validationSchema: props.yupSchema,
    validateOnChange: false,
    setFieldValue: (e) => {
      console.log(e);
    },
  });

  useEffect(() => {
    if (props.display === "edit") {
      formik.setValues(props.rowData);
    }
  }, [props.toggle]);

  return (
    <div>
      <CModal
        size="xl"
        show={props.modal}
        onClose={() => {
          props.toggle("close");
          formik.resetForm();
        }}
      >
        <CForm onSubmit={formik.handleSubmit}>
          <CModalHeader closeButton>Modal title</CModalHeader>
          <CModalBody>
            {props.display === "add" ? (
              <>
                {props.formConfig
                  .filter((c) => !c.hide)
                  .map((input, i) => (
                    <CFormGroup key={i}>
                      <CLabel>{input.name}</CLabel>
                      <CInput
                        as="input"
                        invalid={formik.errors[input.name] ? true : false}
                        value={formik.values[input.name]}
                        onChange={formik.handleChange}
                        type="text"
                        id={input.name}
                      />
                      {formik.errors[input.name] && (
                        <CFormText className="help-block" color="danger">
                          {formik.errors[input.name]}
                        </CFormText>
                      )}
                    </CFormGroup>
                  ))}
              </>
            ) : (
              <>
                {props.formConfig.map((input, i) => (
                  <CFormGroup key={i}>
                    <CLabel>{input.name}</CLabel>
                    <CInput
                      as="input"
                      disabled={input.hide}
                      value={formik.values[input.name]}
                      invalid={formik.errors[input.name] ? true : false}
                      onChange={formik.handleChange}
                      type="text"
                      id={input.name}
                    />
                    {formik.errors[input.name] && (
                      <CFormText className="help-block" color="danger">
                        {formik.errors[input.name]}
                      </CFormText>
                    )}
                  </CFormGroup>
                ))}
              </>
            )}
          </CModalBody>
          <CModalFooter>
            <CButton type="submit" color="primary">
              {props.display === "add" ? "Add" : "Update"}
            </CButton>{" "}
            {props.display === "add" && (
              <CButton type="reset" color="warning">
                Reset
              </CButton>
            )}
            <CButton color="secondary" onClick={() => props.toggle("close")}>
              Cancel
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </div>
  );
}

export default AdminForm;
