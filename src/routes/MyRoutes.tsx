import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { UserRegister } from "../pages/UserRegister";
import { NotFound } from "../pages/NotFound";
import { Welcome } from "../pages/Welcome";
import { PrivateRoute } from "../components/PrivateRoute";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<PrivateRoute />}>
          <Route path="" element={<Welcome />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}