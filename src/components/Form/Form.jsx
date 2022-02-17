import { useRef } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { onUserLogged } from "../../containers/App/actions";

//import { Link } from "react-router-dom";

const Form = (props) => {
  const refUser = useRef(null);
  const refPass = useRef(null);

  const dispatch = useDispatch();
  const onLoginSubmit = async (e) => {
    e.preventDefault();

    const username = refUser.current.value;
    const password = refPass.current.value;

    // Validan los datos
    if (username === "" || password === "") {
      alert("Por favor ingresa los campos obligatorios");
    } else {
      const userData = { usuario: username, password: password };

      try {
        const data = await props.onClick(userData);
        console.log(data);
        if (data.codigo !== 200) {
          console.log(data.codigo);
          alert(data.mensaje);
        } else {
          //  Guardo al usuario en el storage / localstorage o sessionstorage
          // sessionStorage.setItem('myTodoAppUser', JSON.stringify(data))
          //   Invoco a mi componente padre (App) para enviarle los datos del usuario
          dispatch(onUserLogged(data));
        }
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <section className="container">
      <div className="login">
        <h2>login</h2>
        <div className="login_body">
          <form>
            <div className="login_fields">
              <label htmlFor="inputEmail">
                <FontAwesomeIcon className="login_fields_icon" icon={faUser} />
              </label>
              <input
                className="login_fields_input"
                type="email"
                placeholder="Username"
                ref={refUser}
              />
            </div>
            <div className="login_fields">
              <label htmlFor="inputPassword">
                <FontAwesomeIcon className="login_fields_icon" icon={faKey} />
              </label>
              <input
                className="login_fields_input"
                type="password"
                placeholder="Password"
                ref={refPass}
              />
            </div>
            <div className="login_fields">
              <button onClick={onLoginSubmit} className="btn_submit">
                {props.btnName}
              </button>
            </div>
            {/* <p className="txt_login">
              Not signed-in yet?{" "}
              <Link to={'/register'} className="a">
                Sign-in now
              </Link>
            </p> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
