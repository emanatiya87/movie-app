import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NotFound() {
  const dispatch = useDispatch();

  return <div>ERROR 404!</div>;
}
