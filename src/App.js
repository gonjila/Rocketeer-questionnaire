import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
