import { Provider } from "react-redux";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { store } from "@store/store";
import ErrorPage from "@pages/ErrorPage";
import LandingPage from "@pages/landing/LandingPage";
import CharacterPage from "@pages/character/CharacterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/character/:id",
        element: <CharacterPage />,
    }
]);

function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  );
}

export default App;
