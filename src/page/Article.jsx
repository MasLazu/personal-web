import { Link } from "react-router-dom";
import { LottieInteractive } from "lottie-interactive";

function Article() {
  return (
    <div className="outer-content pl-4 lg:pl-6 col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] flex-col">
      <Link
        to="/article/html"
        className="card-article bg-white shadow-lg rounded-xl min-h-[15rem] lg:mt-6 mt-4 lg:mr-6 mr-4 grid grid-cols-3 p-10 hover:scale-[1.01] cursor-pointer"
      >
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex">
          <lottie-interactive
            path="https://assets8.lottiefiles.com/private_files/lf30_wuuqhfmi.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex"></div>
        <div className="desc-article md:col-span-2 col-span-3 my-auto">
          <h2 className="font-semibold text-[#252F40] text-2xl xl:text-3xl mb-3">
            HyperText Markup Language
          </h2>
          <p className="text-[#67748E] xl:text-xl">
            HTML (HyperText Markup Language) adalah suatu bahasa yang
            menggunakan tanda-tanda tertentu (tag) untuk menyatakan kode-kode
            yang harus ditafsirkan oleh browser agar halaman tersebut dapat
            ditampilkan secara benar.
          </p>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 hidden md:flex">
          <div className="mt-[-2vw]">
            <lottie-interactive
              path="https://assets8.lottiefiles.com/private_files/lf30_wuuqhfmi.json"
              interaction="play-on-show"
            ></lottie-interactive>
          </div>
        </div>
      </Link>
      <Link
        to="/article/css"
        className="card-article bg-white shadow-lg rounded-xl min-h-[15rem] lg:mt-6 mt-4 lg:mr-6 mr-4 grid grid-cols-3 p-10 hover:scale-[1.01] cursor-pointer"
      >
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex">
          <lottie-interactive
            path="https://assets3.lottiefiles.com/packages/lf20_zzm4wo98.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <div className="desc-article md:col-span-2 col-span-3 my-auto">
          <h2 className="font-semibold text-[#252F40] text-2xl xl:text-3xl mb-3">
            Cascading Style Sheet
          </h2>
          <p className="text-[#67748E] xl:text-xl">
            CSS adalah singkatan dari cascading style sheets, yaitu bahasa yang
            digunakan untuk menentukan tampilan dan format halaman website.
            Dengan CSS, Anda bisa mengatur jenis font, warna tulisan, dan latar
            belakang halaman.
          </p>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 hidden md:flex">
          <div className="mt-[-2vw]">
            <lottie-interactive
              path="https://assets3.lottiefiles.com/packages/lf20_zzm4wo98.json"
              interaction="play-on-show"
            ></lottie-interactive>
          </div>
        </div>
      </Link>
      <Link
        to="/article/javascript"
        className="card-article bg-white shadow-lg rounded-xl min-h-[15rem] lg:mt-6 mt-4 lg:mr-6 mr-4 grid grid-cols-3 p-10 hover:scale-[1.01] cursor-pointer"
      >
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex">
          <lottie-interactive
            path="https://lottie.host/6bcda45a-d461-4f7a-bef2-42909fec46a4/BwhXKIJuIc.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <div className="desc-article md:col-span-2 col-span-3 my-auto">
          <h2 className="font-semibold text-[#252F40] text-2xl xl:text-3xl mb-3">
            Java Script
          </h2>
          <p className="text-[#67748E] xl:text-xl">
            JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis.
            JavaScript populer di internet dan dapat bekerja di sebagian besar
            penjelajah web populer seperti Google Chrome, Internet Explorer,
            Mozilla Firefox, Netscape dan Opera. Kode JavaScript dapat
            disisipkan dalam halaman web menggunakan tag script.
          </p>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 hidden md:flex">
          <div className="mt-[-2vw]">
            <lottie-interactive
              path="https://lottie.host/6bcda45a-d461-4f7a-bef2-42909fec46a4/BwhXKIJuIc.json"
              interaction="play-on-show"
            ></lottie-interactive>
          </div>
        </div>
      </Link>
      <Link
        to="/article/tailwind"
        className="card-article bg-white shadow-lg rounded-xl min-h-[15rem] lg:mt-6 mt-4 lg:mr-6 mr-4 grid grid-cols-3 p-10 hover:scale-[1.01] cursor-pointer"
      >
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex">
          <lottie-interactive
            path="https://assets5.lottiefiles.com/packages/lf20_akio2kni.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <div className="desc-article md:col-span-2 col-span-3 my-auto">
          <h2 className="font-semibold text-[#252F40] text-2xl xl:text-3xl mb-3">
            Tailwind Css
          </h2>
          <p className="text-[#67748E] xl:text-xl">
            Tailwind CSS adalah kerangka kerja CSS open source. Fitur utama dari
            library ini adalah, tidak seperti framework CSS lainnya seperti
            Bootstrap, library ini tidak menyediakan serangkaian kelas standar
            untuk elemen seperti tombol atau tabel. Sebagai gantinya, ini
            membuat daftar kelas CSS "utilitas" yang dapat digunakan untuk
            menata setiap elemen dengan mencampur dan mencocokkan.
          </p>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 hidden md:flex">
          <div className="mt-[-3vw]">
            <lottie-interactive
              path="https://assets5.lottiefiles.com/packages/lf20_akio2kni.json"
              interaction="play-on-show"
            ></lottie-interactive>
          </div>
        </div>
      </Link>
      <Link
        to="/article/react"
        className="card-article bg-white shadow-lg rounded-xl min-h-[15rem] lg:my-6 my-4 lg:mr-6 mr-4 grid grid-cols-3 p-10 hover:scale-[1.01] cursor-pointer"
      >
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex">
          <lottie-interactive
            path="https://assets10.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
            interaction="play-on-show"
            speed="1.7"
          ></lottie-interactive>
        </div>
        <div className="desc-article md:col-span-2 col-span-3 my-auto">
          <h2 className="font-semibold text-[#252F40] text-2xl xl:text-3xl mb-3">
            React
          </h2>
          <p className="text-[#67748E] xl:text-xl">
            React JS adalah library JavaScript yang biasa digunakan saat
            membangun UI suatu website atau aplikasi web. Jadi, React JS bisa
            dianggap seperti perpustakaan yang berisi berbagai kode JavaScript
            yang sudah tertulis (pre-written). Anda tinggal mengambil kode yang
            ingin Anda gunakan. Sehingga, ini membuat proses coding menjadi
            lebih efisien dengan framework JavaScript tersebut.
          </p>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 hidden md:flex">
          <div className="mt-[-1vw]">
            <lottie-interactive
              path="https://assets4.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
              interaction="play-on-show"
              speed="2"
            ></lottie-interactive>
          </div>
        </div>
      </Link>
      <Link
        to="/article/cara-deploy-web"
        className="card-article bg-white shadow-lg rounded-xl min-h-[15rem] lg:my-6 my-4 lg:mr-6 mr-4 grid grid-cols-3 p-10 hover:scale-[1.01] cursor-pointer"
      >
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex">
          <lottie-interactive
            path="https://assets1.lottiefiles.com/packages/lf20_xsicerbj.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <div className="desc-article md:col-span-2 col-span-3 my-auto">
          <h2 className="font-semibold text-[#252F40] text-2xl xl:text-3xl mb-3">
            Cara Hosting Blog di PENS
          </h2>
          <p className="text-[#67748E] xl:text-xl">
            Untuk mengonlinekan situs, Anda perlu melakukan beberapa cara
            hosting website sehingga pengunjung bisa mengaksesnya di internet.
            Nah, di artikel ini, kami akan menjelaskan cara upload website
            menggunakan layanan yang ada di PENS yang tentunya sudah cukup
            familiar.
          </p>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 hidden md:flex">
          <lottie-interactive
            path="https://assets1.lottiefiles.com/packages/lf20_xsicerbj.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
      </Link>
      <Link
        to="/article/tugas-javascript"
        className="card-article bg-white shadow-lg rounded-xl min-h-[15rem] lg:my-6 my-4 lg:mr-6 mr-4 grid grid-cols-3 p-10 hover:scale-[1.01] cursor-pointer"
      >
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex">
          <lottie-interactive
            path="https://assets4.lottiefiles.com/packages/lf20_4kx2q32n.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <div className="desc-article md:col-span-2 col-span-3 my-auto">
          <h2 className="font-semibold text-[#252F40] text-2xl xl:text-3xl mb-3">
            Tugas Javasctipt (looping)
          </h2>
          <p className="text-[#67748E] xl:text-xl">
            Article kali ini berisi tugas membuat looping segitiga menggunakan
            javascript. Looping merupakan hal dasar yang harus dikuasai oleh
            seorang yang ingin jadi programer. Apa sih pengertian looping itu
            sendiri, looping adalah cara kita untuk membuat perulangan data
            secara berurutan misalnya perulang 1 sampai 10 terus membuat
            perulangan bulan dari januari sampai desember dan masih banyak lagi.
          </p>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 hidden md:flex">
          <lottie-interactive
            path="https://assets4.lottiefiles.com/packages/lf20_4kx2q32n.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
      </Link>
      <Link
        to="/article/tugas-makalah-internet"
        className="card-article bg-white shadow-lg rounded-xl min-h-[15rem] lg:my-6 my-4 lg:mr-6 mr-4 grid grid-cols-3 p-10 hover:scale-[1.01] cursor-pointer"
      >
        <div className="tumbnile-article md:col-span-1 col-span-3 md:hidden flex">
          <lottie-interactive
            path="https://assets8.lottiefiles.com/packages/lf20_rLfMZE.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <div className="desc-article md:col-span-2 col-span-3 my-auto">
          <h2 className="font-semibold text-[#252F40] text-2xl xl:text-3xl mb-3">
            Tugas Makalah (pengeruh internet terhadap budaya)
          </h2>
          <p className="text-[#67748E] xl:text-xl">
            Secara keseluruhan Internet adalah jaringan besar yang saling
            berhubungan dari jaringan-jaringan komputer yang menghubungkan
            orang-orang dan komputer-komputer diseluruh dunia, melalui telepon,
            satelit dan sistem-sistem komunikasi yang lain.
          </p>
        </div>
        <div className="tumbnile-article md:col-span-1 col-span-3 hidden md:flex">
          <div className="mx-auto">
            <lottie-interactive
              path="https://assets8.lottiefiles.com/packages/lf20_rLfMZE.json"
              interaction="play-on-show"
            ></lottie-interactive>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default Article;
