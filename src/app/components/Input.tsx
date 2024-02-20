import React, { useId,forwardRef, ForwardedRef } from "react";
interface MyComponentProps {
  label: string;
  type: string;
  placeholder: string;
  className: string;
  error:string
  //onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = React.forwardRef(function Input({
    label,
    type,
    placeholder,
    className,
    error,
   
    ...props
  }: MyComponentProps, ref: ForwardedRef<HTMLInputElement>) {
   
    const id = useId();
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
       
      />
      {error.length>0?<p className="text-red-500">{error}</p>:""}
       
    </div>
  );
});

export default Input;
