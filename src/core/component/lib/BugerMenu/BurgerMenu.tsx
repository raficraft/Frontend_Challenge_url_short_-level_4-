import React from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { BurgerMenuContainer } from "./BurgerMenu_css";

type BurgerMenuProps = {
  cb?: any;
  isOpen?: boolean;
};

export default function BurgerMenu({ cb, isOpen }: BurgerMenuProps) {
  return createPortal(
    <BurgerMenuContainer data-isopen={isOpen} onClick={cb}>
      <Navigation styles="burger" cb={cb}>
        <footer>
          <NavLink to="/" className="nav_burger">
            Burger
          </NavLink>
          <NavLink to="/" className="nav_burger">
            Login
          </NavLink>
          <NavLink to="/" className="btn btn_rounded-big full_w">
            Sign_up
          </NavLink>
        </footer>
      </Navigation>
    </BurgerMenuContainer>,
    document.body
  );
}
