import React from "react";

import { ReactComponent as NotFoundImg } from "src/assets/image404.svg";

import { NotFoundPage } from "./Page404.style";

function Page_404() {
  return (
    <NotFoundPage>
      <NotFoundImg />
    </NotFoundPage>
  );
}

export default Page_404;
