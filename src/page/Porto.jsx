import { Link } from "react-router-dom";
import bintang from "./../assets/bintang.svg";
import iconHtml from "./../assets/icon_html.svg";
import iconCss from "./../assets/icon_css.svg";
import iconJs from "./../assets/icon_js.svg";
import iconTailwind from "./../assets/icon_tailwind.svg";
import gambarSwit from "./../assets/gambar-swit.webp";
import panah from "./../assets/panah.svg";
import panahItem from "./../assets/panah-item.svg";
import gambarDataDiri from "./../assets/gambar-datadiri.webp";
import gambarGaleri from "./../assets/gambar-galeri.webp";

function Porto() {
  return (
    <div className="outer-content col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] flex flex-col">
      <div className="skill-star grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-rows-2 xl:grid-rows-1 xl:h-28 h-56 mb-4 ml-4 lg:mb-6 lg:ml-6">
        <div className="card col-span-1 h-20 bg-white rounded-xl mt-4 lg:mt-6 mr-4 lg:mr-6 grid grid-cols-3 flex-none shadow-lg">
          <div className="ket col-span-2">
            <h3 className="text-[#67748E] font-semibold mt-3 mx-3 sm:text-lg text-base">
              HTML
            </h3>
            <div className="container-bintang flex ml-2.5 mt-1">
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
            </div>
          </div>
          <div className="icon col-span-1 flex">
            <img src={iconHtml} className="p-2 my-auto w-20" />
          </div>
        </div>
        <div className="card col-span-1 h-20 bg-white rounded-xl mt-4 lg:mt-6 mr-4 lg:mr-6 grid grid-cols-3 flex-none shadow-lg">
          <div className="ket col-span-2">
            <h3 className="text-[#67748E] font-semibold mt-3 mx-3 sm:text-lg text-base">
              CSS
            </h3>
            <div className="container-bintang flex ml-2.5 mt-1">
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
            </div>
          </div>
          <div className="icon col-span-1 flex">
            <img src={iconCss} className="p-2 my-auto w-20" />
          </div>
        </div>
        <div className="card col-span-1 h-20 bg-white rounded-xl mt-4 lg:mt-6 mr-4 lg:mr-6 grid grid-cols-3 flex-none shadow-lg">
          <div className="ket col-span-2">
            <h3 className="text-[#67748E] font-semibold mt-3 mx-3 sm:text-lg text-base">
              Java Script
            </h3>
            <div className="container-bintang flex ml-2.5 mt-1">
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
            </div>
          </div>
          <div className="icon col-span-1 flex">
            <img src={iconJs} className="p-2 my-auto w-20" />
          </div>
        </div>
        <div className="card col-span-1 h-20 bg-white rounded-xl mt-4 lg:mt-6 mr-4 lg:mr-6 grid grid-cols-3 flex-none shadow-lg">
          <div className="ket col-span-2">
            <h3 className="text-[#67748E] font-semibold mt-3 mx-3 sm:text-lg text-base">
              Tailwind
            </h3>
            <div className="container-bintang flex ml-2.5 mt-1">
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
              <img src={bintang} className="w-4 sm:w-5 mr-1" />
            </div>
          </div>
          <div className="icon col-span-1 flex">
            <img src={iconTailwind} className="p-2 my-auto w-20" />
          </div>
        </div>
      </div>
      <div className="content-row-1 grid grid-cols-2 md:grid-cols-3 lg:ml-6 ml-4">
        <div className="swit-otomatis col-span-2 pt-4 bg-white p-4 rounded-xl lg:mr-6 mr-4 min-h-[16rem] grid grid-cols-12 shadow-lg">
          <div className="gambar-swit sm:col-span-5 col-span-12 flex sm:hidden">
            <img
              src={gambarSwit}
              className="px-1 mx-auto 2xl:px-16 xl:px-6 lg:px-2"
            />
          </div>
          <div className="ket-swit sm:col-span-7 col-span-12 py-1 pl-1 pr-2">
            <h2 className="font-bold">Swit Otomatis</h2>
            <p className="text-sm mb-3 xl:mb-5">
              Mekanismenya user terlebih dahulu memilih gunting, batu, atau
              kertas kemudian komputer akan secara random memilih gunting, batu,
              atau kertas, dan debandingkan untuk mendapatkan pemenangnnya.
            </p>
            <div className="flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                //href="./../porto/Suit DOM/suitDOM.html"
                className="bg-[#1EBE75] py-[5px] px-6 text-white rounded-lg hover:brightness-110 cursor-pointer shadow-md hover:scale-105"
              >
                Coba Sekarang
              </a>
            </div>
          </div>
          <div className="gambar-swit sm:col-span-5 col-span-12 sm:flex hidden">
            <img
              src={gambarSwit}
              className="px-1 my-auto 2xl:px-16 xl:px-6 lg:px-2"
            />
          </div>
        </div>
        <div className="to-javascript col-span-2 md:col-span-1 bg-white p-4 rounded-xl lg:mr-6 mr-4 h-64 shadow-lg sm:mt-0 mt-4">
          <div className="inner-javascript bg-cover backdrop-brightness-50 text-white rounded-lg p-4 h-56 hover:brightness-125">
            <h2 className="mb-1 font-semibold">Document Object Model</h2>
            <p className="font-extralight text-xs text-slate-300 mb-5">
              untuk dapat memahami cara kerja document object model anda dapat
              mengakses dokumentasinya berikut
            </p>
            <Link
              to="/article/javascript"
              className="flex text-sm hover:scale-[1.03] w-[8rem]"
            >
              <h2 className="block">Baca Sekarang</h2>
              <img src={panah} className="my-auto ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className="content-row-2 grid grid-cols-2 md:grid-cols-3 lg:ml-6 ml-4">
        <div className="to-css col-span-2 md:col-span-1 bg-white p-4 rounded-xl lg:mt-6 mt-4 lg:mr-6 mr-4 h-64 shadow-lg">
          <div className="inner-css rounded-lg p-1 h-56 grid grid-cols-2">
            <div className="gambar-css flex bg-cover col-span-1 md:col-span-2 min-h-[7rem] rounded-lg"></div>
            <div className="ket-css col-span-1 md:col-span-2 py-4 md:py-1 pl-4 md:pl-0">
              <h2 className="mb-1 font-semibold">Sekilas Tentang CSS</h2>
              <p className="font-extralight text-xs text-slate-700 mb-3">
                CSS merupakan yang mengatur komponen dalam sebuah web.
              </p>
              <Link
                to="/article/css"
                className="flex text-sm hover:scale-[1.03]"
              >
                <h2 className="block font-semibold">Lebih lanjut</h2>
                <img src={panahItem} className="my-auto ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <div className="data-diri col-span-2 pt-4 bg-white p-4 rounded-xl lg:mt-6 mt-4 lg:mr-6 mr-4 min-h-[16rem] grid grid-cols-12 shadow-lg">
          <div className="gambar-datadiri sm:col-span-6 col-span-12 flex sm:hidden">
            <img
              src={gambarDataDiri}
              className="px-1 mx-auto 2xl:px-20 xl:px-6 lg:px-2"
            />
          </div>
          <div className="ket-swit sm:col-span-6 col-span-12 py-1 pl-1 pr-2">
            <h2 className="font-bold">Data Diri</h2>
            <p className="text-sm mb-3 xl:mb-5">
              Web ini berisi data diri dalam perkuliahan berupa nama, kelas,
              NRP, jadwal, dll. Tujuan pembuatan web ini adalah untuk tugas
              workshop web design.
            </p>
            <div className="flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                //href="./../porto/my web/about/index.html"
                className="bg-[#1EBE75] py-[5px] px-6 text-white rounded-lg hover:brightness-110 cursor-pointer shadow-md hover:scale-105"
              >
                Coba Sekarang
              </a>
            </div>
          </div>
          <div className="gambar-datadiri col-span-6 sm:flex hidden">
            <img
              src={gambarDataDiri}
              className="px-1 my-auto 2xl:px-20 xl:px-6 lg:px-2"
            />
          </div>
        </div>
      </div>
      <div className="content-row-3 grid grid-cols-2 md:grid-cols-3 lg:ml-6 ml-4">
        <div className="swit-otomatis col-span-2 pt-4 bg-white p-4 rounded-xl lg:mt-6 mt-4 lg:mr-6 mr-4 h-64 grid grid-cols-12 shadow-lg">
          <div className="ket-galeri col-span-7 py-1 pl-1 pr-2">
            <h2 className="font-bold">Galeri Sederhana</h2>
            <p className="text-sm mb-3 xl:mb-5">
              Galeri ini berisi beberapa foto, foto tersebut dapat di pilih
              untuk menamilkannya dengan lebih besar. Galeri ini dibuat dalam
              rangka mengimplementasikan pembelajaran DOM.
            </p>
            <div className="flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                //href="./../porto/GaleriDOM/galerDOM.html"
                className="bg-[#1EBE75] py-[5px] px-6 text-white rounded-lg hover:brightness-110 cursor-pointer shadow-md hover:scale-105"
              >
                Coba Sekarang
              </a>
            </div>
          </div>
          <div className="gambar-galeri col-span-5 flex">
            <img
              src={gambarGaleri}
              className="px-1 my-auto 2xl:px-16 xl:px-6 lg:px-2"
            />
          </div>
        </div>
        <div className="to-html col-span-2 md:col-span-1 bg-white p-4 rounded-xl lg:my-6 my-4 lg:mr-6 mr-4 h-64 shadow-lg">
          <div className="inner-html bg-html-bg bg-cover text-white rounded-lg p-4 h-56 hover:brightness-125">
            <h2 className="mb-1 font-semibold">HTML</h2>
            <p className="font-extralight text-xs text-slate-300 mb-5">
              untuk dapat memahami cara kerja html anda dapat mengakses
              dokumentasinya berikut
            </p>
            <Link
              to="/article/html"
              className="flex text-sm hover:scale-[1.03]"
            >
              <h2 className="block">Baca Sekarang</h2>
              <img src={panah} className="my-auto ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Porto;
