import React from "react";
import { NavLink } from "react-router-dom";
import { LOGO } from "../../SVG/LOGO";
import {
  IconSocialFacebook,
  IconSocialInstagram,
  IconSocialPinterest,
  IconSocialTwitter,
} from "../../SVG/social/IconSocial";
import { FooterContainer } from "./Footer_css";

export default function Footer() {
  return (
    <FooterContainer id="__Footer">
      <header className="footer_header">
        <NavLink to="/">
          <LOGO color="white"></LOGO>
        </NavLink>
      </header>
      <div className="footer_link">
        <div className="footer_link--inside">
          <header>
            <h4>Features</h4>
          </header>
          <nav>
            <NavLink to="/">Link Shortenning</NavLink>
            <NavLink to="/">Branded Links</NavLink>
            <NavLink to="/">Analytics</NavLink>
          </nav>
        </div>

        <div className="footer_link--inside">
          <header>
            <h4>Ressources</h4>
          </header>
          <nav>
            <NavLink to="/">Blog</NavLink>
            <NavLink to="/">Developpers</NavLink>
            <NavLink to="/">Support</NavLink>
          </nav>
        </div>

        <div className="footer_link--inside">
          <header>
            <h4>Company</h4>
          </header>
          <nav>
            <NavLink to="/">About</NavLink>
            <NavLink to="/">Our Team</NavLink>
            <NavLink to="/">Carreers</NavLink>
            <NavLink to="/">Contact</NavLink>
          </nav>
        </div>

        <footer>
          <div className="footer_icon">
            <IconSocialFacebook color={"white"} />
            <IconSocialTwitter color={"white"} />
            <IconSocialPinterest color={"white"} />
            <IconSocialInstagram color={"white"} />
          </div>
        </footer>
      </div>
    </FooterContainer>
  );
}
