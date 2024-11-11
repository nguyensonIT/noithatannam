import banner from "../../../assets/img/banner.png";
import NavBar from "./components/NavBar";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col items-center justify-center">
        <div className="fixed z-50 bg-white shadow-md w-full h-[60px] px-[20px] top-0 flex items-center justify-between ">
          <div className="flex justify-center items-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/NXi02uF62EpVBp0ES04zjuGZErU4G22nDwUlg41VYmlTK17E.jpg"
              alt="Company logo"
              className="w-[50px] h-[50px]"
            />
            <h1 className="max-[640px]:text-[12px] ml-[10px] text-2xl font-bold text-red-700">
              Nội Thất An Nam
            </h1>
          </div>
          <div>
            <NavBar />
          </div>
        </div>
        <div className="pt-[60px]">
          <img src={banner} alt="banner" />
        </div>
      </header>
    </div>
  );
};

export default Header;
