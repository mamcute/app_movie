import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Suspense } from "react";
import Loading from "../components/Loading";

const RootLayout = () => {
  return (
    <div>
      <Header />
      {/* Outlet la 1 component dac biet cua react de render ra cac component con */}
      {/* suspense de chia js */}
      <Suspense fallback={<Loading/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default RootLayout;
