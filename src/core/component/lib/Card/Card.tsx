import React from "react";
import { string } from "yargs";
import { CardContainer } from "./Card_css";

type CardType = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

export default function Card({ title, content, icon }: CardType) {
  return (
    <CardContainer>
      {icon}
      <header>
        <h3>{title}</h3>
      </header>
      <article>
        <p>{content}</p>
      </article>
    </CardContainer>
  );
}
