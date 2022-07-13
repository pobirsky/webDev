import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lesson from "./13_hoc/Lesson";

// ReactDOM.render(<Lesson child={<Button/>}><Counter /></Lesson>, document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Lesson />
  </StrictMode>
);
