"use client"
import React, { useState, ComponentType } from "react";

const HigherOrderComponent = (Wrappedcomponent: ComponentType<any>) => {
  return (props: any) => {
    
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    return <div>
{loading?<p>{"Loading..."}</p>:<Wrappedcomponent {...props}/>}

    </div>
  };
};

export default HigherOrderComponent