import { Carousel } from "flowbite-react";
import gambarSegitiga from "./../../assets/tugas-javascript/gambar-segitiga.png";
import codeSegitiga from "./../../assets/tugas-javascript/code-segitiga.png";
import gambarSegitigaTerbalik from "./../../assets/tugas-javascript/gambar-segitigaterbalik.png";
import codeSegitigaTerbalik from "./../../assets/tugas-javascript/code-segitigaterbalik.png";
import gambarpanah from "./../../assets/tugas-javascript/gambar-panah.png";
import codePanah from "./../../assets/tugas-javascript/code-panah.png";

function TugasJavascript() {
  return (
    <div className="outer-content col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] lg:ml-6">
      <div className="content ml-4 sm:ml-0 lg:mr-6 mr-4 lg:my-6 my-4 bg-white rounded-xl p-10 shadow-lg lg:min-h-[93.6vh] md:min-h-[95.6vh] grid grid-cols-4 auto-rows-auto">
        <h1 className="font-semibold text-3xl text-center col-span-4 m-auto mb-10">
          Tugas Javascript
        </h1>
        <div className="ilustrasi md:hidden flex col-span-4">
          <lottie-interactive
            path="https://lottie.host/6bcda45a-d461-4f7a-bef2-42909fec46a4/BwhXKIJuIc.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <p className="md:col-span-3 col-span-4 row-span-1 mb-3">
          Javascript adalah suatu bahasa pemrograman tingkat tinggi dan dinamis.
          JavaScript populer di internet dan dapat bekerja di sebagian besar
          penjelajah web populer seperti Google Chrome, Internet Explorer (IE),
          Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat disisipkan
          dalam halaman web menggunakan tag script. JavaScript merupakan salah
          satu teknologi inti World Wide Web selain HTML dan CSS. JavaScript
          membantu membuat halaman web interaktif dan merupakan bagian aplikasi
          web yang esensial.
        </p>
        <div className="ilustrasi hidden md:flex lg:col-span-1 md:row-span-2 row-span-1">
          <lottie-interactive
            path="https://lottie.host/6bcda45a-d461-4f7a-bef2-42909fec46a4/BwhXKIJuIc.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <p className="xl:col-span-3 col-span-4 row-span-1 mb-3">
          Awalnya hanya diimplementasi sebagai client-side dalam penjelajah web,
          kini engine JavaScript disisipkan ke dalam perangkat lunak lain
          seperti dalam server-side dalam server web dan basis data, dalam
          program non web seperti perangkat lunak pengolah kata dan pembaca PDF,
          dan sebagai runtime environment yang memungkinkan penggunaan
          JavaScript untuk membuat aplikasi desktop maupun mobile. JavaScript
          adalah merek dagang yang dikeluarkan dari Oracle Corporation di
          Amerika Serikat.
        </p>
        <p className="col-span-4 row-span-1 mb-3 font-semibold text-lg">
          berikut ini adalah tugas membetuk gambar dari looping javascript
        </p>
        <div className="carosel-segitiga col-span-4 lg:col-span-2 felx my-5">
          <div className="lg:h-64 sm:h-96 h-64 mx-auto">
            <Carousel>
              <img src={gambarSegitiga} alt="..." />
              <img src={codeSegitiga} alt="..." />
            </Carousel>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 row-span-1 mb-3 pl-5 pt-5">
          <p>Analisis</p>
          <p>
            1. div dengan id segitiga di samping berguna sebagai alamat
            ditulisnya code java script yang kita buat
          </p>
          <p>
            2. loop pada lapisan pertama berfungsi sebagai pengontrol banyaknya
            baris.
          </p>
          <p>
            3. loop pada lapisan kedua berfungsi untuk print ‘*’ yang kita
            gunakan untuk membentuk gambar. ‘*’ yang di print akan terus
            bertambah karena semakin lama variabel a akan bertambah sehingga
            batas perulangan loop di atas akan bertambah sampai a tidak kurang
            dari 13.
          </p>
        </div>
        <div className="col-span-4 lg:col-span-2 row-span-1 mb-3 pr-5 pt-5 hidden lg:block">
          <p>Analisis</p>
          <p>
            1. div dengan id segitigaBolakBalik di samping berguna sebagai
            alamat ditulisnya code java script yang kita buat
          </p>
          <p>
            2. loop pada lapisan pertama berfungsi sebagai pengontrol banyaknya
            baris.
          </p>
          <p>
            3. loop pada lapisan kedua berfungsi untuk print ‘*’ yang kita
            gunakan untuk membentuk gambar. ‘*’ yang di print akan terus
            berkurang karena semakin lama variabel a akan bertambah sedangkan
            variabel b akan berkurang seiring loop dilakukan.
          </p>
        </div>
        <div className="carosel-segitiga col-span-4 lg:col-span-2 felx my-5">
          <div className="lg:h-64 sm:h-96 h-64 mx-auto">
            <Carousel>
              <img src={gambarSegitigaTerbalik} alt="..." />
              <img src={codeSegitigaTerbalik} alt="..." />
            </Carousel>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 row-span-1 mb-3 pl-5 pt-5 lg:hidden block">
          <p>Analisis</p>
          <p>
            1. div dengan id segitiga di samping berguna sebagai alamat
            ditulisnya code java script yang kita buat
          </p>
          <p>
            2. loop pada lapisan pertama berfungsi sebagai pengontrol banyaknya
            baris.
          </p>
          <p>
            3. loop pada lapisan kedua berfungsi untuk print ‘*’ yang kita
            gunakan untuk membentuk gambar. ‘*’ yang di print akan terus
            bertambah karena semakin lama variabel a akan bertambah sehingga
            batas perulangan loop di atas akan bertambah sampai a tidak kurang
            dari 13.
          </p>
        </div>
        <div className="carosel-segitiga col-span-4 lg:col-span-2 felx my-5">
          <div className="lg:h-64 sm:h-96 h-64 mx-auto">
            <Carousel>
              <img src={gambarpanah} alt="..." />
              <img src={codePanah} alt="..." />
            </Carousel>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 row-span-1 mb-3 pl-5 pt-5">
          <p>Analisis</p>
          <p>
            1. loop for pertama digunakan untuk membentuk trapesium yang berada
            di atas.
          </p>
          <p>
            2. loop for kedua digunakan untuk membentuk persegi panjang yang ada
            di bawah.
          </p>
        </div>
      </div>
    </div>
  );
}
export default TugasJavascript;
