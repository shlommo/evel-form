import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { Field } from "../Field"
import { Button } from "../Button"
import "./Form.css";

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
      <h1 className="login__title">Log in</h1>
      <form
        className="login__form form"
        action="/login"
        autoComplete="off"
        method="post"
        onSubmit={onSubmit}
      >
        <Field
          autoFocus
          className="form__group-fields"
          error={error}
          id="login-email"
          name="email"
          onChange={onChangeField(setEmail)}
          placeholder="Email"
          required
          shouldShowErrorMsg={false}
          type="email"
          value={email}
        />

        <Field
          className="form__group-fields"
          error={error}
          id="login-password"
          name="password"
          onChange={onChangeField(setPassword)}
          placeholder="Password"
          required
          type="password"
          value={password}
        />

        <Button className="--full-width" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Form;
