import React from "react";
import { Link } from "react-router-dom";
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
      <header>
        <LOGO></LOGO>
      </header>
      <div>
        <div>
          <header>
            <h4>Features</h4>
          </header>
          <nav>
            <Link to="/">Link Shortenning</Link>
            <Link to="/">Branded Links</Link>
            <Link to="/">Analytics</Link>
          </nav>
        </div>

        <div>
          <header>
            <h4>Ressources</h4>
          </header>
          <nav>
            <Link to="/">Blog</Link>
            <Link to="/">Developpers</Link>
            <Link to="/">Support</Link>
          </nav>
        </div>

        <div>
          <header>
            <h4>Company</h4>
          </header>
          <nav>
            <Link to="/">About</Link>
            <Link to="/">Our Team</Link>
            <Link to="/">Carreers</Link>
            <Link to="/">Contact</Link>
          </nav>
        </div>
      </div>
      <footer>
        <IconSocialFacebook />
        <IconSocialTwitter />
        <IconSocialPinterest />
        <IconSocialInstagram />
      </footer>
    </FooterContainer>
  );
}
