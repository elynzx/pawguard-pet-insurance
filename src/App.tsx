import { RouterProvider } from "react-router/dom";
import { router } from "./router/router";
import { UserProvider } from "./common/providers/user-context";

export function App() {

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}
