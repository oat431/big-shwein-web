import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import HeroSection from "./components/HeroSection.tsx";
import ProtectedRouteLayout from "./components/ProtectedRouteLayout.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import VerifyEmailPage from "./pages/VerifyEmailPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route element={<ProtectedRouteLayout />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
