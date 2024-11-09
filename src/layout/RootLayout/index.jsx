import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-[20]">
        <Header />
      </div>
      <div className="relative ml-[180px] overflow-y-auto top-[120px]">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
