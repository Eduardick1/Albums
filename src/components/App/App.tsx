import Catalog from "../Catalog/Catalog";
import Header from "../Header/Header";
import React from "react";
import { Main } from "./App.styled";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Favorites from "../Favorites/Favorites";

function Layout() {
  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Catalog />} index />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
