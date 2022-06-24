import React, { useState } from "react";
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
    setError("Public API, please wait...");
    try {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();

      if (data.ok) {
        setError(false);
        const newResult = manageStorage(data.result);
        setTimeout(() => {
          setResultApi(newResult);
          setError(false);
          setLoading(false);
          resetInput();
        }, 100);
      } else {
        setError(data.error);
        setLoading(false);
        resetInput();
      }
    } catch (error) {
      console.log(error);
    }
  }

  function resetData() {
    localStorage.removeItem("url_short");
    setResultApi([]);
    resetInput();
  }

  function loadStorage() {
    const oldItems = JSON.parse(localStorage.getItem("url_short") || "[]")
      ? JSON.parse(localStorage.getItem("url_short") || "[]")
      : [];

    oldItems.length !== 0 && setResultApi(oldItems);
  }

  function resetInput() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <>
      <UrlShortContainer id="__url_short">
        <div className="urlShort_container">
          <div className="submit">
            <div className="bloc_input">
              <div className="bloc-input-item">
                <input
                  type="text"
                  placeholder="Shorten a link here..."
                  className="search"
                  ref={inputRef}
                  onChange={handleChange}
                  id="apiInput"
                />
                <span className="error-message">
                  <p>{error && error}</p>
                </span>
              </div>
            </div>

            {loading ? (
              <button
                type="button"
                className="btn btn--big btn--submit"
                disabled
              >
                loading...
              </button>
            ) : (
              <button
                type="button"
                className="btn btn--big btn--submit"
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
