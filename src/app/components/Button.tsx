import React from "react";
interface MyComponentProps {
  type: "submit" | "reset" | "button";
  title: string;
}
function Button({ type = "button", title }: MyComponentProps) {
  return (
    <button
      type={type}
      className={`inline-block w-full bg-orange-400 text-white px-4 py-2 rounded-lg  hover:bg-gray-300 `}
    >
      {title}
    </button>
  );
}

export default Button;
