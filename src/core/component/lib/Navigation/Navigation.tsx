import React from "react";
import { NavLink } from "react-router-dom";

type NavigationProps = {
  styles?: string;
  children?: React.ReactNode;
  cb?: any;
};

export default function Navigation({
  children,
  styles = "link",
  cb = false,
}: NavigationProps) {
  return (
    <nav onClick={(e) => e.stopPropagation()}>
      <NavLink
        to="/"
        className={`nav_${styles}`}
        onClick={(event) => {
          cb(event);
        }}
      >
        Features
      </NavLink>
      <NavLink
        to="/"
        className={`nav_${styles}`}
        onClick={(event) => {
          cb(event);
        }}
      >
        Pricing
      </NavLink>
      <NavLink
        to="/"
        className={`nav_${styles}`}
        onClick={(event) => {
          cb(event);
        }}
      >
        Ressources
      </NavLink>
      {children}
    </nav>
  );
}
