import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import { publicRoutes } from "./Routes";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 32 }}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page></Page>
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
