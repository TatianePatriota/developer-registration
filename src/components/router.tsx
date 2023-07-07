import { createBrowserRouter } from "react-router-dom";
import { FristForm } from "../routes/FristForm";
import { SecondForm } from "../routes/SecondForm";
import { ThirdForm } from "../routes/ThirdForm";

export default createBrowserRouter([
  {
    path: "/",
    element: <FristForm />,
  },
  {
    path: "/step2",
    element: <SecondForm />,
  },
  {
    path: "/step3",
    element: <ThirdForm />,
  },
]);
