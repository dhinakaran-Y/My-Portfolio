import { Outlet } from "react-router-dom";
import { StrictMode } from "react";
import TheNavbar from "../components/TheNavbar";

const MainLayout = () => {
    return (
      <StrictMode>
        <TheNavbar/>
        <Outlet />
      </StrictMode>
    );
}

export default MainLayout