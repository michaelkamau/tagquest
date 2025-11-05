import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <div className="w-full">
      <label className="block text-gray-400 mb-2">{label}</label>
      <input
        className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
};

export default TextInput;
