import React from "react";
import { Formik } from "formik";
import swAlert from "@sweetalert/with-react";

const Formulario = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          textarea: "",
        }}
        validate={(valores) => {
          let errores = {};
          //Validacion nombre
          if (!valores.name) {
            errores.name = "Required";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "The name can only contain letters and spaces";
          }

          //Validacion correo
          if (!valores.email) {
            errores.email = "Required";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "Email can only contain letters, numbers, periods, hyphens and underscores";
          }
          //Validacion password
          if (!valores.password) {
            errores.password = "Required";
          } else if (!/^.{4,12}$/.test(valores.password)) {
            errores.password = "From 4 to 12 digits";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          let valoresJSON = JSON.stringify(valores);
          swAlert(valoresJSON);
          console.log("Formulario enviado");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <h1>Form</h1>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Woody Allen"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="contoso@domain.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Provide a password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div>
              <label htmlFor="textarea">Text Area</label>
              <textarea
                id="textarea"
                type="text"
                name="textarea"
                value={values.textarea}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
