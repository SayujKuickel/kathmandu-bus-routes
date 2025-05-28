import Button from "@/components/ui/Button";
import Header from "@/components/global/Header";
import { Link } from "react-router-dom";
import Footer from "@/components/global/Footer";

const NotFound = () => {
  return (
    <main className="bg-background text-text min-h-screen">
      <Header />

      <div className="my-64">
        <h1 className="heading-1 text-center font-extrabold mb-6">
          Page not Found!
        </h1>

        <div className="flex items-center justify-center gap-4">
          <Link to={"/"}>
            <Button
              iconStyle={"fi fi-rr-map"}
              title={"Map"}
              className={"mx-auto"}
            />
          </Link>

          <Link to={"/bus"}>
            <Button
              iconStyle="fi fi-rr-track"
              title={"Bus Routes"}
              className={"mx-auto"}
            />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default NotFound;
