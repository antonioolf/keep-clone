import React from "react";
import GlobalStyle from "./global-style";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const firebaseConfig = {
  apiKey: "AIzaSyAJdhTS_GoWkM7yd8au1MuIex8ZQjPC8PI",
  authDomain: "keep-clone-37fc6.firebaseapp.com",
  projectId: "keep-clone-37fc6",
  storageBucket: "keep-clone-37fc6.appspot.com",
  messagingSenderId: "397420543041",
  appId: "1:397420543041:web:639db6c64a42236c481ac0",
  measurementId: "G-F546ZS7JN1"
};

const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);

console.log(perf);
