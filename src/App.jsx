import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ViewAllBusRoutes from "@/pages/bus/ViewAllBusRoutes";
import ViewBusRoute from "@/pages/bus/ViewBusRoute";
import { Header } from "./components/global/Header";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="bus">
        <Route index element={<ViewAllBusRoutes />} />
        <Route path=":id" element={<ViewBusRoute />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const NotFound = () => {
  return <p> Not found</p>;
};

export default App;
