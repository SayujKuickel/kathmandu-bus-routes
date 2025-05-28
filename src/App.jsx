import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ViewAllBusRoutes from "@/pages/bus/ViewAllBusRoutes";
import ViewBusRoute from "@/pages/bus/ViewBusRoute";
import NotFound from "@/pages/NotFound";
import Contact from "@/pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />

      <Route path="bus">
        <Route index element={<ViewAllBusRoutes />} />
        <Route path=":id" element={<ViewBusRoute />} />
      </Route>

      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
