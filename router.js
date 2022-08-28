import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./src/App";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
};

const Redirect = () => {
  window.location.replace("https://youtube.com/");
};
