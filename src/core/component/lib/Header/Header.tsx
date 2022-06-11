import React from "react";
import { NavLink } from "react-router-dom";
import { LOGO } from "../../SVG/LOGO";
import { HeaderContainer } from "./Header_css";

export default function Header(): JSX.Element {
  return (
    <HeaderContainer id="__Header">
      <div className="header_content">
        <header>
          <NavLink to="/">
            <LOGO className="logo"></LOGO>
          </NavLink>
          <nav>
            <NavLink to="/" className="nav_link">
              Features
            </NavLink>
            <NavLink to="/" className="nav_link">
              Pricing
            </NavLink>
            <NavLink to="/" className="nav_link">
              Ressources
            </NavLink>
          </nav>
        </header>
        <aside>
          <NavLink to="/" className="nav_link">
            Login
          </NavLink>
          <NavLink to="/" className="btn btn_rounded-big">
            Sign Up
          </NavLink>
        </aside>
      </div>
    </HeaderContainer>
  );
}
