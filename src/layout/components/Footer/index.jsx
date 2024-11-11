import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-blue-600 text-white">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <img
            src="https://storage.googleapis.com/a1aa/image/NXi02uF62EpVBp0ES04zjuGZErU4G22nDwUlg41VYmlTK17E.jpg"
            alt="logo"
            className="w-[50px] h-[50px]"
          />
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            An Nam Nội Thất
          </h2>
        </div>
        <a
          className="flex justify-center gap-[10px] mt-[15px] xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
          href="tel:0333333333"
        >
          <FontAwesomeIcon icon={faPhone} /> <p className="">033.333.3333</p>
        </a>
        <div className="mt-[15px] xl:mt-20">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            <div className="px-5 py-2">
              <Link to="/contact">Liên hệ</Link>
            </div>
            <div className="px-5 py-2">
              <a href="#">Zalo</a>
            </div>
          </nav>
          <p className="mt-7 text-base">© 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
