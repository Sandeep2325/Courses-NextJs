import React, { useState } from "react";
interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}
function AccordionItem({ title, children }: MyComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 my-4">
      <div className="flex justify-between items-center">
        <div>
          <button
            onClick={toggleAccordion}
            className="w-full p-4 text-left focus:outline-none"
          >
            {title}
          </button>
        </div>
        <div className="mr-2">
          <button
            onClick={toggleAccordion}
            className=" bg-orange-400 rounded-md text-white px-1"
          >
            {isOpen?"X":"+"}
            
          </button>
        </div>
      </div>

      <div className={`p-4 ${isOpen ? "" : "hidden"}`}>{children}</div>
    </div>
  );
}

export default AccordionItem;
