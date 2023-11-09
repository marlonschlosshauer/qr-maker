import React from "react";

export interface InputProps {
  name?: string;
  value?: string;
  onChange?: (text: string) => void;
  onBlur?: (text: string) => void;
}

export const Input: React.FC<InputProps> = ({
  name = "",
  value,
  onChange,
  onBlur,
}) => (
  <div className="w-full bg-gray-50 text-gray-900">
    <label className="bg-gray-50 text-gray-900" htmlFor={name}>
      {name}
    </label>
    <input
      className="w-full p-4 bg-gray-50 text-gray-900 selection:bg-purple-300"
      name={name}
      type="text"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      onBlur={(e) => onBlur?.(e.target.value)}
    />
  </div>
);
