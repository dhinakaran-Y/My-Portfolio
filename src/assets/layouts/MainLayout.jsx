import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
      <>
        <h1 className="font-bold text-4xl text-red-500 m-12 underline">
          hello, Dhina
        </h1>
        <Outlet />
      </>
    );
}

export default MainLayout