import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";

interface IForm {}

const Form: FC<IForm> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeField =
    (setState: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.target.value);
    };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('Please, enter correct email and password');
  }

  return (
    <div className="login">
      <h1>Log in</h1>
      <form
        className="login__form form"
        action="/login"
        autoComplete="off"
        method="post"
        onSubmit={onSubmit}
      >
        <div className="form__group-fields">
          <input
            autoFocus
            className="field --text --full-width"
            id="login-email"
            name="email"
            onChange={onChangeField(setEmail)}
            placeholder="Email"
            required
            type="email"
            value={email}
          />
        </div>

        <div className="form__group-fields">
          <input
            className="field --text --full-width"
            id="login-password"
            name="password"
            onChange={onChangeField(setPassword)}
            placeholder="Password"
            required
            type="password"
            value={password}
          />

          <p className="form__notice --red">{error}</p>
        </div>

        <button className="button --full-width" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
