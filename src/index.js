import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
// import { Navbar } from "./components/navbar";
// import { SectionTop } from "./components/sectionTop";
// import { AboutMove } from "./components/aboutMove";
// import { IEOMove } from "./components/ieoMove";
// import { NewsMove } from "./components/newsMove";
// import { GlobalMove } from "./components/globalMove";
// import { RoadMove } from "./components/roadMove";
// import { News } from "./components/News";
// import { FAQMove } from "./components/faqMove";
// import { Footer } from "./components/footer";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <Navbar />

    <SectionTop />
    <AboutMove />
    <IEOMove />
    <NewsMove />
    <GlobalMove />
    <RoadMove />
    <News />
    <FAQMove />
    <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
