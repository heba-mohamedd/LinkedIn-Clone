import { RouterProvider } from "react-router";
import "./App.css";
import { router } from "./Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
