import { Outlet } from "react-router";
import { Header } from "../components/header/header";

export function MainLayout() {

  return (
    <div className="h-screen w-full bg-c-light-yellow">
      <Header />
      <Outlet />
    </div>
  );
}
