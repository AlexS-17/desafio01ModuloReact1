import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const RegistrationForm = () => {
  const [mail, setMail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [validacion, setValidacion] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [envio, setEnvio] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const validarInput = (e) => {
    e.preventDefault();

    if (mail === "" || contrasena === "" || validacion === "") {
      Swal.fire({
        title: "Error",
        text: "No pueden haber campos vacíos en el formulario",
        icon: "error",
        color: "white",
        confirmButtonColor: "#f27474",
        background: "#212529",
        confirmButtonText: "Entiendo!",
      });
      return;
    }
    if (contrasena.length < 6 || contrasena.length > 10) {
      Swal.fire({
        title: "Error",
        text: "La contraseña debe tener entre 6 y 10 caracteres",
        icon: "error",
        color: "white",
        confirmButtonColor: "#f27474",
        background: "#212529",
        confirmButtonText: "Entiendo!",
      }).then(() => {
        window.location.reload();
      });
      return;
    }
    if (contrasena !== validacion) {
      Swal.fire({
        title: "Error",
        text: "Las contraseñas deben coincidir",
        icon: "error",
        color: "white",
        confirmButtonColor: "#f27474",
        background: "#212529",
        confirmButtonText: "Entiendo!",
      });
      return;
    }
    if (!checkboxChecked) {
      Swal.fire({
        title: "Error",
        text: "Debes aceptar el registro en MammaMía",
        icon: "error",
        color: "white",
        confirmButtonColor: "#f27474",
        background: "#212529",
        confirmButtonText: "Entiendo!",
      });
      return;
    }

    setEnvio(true);
    setMail("");
    setContrasena("");
    setValidacion("");
    setCheckboxChecked(false);
  };

  return (
    <div className="login">
      <Container className="loginBox">
        <Form onSubmit={validarInput} className="d-flex flex-column align-items-center">
          <h4 className="mt-3" style={{ color: "white" }}>
            Formulario de registro
          </h4>

          <div className="mt-3 w-50">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"	
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                className="w-100"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                maxLength={10}
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                className="w-100"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Repite tu Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repite tu contraseña"
                maxLength={10}
                value={validacion}
                onChange={(e) => setValidacion(e.target.value)}
                className="w-100"
              />
            </Form.Group>
          </div>

          <div className="w-50">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                style={{ color: "white"}}
                type="checkbox"
                name="checkbox"
                label="Acepto el registro en MammaMía"
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
            </Form.Group>
          </div>

          {envio &&
            Toast.fire({
              icon: "success",
              title: "Login exitoso",
              color: "white",
              background: "#212529",
            })}

          <Button variant="primary" type="submit" className="w-50 mb-4">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegistrationForm;



