import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  error,
  helperText,
  className = "",
  ...props
}) => {
  const inputClasses = `
    w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    ${readOnly ? "bg-gray-50 cursor-not-allowed" : "bg-white"}
    ${
      error
        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
        : "border-gray-300"
    }
    ${className}
  `.trim();

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        className={inputClasses}
        {...props}
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
