import React from "react";
import Link from "next/link";
interface MyComponentProps {
  title: string;
  className: string;
  href:string;
}
function ButtonLinkPlain({ title, className, href, ...props }: MyComponentProps) {
  //const { title, className,href } = props;
  return (
    <Link
      className={`inline-block px-4 py-2 rounded-lg bg-white  hover:bg-gray-300  ${className}`}
      {...props}
      href={href}
    >
      {title}
    </Link>
  );
}

export default ButtonLinkPlain;
