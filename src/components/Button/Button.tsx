import React, { PropsWithChildren } from "react";

export interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  disabled,
  children,
}) => (
  <button
    disabled={disabled}
    className={`w-full p-4 bg-purple-900 hover:bg-purple-700 text-gray-50 ${
      disabled ? "cursor-not-allowed" : "cursor-pointer"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);
