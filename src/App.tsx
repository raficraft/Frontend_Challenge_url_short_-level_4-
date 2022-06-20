import React from "react";
import "./css/reset.css";
import "./css/designSystem.css";
import "./App.css";
import Layout from "./core/component/lib/Layout/Layout";
import { Route, Routes } from "react-router";
import Content from "./core/component/lib/Content/Content";
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Front-end mentor challenge - Space tourism</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Helmet>
      <Layout>
        <Content></Content>
      </Layout>
    </>
  );
}

export default App;
