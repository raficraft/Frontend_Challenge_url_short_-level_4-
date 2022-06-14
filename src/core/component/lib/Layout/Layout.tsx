import React from "react";
import BannerFooter from "../BannerFooter/BannerFooter";
import Footer from "../Footer/Footer";
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
        <BannerFooter></BannerFooter>
        <Footer></Footer>
      </section>
    </>
  );
}
