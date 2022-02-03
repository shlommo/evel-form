import { ButtonHTMLAttributes, FC } from "react";
import "./Button.css"

interface IButton {
  className?: string;
  value: string;
}

const Button: FC<IButton & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = "",
  value,
  ...props
}) => {
  return (
    <button
      className={`button ${className}`}
      {...props}
    >
      {value}
    </button>
  );
};

export default Button;
