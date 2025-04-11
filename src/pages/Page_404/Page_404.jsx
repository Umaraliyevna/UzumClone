import React from "react";
import "./Page_404.css";
import img from "./404 error with a tired person-pana.svg";
import { Div } from "../../components/styled/example.style";

function Page_404() {
  return (
    <Div className="notFound">
      <img className="notFoundImage" src={img} />
    </Div>
  );
}

export default Page_404;
