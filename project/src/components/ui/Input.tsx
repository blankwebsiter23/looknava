import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>((
  { 
    label, 
    helperText, 
    error, 
    fullWidth = false, 
    leftIcon, 
    rightIcon, 
    className = '', 
    ...props 
  }, 
  ref
) => {
  const widthClass = fullWidth ? 'w-full' : '';
  const errorClass = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-purple-500';
  const iconPaddingLeft = leftIcon ? 'pl-10' : '';
  const iconPaddingRight = rightIcon ? 'pr-10' : '';
  
  return (
    <div className={`${widthClass}`}>
      {label && (
        <label 
          htmlFor={props.id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          className={`${iconPaddingLeft} ${iconPaddingRight} block rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-2 px-3 transition duration-150 ease-in-out border ${errorClass} focus:outline-none focus:ring-2 ${widthClass} ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
      {(helperText || error) && (
        <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500 dark:text-gray-400'}`}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;