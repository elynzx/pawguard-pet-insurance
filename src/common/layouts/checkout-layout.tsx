import { Outlet } from "react-router";

export function CheckoutLayout() {

  return (
    <div className="h-screen w-full bg-c-light-yellow">
      <Outlet />
    </div>
  );
}
