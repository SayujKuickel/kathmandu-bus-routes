import { Link } from "react-router-dom";

const routes = [
  {
    name: "Map",
    path: "/",
  },
  {
    name: "Bus Routes",
    path: "/bus",
  },
  {
    name: "About",
    path: "https://sayuj.com.np",
    newTab: true,
  },
];

export const Header = () => {
  return (
    <header className="bg-surface">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to={"/"} className="block w-14 aspect-square">
            <img src="/web-app-manifest-512x512.png" alt="logo" />
          </Link>
          <p className="hidden md:block">
            <span className="block text-xl font-bold -mb-1">Kathmandu</span>
            <span className="block">Bus Routes</span>
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {routes.map((route) => (
            <li>
              <Link
                key={route.path}
                to={route.path}
                target={route.newTab && "_blank"}
                className="hover:bg-surface-3 px-2 py-3 rounded-lg transition-all"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
