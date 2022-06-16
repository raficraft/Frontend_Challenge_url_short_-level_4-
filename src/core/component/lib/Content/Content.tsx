import React from "react";
import { IconCustomize, IconRecord, IconStat } from "../../SVG/Card.js/Card";
import Card from "../Card/Card";
import { ContentContainer } from "./Content_css";
import UrlShort from "../UrlShort/UrlShort";

export default function Content() {
  return (
    <>
      <ContentContainer>
        <header className="headerContent">
          <h2>Advanced Statistics</h2>
          <p className="text-sd-lg">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </header>
        <article className="cardContainer">
          <Card
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            icon={<IconStat></IconStat>}
          ></Card>
          <Card
            title="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            icon={<IconRecord></IconRecord>}
          ></Card>
          <Card
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            icon={<IconCustomize></IconCustomize>}
          ></Card>
          <div className="line"></div>
        </article>
      </ContentContainer>
    </>
  );
}
