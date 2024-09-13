import { Search } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between text-white p-8 bg-slate-950 lg:h-20 ">
      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/">
          <img src="/public/netflix.png" className="w-16 sm:w-28" />
        </Link>
        <Link to={'/search?mediaType=movie'} className="lg:text-xl">
          Moive
        </Link>
        <Link to={'/search?mediaType=tv'} className="lg:text-xl">
          TV Show
        </Link>
      </div>
      <div>
        <Link to={'/search'}>
          <Search />
        </Link>
      </div>
    </header>
  );
};

export default Header;
