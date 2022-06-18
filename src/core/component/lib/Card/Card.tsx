import React from "react";
import { CardContainer } from "./Card_css";

type CardType = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

export default function Card({ title, content, icon }: CardType) {
  return (
    <CardContainer>
      <span className="svg_container">{icon}</span>

      <header>
        <h3>{title}</h3>
      </header>
      <p>{content}</p>
    </CardContainer>
  );
}
