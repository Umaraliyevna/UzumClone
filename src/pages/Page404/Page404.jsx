import React from "react";

import img from "src/assets/image404.svg";

import { NotFoundPage } from "./Page404.style";

function Page_404() {
  return (
    <NotFoundPage>
      <img className="notFoundImage" src={img} />
    </NotFoundPage>
  );
}

export default Page_404;
