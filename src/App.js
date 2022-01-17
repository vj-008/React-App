import "./App.css";
import Form from "./components/Form";
import React from "react";
import Layout from "../src/layout/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import { RoutesObj } from "../src/Routes/index";
import { Routes, Route } from "react-router-dom";

function App() {
  function renderRoutes() {
    return RoutesObj.map((data, key) => (
      <Route path={data.path} element={data.elements} key={key}></Route>
    ));
  }
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Routes>
        {/* <Route path="/" element={<Form />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route> */}
        {renderRoutes()}
      </Routes>
    </Layout>
  );
}

export default App;
