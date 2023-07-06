import { BrowserRouter, Route } from "react-router-dom";
import { SecondForm } from "../pages/SecondForm/SecondForm";
import { ThirdForm } from "../pages/ThirdForm/ThirdForm";
import { FristForm } from "../pages/FristForm/FristForm";

export function Router() {
  return (
    <BrowserRouter>
      <Route path="/" Component={FristForm} />
      <Route path="/step2" Component={SecondForm} />
      <Route path="/step3" Component={ThirdForm} />
    </BrowserRouter>
  );
}
