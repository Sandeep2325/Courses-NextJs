import React from "react";
import Link from "next/link";
interface MyComponentProps {
  title: string;
  className: string;
  href:string;
}
function ButtonLinkPlain(props: MyComponentProps) {
  const { title, className,href } = props;
  return (
    <Link
      className={`inline-block px-4 py-2 rounded-lg  hover:bg-gray-300  ${className}`}
      href={href}
    >
      {title}
    </Link>
  );
}

export default ButtonLinkPlain;
