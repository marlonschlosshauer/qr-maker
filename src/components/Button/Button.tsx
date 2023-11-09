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
    className={`w-full p-4 text-gray-50 bg-gradient-to-r from-yellow-400 via-cyan-600 to-indigo-600 hover:opacity-60 transition-opacity ${
      disabled ? "cursor-not-allowed" : "cursor-pointer"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);
