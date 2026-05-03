import { Outlet } from "react-router";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

export function MainLayout() {

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
