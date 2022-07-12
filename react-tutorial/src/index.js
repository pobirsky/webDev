import React from 'react';
import Form from './10_forms/Forms'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ReactDOM.render(<Lesson child={<Button/>}><Counter /></Lesson>, document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Form />
  </StrictMode>
);
