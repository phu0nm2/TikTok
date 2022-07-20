import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes } from "./Routes";
import Layout from "./components/Layout";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const LayOut = route.layout === null ? Fragment : Layout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <LayOut>
                  <Page></Page>
                </LayOut>
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
