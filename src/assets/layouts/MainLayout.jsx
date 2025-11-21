import { Outlet } from "react-router-dom";
import { StrictMode } from "react";
import TheNavbar from "../components/TheNavbar";
import TheFooter from "../components/TheFooter";

const MainLayout = () => {
    return (
      <StrictMode>
        <TheNavbar />
        <Outlet />
        <TheFooter />
      </StrictMode>
    );
}

export default MainLayout