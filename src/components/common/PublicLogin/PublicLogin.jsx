import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { AdminContext } from "../../../contexts/AdminContext";
import { SignIn } from "../../../services/AuthServices";

export const PublicLogin = ({
  showLogin,
  handleCloseLogin,
  handleChangeLoginToRegister,
}) => {
  const { authentication, setAuthentication } = useContext(AdminContext);
  const [userCredentials, setUserCredentials] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const createUser = async (e) => {
    e.preventDefault();
    setAuthentication({
      ...authentication,
      isLoading: true,
    });
    try {
      const response = await SignIn(userCredentials);
      if (response.success) {
        return setAuthentication({
          ...authentication,
          isAuthenticated: true,
          isLoading: false,
        });
      }
      return setAuthentication({
        ...authentication,
        isError: true,
        errorMessage: response.message,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      return setAuthentication({
        ...authentication,
        isLoading: false,
        isError: true,
        errorMessage: error.message,
      });
    }
  };

  return (
    <Modal
      show={showLogin}
      onHide={handleCloseLogin}
      className="Auth-modal"
      animation={false}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="Auth-modal-logo">
          <img src="/vite.svg" alt="logo" />
        </div>
        <form className="Auth-modal-form" onSubmit={createUser}>
          <div className="Auth-modal-title">Iniciar sesión</div>
          <div
            className={`Auth-modal-alert${
              authentication.isError ? "" : " hidden"
            }`}
          >
            {authentication.errorMessage}
          </div>
          <div className="Auth-modal-form-group">
            <label htmlFor="userEmail" className="Auth-modal-label">
              Correo
            </label>
            <input
              type="text"
              className="Auth-modal-input"
              id="userEmail"
              name="userEmail"
              value={userCredentials.userEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="Auth-modal-form-group">
            <label htmlFor="userPassword" className="Auth-modal-label">
              Contraseña
            </label>
            <input
              type="password"
              className="Auth-modal-input"
              id="userPassword"
              name="userPassword"
              value={userCredentials.userPassword}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="Auth-modal-button"
            type="submit"
            disabled={authentication.isLoading ? true : false}
          >
            Iniciar sesión
          </button>
          <p className="Auth-modal-option">
            ¿No tienes cuenta?{" "}
            <span onClick={handleChangeLoginToRegister}>Registrar</span>
          </p>
        </form>
      </Modal.Body>
    </Modal>
  );
};
