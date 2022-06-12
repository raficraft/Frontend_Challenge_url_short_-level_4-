import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <section id="__Layout">
        <Header></Header>

        <Hero></Hero>
        <main id="__Main">{children}</main>
        <footer id="__Footer">
          <h1 className="text_light">Footer</h1>
        </footer>
      </section>
    </>
  );
}
