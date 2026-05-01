import { createBrowserRouter } from "react-router";
import { Home } from "../app/home/home";
import { Checkout } from "../app/checkout/checkout";
import { MainLayout } from "../common/layouts/main-layout";
import { CheckoutLayout } from "../common/layouts/checkout-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      }
    ]
  },
  {
    path: "/checkout",
    Component: CheckoutLayout,
    children: [
      {
        index:true,
        Component: Checkout,
      }
    ]

  }
])