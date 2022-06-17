import React, { useEffect, useState, useRef } from "react";
import { LinkGenerateByApiContainer } from "./LinkGenerateByApi_css";

export default function LinkGenerateByApi() {
  const collectionStorage = JSON.parse(
    localStorage.getItem("url_short") || "[]"
  )
    ? JSON.parse(localStorage.getItem("url_short") || "[]")
    : [];

  const [collection, setCollection] = useState(collectionStorage);
  const inputRef = useRef(
    Array.from({ length: collection.length }, () =>
      React.createRef<HTMLButtonElement>()
    )
  );

  const inputHiddenRef = React.createRef<HTMLInputElement>();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(inputRef);
    console.log(e.target);

    for (const btn of inputRef.current) {
      if (btn.current) {
        btn.current.dataset.active = "false";
      }
    }

    if (e.currentTarget) {
      console.log(e.currentTarget.dataset);
      e.currentTarget.dataset.active = "true";
      e.currentTarget.textContent = "Copied!";
    }
  }

  function createLink() {
    const collectionLink = JSON.parse(localStorage.getItem("url_short") || "[]")
      ? JSON.parse(localStorage.getItem("url_short") || "[]")
      : [];

    return collectionLink.map(
      (
        el: {
          original_link: string;
          short_url: string;
        },
        key: number
      ) => {
        return (
          <div className="link_container" key={key}>
            <div className="link_content">
              <p className="text-md-lg current_link">{el.original_link}</p>
              <hr className="seperator"></hr>
              <p className="text-md-lg short_link">{el.short_url}</p>
            </div>
            <input
              id="input_short_url"
              name="input_short_url"
              type="hidden"
              value={el.short_url}
              ref={inputHiddenRef}
            ></input>

            <div className="btn_container">
              <button
                className="btn btn--xs"
                data-active="false"
                ref={inputRef.current[key]}
                type="button"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        );
      }
    );
  }

  function readStorage() {
    const oldItems = JSON.parse(localStorage.getItem("url_short") || "[]")
      ? JSON.parse(localStorage.getItem("url_short") || "[]")
      : [];

    console.log(oldItems);

    oldItems.length !== 0 && setCollection(oldItems);
  }

  useEffect(() => {
    readStorage();
  }, []);

  return (
    <>
      <LinkGenerateByApiContainer id="__LinkGenerateByApi">
        {createLink()}
      </LinkGenerateByApiContainer>
    </>
  );
}
