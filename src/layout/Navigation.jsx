import { Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";

import logo from "./../assets/my-logo.svg";
import porto from "./../assets/btn-porto.svg";
import schedule from "./../assets/btn-schadule.svg";
import article from "./../assets/btn-article.svg";
import about from "./../assets/btn-about.svg";
import aboutSelect from "./../assets/btn-about-select.svg";
import articleSelect from "./../assets/btn-article-select.svg";
import scheduleSelect from "./../assets/btn-schadule-select.svg";
import portoSelect from "./../assets/btn-porto-select.svg";

function Navigation() {
  const location = useLocation();

  // function handleIcon() {
  //   setTimeout(() => {
  //     setUrlNow(window.location.href);
  //   }, 1);
  // }

  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="block sm:hidden col-span-6 shadow-lg z-20"
      >
        <Navbar.Brand>
          <img src={logo} className="mr-3 h-9" alt="mfaziz logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            mfaziz
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to="/">
            <Navbar.Link active={location.pathname == "/"}>About</Navbar.Link>
          </Link>
          <Link to="/porto">
            <Navbar.Link active={location.pathname == "/porto"}>
              Porto
            </Navbar.Link>
          </Link>
          <Link to="/schedule">
            <Navbar.Link active={location.pathname == "/schedule"}>
              Schedule
            </Navbar.Link>
          </Link>
          <Link to="/article">
            <Navbar.Link active={location.pathname == "/article"}>
              Article
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <nav className="side-nav col-span-1 md:col-span-1 lg:col-span-3 lg:my-6 lg:ml-6 my-4 ml-4 bg-white rounded-xl p-2 md:p-4 shadow-lg items-center min-h-[92.8vh] sm:block hidden">
        <div className="logo flex items-center justify-center">
          <img src={logo} alt="logo" className="w-20 lg:mr-[2vw]" />
          <h1 className="hidden lg:block font-bold text-2xl my-auto text-[#343434]">
            mfaziz
          </h1>
        </div>
        <hr className="mb-[16vh]" />
        <div>
          <Link
            to="/"
            className="ops-1 flex my-[8vh] cursor-pointer hover:scale-[1.03]"
          >
            <img
              src={location.pathname == "/" ? aboutSelect : about}
              alt="logo"
              className="w-14 xl:mr-[2.5vw] lg:mr-[2vw] mx-auto lg:mx-[1vw] xl:mx-[2vw]"
            />
            <h1 className="hidden lg:block font-semibold text-2xl my-auto text-[#7D7D7D]">
              About
            </h1>
          </Link>
          <Link
            to="/porto"
            className="ops-2 flex my-[8vh] cursor-pointer hover:scale-[1.03]"
          >
            <img
              src={location.pathname == "/porto" ? portoSelect : porto}
              alt="logo"
              className="w-14 xl:mr-[2.5vw] lg:mr-[2vw] mx-auto lg:mx-[1vw] xl:mx-[2vw]"
            />
            <h1 className="hidden lg:block font-semibold text-2xl my-auto text-[#7D7D7D]">
              Porto
            </h1>
          </Link>
          <Link
            to="/schedule"
            className="ops-3 flex my-[8vh] cursor-pointer hover:scale-[1.03]"
          >
            <img
              src={location.pathname == "/schedule" ? scheduleSelect : schedule}
              alt="logo"
              className="w-14 xl:mr-[2.5vw] lg:mr-[2vw] mx-auto lg:mx-[1vw] xl:mx-[2vw]"
            />
            <h1 className="hidden lg:block font-semibold text-2xl my-auto text-[#7D7D7D]">
              Schedule
            </h1>
          </Link>
          <Link
            to="/article"
            className="ops-4 flex my-[8vh] mb-[4vh] cursor-pointer hover:scale-[1.03]"
          >
            <img
              src={
                location.pathname == "/article" ||
                location.pathname == "/article/html" ||
                location.pathname == "/article/css" ||
                location.pathname == "/article/javascript" ||
                location.pathname == "/article/tailwind" ||
                location.pathname == "/article/react" ||
                location.pathname == "/article/cara-deploy-web" ||
                location.pathname == "/article/tugas-javascript" ||
                location.pathname == "/article/tugas-makalah-internet"
                  ? articleSelect
                  : article
              }
              alt="logo"
              className="w-14 xl:mr-[2.5vw] lg:mr-[2vw] mx-auto lg:mx-[1vw] xl:mx-[2vw]"
            />
            <h1 className="hidden lg:block font-semibold text-2xl my-auto text-[#7D7D7D]">
              Article
            </h1>
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navigation;
