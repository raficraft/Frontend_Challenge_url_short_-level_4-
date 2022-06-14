import React from "react";
import { IconCustomize, IconRecord, IconStat } from "../../SVG/Card.js/Card";
import Card from "../Card/Card";

export default function Content() {
  return (
    <div>
      <header>
        <h2>Advanced Statisics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </header>
      <article>
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
      </article>
    </div>
  );
}
