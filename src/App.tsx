import React from "react";
import "./css/reset.css";
import "./css/designSystem.css";
import "./App.css";
import Demo from "./core/component/Demo/Demo";
import Layout from "./core/component/lib/Layout/Layout";
import { Route, Routes } from "react-router";
import Home from "./core/component/Pages/Home";
import Content from "./core/component/lib/Content/Content";

function App() {
  return (
    <>
      <Layout>
        {/* <Demo title="Démo" content="Lorem ipsum" /> */}
        <Content></Content>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
