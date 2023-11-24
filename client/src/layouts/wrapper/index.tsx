import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <div className="w-screen h-screen  px-10 py-6 dark:bg-blue-950">{children}</div>
  
);

export default Wrapper;
