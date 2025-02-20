import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import FoodMenu from "../pages/FoodMenu";
import DrinkMenu from "../pages/DrinkMenu";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route>
          <Route path="/home" element={<Home />} />
          <Route path="/food" element={<FoodMenu />} />
          <Route path="/drink" element={<DrinkMenu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Switch>
    </>
  );
}
