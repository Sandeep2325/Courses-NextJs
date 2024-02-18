import React from "react";
import Link from "next/link";
interface MyComponentProps {
  title: string;
  className: string;
  href:string;
}
function Buttonlink({ title, className, href, ...props }: MyComponentProps) {
  
  return (
    <Link
      className={`inline-block bg-orange-400 text-white px-4 py-2 rounded-lg  hover:bg-gray-300 ${className}`}
      {...props}
      href={href}
    >
      {title}
    </Link>
  );
}

export default Buttonlink;
