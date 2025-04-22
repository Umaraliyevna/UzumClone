import { Routes, Route } from "react-router";

import { Footer, Header } from "./components";
import Page404 from "./pages/Page404/Page404";
import { PUBLIC_ROUTES } from "./routes/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {PUBLIC_ROUTES.map((route) => (
          <Route {...route} />
        ))}
        <Route element={<Page404 />} path="*" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
