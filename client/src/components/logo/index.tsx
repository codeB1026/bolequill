import React, { ReactNode } from "react";
import { LogoIcon } from "../../assets";

interface LogoProps {
  title: ReactNode;
}

const Logo: React.FC<LogoProps> = ({ title }) => (
  <div className="flex  items-center justify-between gap-2">
    <h1 className="logo_text">{title}</h1>
    <div className="logo_icon">
      <LogoIcon />
    </div>
  </div>
);

export default Logo;
