import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Login from "./components/Login page/login";
import Users from "./components/Products/Users";
import PageNotFound from "./components/404 page/404";
import Search from "./components/Products/searchproducts";
import AddUsers from "./components/Products/addproducts";
import ViewUsers from "./components/Products/viewusers";
import { ErrorBoundary } from "./components/Products/ErrorBoundary/ErrorBoundary";

//Create our root component => App component
function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />}>
          <Route path="search" element={<Search />} />
          <Route path="addusers" element={<AddUsers />} />
          <Route path="viewusers" element={<ViewUsers />} />
          <Route path="!" element={<ViewUsers />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
