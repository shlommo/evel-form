import { FC, InputHTMLAttributes } from "react";

interface IField {
  className?: string;
  error?: string;
  value: string;
  shouldShowErrorMsg?: boolean;
}

const Field: FC<IField & InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  error,
  shouldShowErrorMsg = true,
  ...props
}) => {
  const shouldShowError = !!error
  return (
    <div className={`field ${className}`}>
      <input
        className={`field__element --text ${shouldShowError ? "--red" : ""}`}
        {...props}
      />

      {shouldShowError && shouldShowErrorMsg && (
        <p className="field__notice --red">{error}</p>
      )}
    </div>
  );
};

export default Field;
