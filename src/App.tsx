import { Provider } from "react-redux";
import { store } from "@store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import LandingPage from "./pages/landing/landing-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage/>
  },
]);

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  );
}

export default App;
