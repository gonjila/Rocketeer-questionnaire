import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationsPage from "./pages/applications";
import PersonalInformationPage from "./pages/personal-information";

import WelcomePage from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/personal-information"
          element={<PersonalInformationPage />}
        />
        <Route path="/applications" element={<ApplicationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
