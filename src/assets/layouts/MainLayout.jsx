import { Outlet } from "react-router-dom";
import { StrictMode } from "react";

const MainLayout = () => {
    return (
      <StrictMode>
        <h1 className="font-bold text-4xl text-red-500 m-12 underline">
          hello, Dhina
        </h1>
        <Outlet />
      </StrictMode>
    );
}

export default MainLayout