import { Outlet } from "react-router-dom";
import NavBar from "../../components/Core/NavBar";

function HomePage() {
  return (
    <>
      <NavBar>
        <Outlet />
      </NavBar>
    </>
  );
}

export default HomePage;
