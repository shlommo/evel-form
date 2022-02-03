import { ButtonHTMLAttributes, FC } from "react";

interface IButton {
  className?: string;
  value: string;
}

const Button: FC<IButton & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className = "",
  onClick,
  type = "button",
  value,
}) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {value}
    </button>
  );
};

export default Button;
