import { url } from "inspector";
import React, { useRef, useState } from "react";
import Forme from "../../SVG/Forme";
import { UrlShortContainer } from "./UrlShot_css";

export default function UrlShort() {
  const [error, setError] = useState<boolean | string>("Please add link");
  const [isDisabled, setIsDisabled] = useState<string>("");
  const [linkCollection, setLinkCollection] = useState<[]>([]);

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  function handleChange() {
    const element = inputRef.current;
    const val = element?.value ? element?.value : "";

    if (val.length === 0) {
      setIsDisabled("");
      setError("Please add a link");
      return;
    }

    if (isValidUrl(val)) {
      setIsDisabled("disabled");
      setError(false);
      return;
    }
    setIsDisabled("");
    setError("url invalid");
  }

  function handleClick() {
    console.log("click");
    fetchData(inputRef?.current?.value ? inputRef.current.value : "");
  }

  function isValidUrl(url: string) {
    const regexUrl =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

    const regex = new RegExp(regexUrl, "gm");

    return regex.test(url);
  }

  async function fetchData(url: string) {
    console.log("fetch");
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      if (data.ok) {
        setError(false);

        createShortLink(data.result);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function createShortLink(result: {}) {
    const toto = document.querySelector("#__toto");
  }

  return (
    <>
      <UrlShortContainer>
        <div className="urlShort_container">
          <div className="bloc_input">
            <div className="bloc-input-item">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className="search"
                ref={inputRef}
                onChange={handleChange}
              />
              <span className="error-message">
                <p>{error && error}</p>
              </span>
            </div>
            <button
              type="button"
              className="btn btn--big"
              onClick={handleClick}
              disabled={!isDisabled}
            >
              Shorten it!
            </button>
          </div>

          <Forme
            className="forme bottomLeft"
            width="715px"
            height="409px"
          ></Forme>
          <Forme
            className="forme topRight"
            width="715px"
            height="409px"
          ></Forme>
        </div>
      </UrlShortContainer>

      <LinkGenerateByApi></LinkGenerateByApi>
    </>
  );
}

export function LinkGenerateByApi(): JSX.Element {
  return (
    <section style={{ backgroundColor: "#eff1f7", paddingTop: "164px" }}>
      <h1>Toto</h1>
      <h1>Toto</h1>
      <h1>Toto</h1>
      <h1>Toto</h1>
      <h1>Toto</h1>
      <h1>Toto</h1>
      <h1>Toto</h1>
    </section>
  );
}
