import { createBrowserRouter } from "react-router";
import { Home } from "../app/home/home";
import { Checkout } from "../app/checkout/checkout";
import { MainLayout } from "../common/layouts/main-layout";
import { CheckoutLayout } from "../common/layouts/checkout-layout";
import { Login } from "../app/login/login";
import { Profile } from "../app/profile/profile";
import { ProtectedRoute } from "../features/auth/components/protected-route";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        element: <ProtectedRoute />, 
        children: [
          {
            path: "profile",
            Component: Profile,
          }
        ]
      }
    ]
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/checkout",
    Component: CheckoutLayout,
    children: [
      {
        index: true,
        Component: Checkout,
      }
    ]
  }
]);
