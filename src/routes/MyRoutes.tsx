import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { UserRegister } from "../pages/UserRegister";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/*" element={<NOTFOUND />} /> */}
      </Routes>
    </BrowserRouter>
  )
}