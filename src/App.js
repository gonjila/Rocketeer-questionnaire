import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/Welcome";
import ApplicationsPage from "./pages/applications";
import PersonalInformationPage from "./pages/personal-information";
import TechnologiesPage from "./pages/technlogies";
import CovidPage from "./pages/covid-policies";
import AboutEventsPage from "./pages/about-events";
import SubmitterPage from "./pages/submitter";
import PageForGratitude from "./pages/gratitude";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/personal-information"
          element={<PersonalInformationPage />}
        />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/covid" element={<CovidPage />} />
        <Route path="/about-events" element={<AboutEventsPage />} />
        <Route path="/submitter" element={<SubmitterPage />} />
        <Route path="/gratitude" element={<PageForGratitude />} />
        <Route path="/applications" element={<ApplicationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
