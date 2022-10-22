import React from "react";

function validate(input) {
  let error = {};
  if (!input.username) {
    error.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = "Username is invalid";
  } else if (!input.password) {
    error.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    error.password = "Wrong Password";
  }
  return error;
}

export default function Form() {
  const initialState = {
    username: "",
    password: "",
  };

  let [input, setInput] = React.useState(initialState);
  let [error, setError] = React.useState({});

  let handleOnChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    //console.log(input);
  };

  let handleOnBlur = (e) => {
    let objError = validate({ ...input, [e.target.name]: e.target.value });
    setError(objError);
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();
    setError(validate({ ...input, [e.target.name]: e.target.value }));
    setInput(initialState);
  };

  return (
    <div>
      <form>
        <h2>Formulario de Prueba</h2>
        <hr />

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={input.username}
            name="username"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            className={error.username && "danger"}
          />
        </div>
        <p style={{ visibility: error.username ? "visible" : "hidden" }}>
          {error.username}
        </p>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={input.password}
            name="password"
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            className={error.password && "danger"}
          />
        </div>
        <p style={{ visibility: error.password ? "visible" : "hidden" }}>
          {error.password}
        </p>
        <button
          disabled={!input.username || Object.keys(error).length > 0}
          onSubmit={handleOnSubmit}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
