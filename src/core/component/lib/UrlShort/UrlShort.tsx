import { url } from "inspector";
import React, { useRef, useState } from "react";
import Forme from "../../SVG/Forme";
import LinkGenerateByApi from "../LinkGenerateByApi/LinkGenerateByApi";
import { UrlShortContainer } from "./UrlShot_css";
import { useEffect } from "react";
import { manageStorage } from "./manageStorage";

export default function UrlShort() {
  const [error, setError] = useState<boolean | string>("Please add link");
  const [isDisabled, setIsDisabled] = useState<string>("");
  const [resultApi, setResultApi] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

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
    fetchData(inputRef?.current?.value ? inputRef.current.value : "");
  }

  function isValidUrl(url: string) {
    const regexUrl =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

    const regex = new RegExp(regexUrl, "gm");

    return regex.test(url);
  }

  async function fetchData(url: string) {
    setLoading(true);
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      if (data.ok) {
        console.log(data);
        setError(false);
        const newResult = manageStorage(data.result);
        setTimeout(() => {
          setResultApi(newResult);
          setLoading(false);
        }, 100);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function resetData() {
    localStorage.removeItem("url_short");
    setResultApi([]);
  }

  function loadStorage() {
    const oldItems = JSON.parse(localStorage.getItem("url_short") || "[]")
      ? JSON.parse(localStorage.getItem("url_short") || "[]")
      : [];

    console.log(oldItems);

    oldItems.length !== 0 && setResultApi(oldItems);
  }

  useEffect(() => {
    loadStorage();
  }, []);

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

            {loading ? (
              <button type="button" className="btn btn--big" disabled>
                loading...
              </button>
            ) : (
              <button
                type="button"
                className="btn btn--big"
                onClick={handleClick}
                disabled={!isDisabled}
              >
                Shorten it!
              </button>
            )}
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
          <button
            type="button"
            onClick={() => {
              resetData();
            }}
            className="btn reset_local"
          >
            Reset all
          </button>
        </div>
      </UrlShortContainer>

      {resultApi.length !== 0 && <LinkGenerateByApi></LinkGenerateByApi>}
    </>
  );
}
