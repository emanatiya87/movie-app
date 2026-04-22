import React from "react";
import NavComponent from "../components/nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
export default function Layout() {
  return (
    <>
      <NavComponent></NavComponent>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
