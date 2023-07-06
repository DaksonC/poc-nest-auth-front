import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { UserRegister } from "../pages/UserRegister";
import { NotFound } from "../pages/NotFound";
import { Welcome } from "../pages/Welcome";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}