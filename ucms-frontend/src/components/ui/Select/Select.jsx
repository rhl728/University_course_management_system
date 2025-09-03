import React from "react";
import { ChevronDown } from "lucide-react";

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder,
  required = false,
  disabled = false,
  error,
  helperText,
  className = "",
  ...props
}) => {
  const selectClasses = `
    w-full px-3 py-2 border rounded-md shadow-sm bg-white
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
    disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    ${
      error
        ? "border-red-300 focus:ring-red-500 focus:border-red-500"
        : "border-gray-300"
    }
    ${className}
    appearance-none cursor-pointer
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

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={selectClasses}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Select;
