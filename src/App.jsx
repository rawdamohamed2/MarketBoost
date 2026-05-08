import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from "./pages/HomePage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import MainLayout from "./components/layout/MainLayout.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/thankyou" element={<ThankYouPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
