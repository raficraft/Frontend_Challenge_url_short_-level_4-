import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LOGO } from "../../SVG/LOGO";
import { HeaderContainer } from "./Header_css";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BugerMenu/BurgerMenu";

type HeaderProps = {
  children?: React.ReactNode;
};

export default function Header({ children }: HeaderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <HeaderContainer id="__Header">
        <div className="header_content">
          <header>
            <NavLink to="/">
              <LOGO className="logo" color="#34313D"></LOGO>
            </NavLink>
            <Navigation styles="link"></Navigation>
          </header>
          <aside>
            <div
              className="burger"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="header_login">
              <NavLink to="/" className="nav_link">
                Login
              </NavLink>
              <NavLink to="/" className="btn btn_rounded-small">
                Sign Up
              </NavLink>
            </div>
          </aside>
        </div>
      </HeaderContainer>

      <BurgerMenu
        cb={(e: MouseEvent) => {
          e.preventDefault();
          setIsOpen(false);
        }}
        isOpen={isOpen}
      />
    </>
  );
}
