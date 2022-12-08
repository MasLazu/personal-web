import { Carousel } from "flowbite-react";
import slide1 from "./../../assets/makalah-internet/Slide1.PNG";
import slide2 from "./../../assets/makalah-internet/Slide2.PNG";
import slide3 from "./../../assets/makalah-internet/Slide3.PNG";
import slide4 from "./../../assets/makalah-internet/Slide4.PNG";
import slide5 from "./../../assets/makalah-internet/Slide5.PNG";
import slide6 from "./../../assets/makalah-internet/Slide6.PNG";
import slide7 from "./../../assets/makalah-internet/Slide7.PNG";

function TugasMakalahInternet() {
  return (
    <div className="outer-content col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] lg:ml-6">
      <div className="content ml-4 sm:ml-0 lg:mr-6 mr-4 lg:my-6 my-4 bg-white rounded-xl p-10 shadow-lg lg:min-h-[93.6vh] md:min-h-[95.6vh] grid grid-cols-4 auto-rows-auto">
        <h1 className="font-semibold text-3xl text-center col-span-4 m-auto mb-10">
          Pengaruh Internet Terhadap Budaya
        </h1>
        <div className="ilustrasi md:hidden flex col-span-4">
          <lottie-interactive
            path="https://assets8.lottiefiles.com/packages/lf20_rLfMZE.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <p className="md:col-span-3 col-span-4 row-span-1 mb-3">
          Secara harfiah, Internet kependekan dari Interconnected-Networking
          yang merupakan rangkaian komputer yang terhubung di dalam beberapa
          rangkaian. Manakala Internet (huruf “I” besar) ialah sistem komputer
          umum, yang berhubungan secara global dan menggunakan TCP/IP sebagai
          protokol paertukaran paket (packet switching communication protocol).
          Rangakain Internet yang terbesar dinamakan Internet. Cara
          menghubungkan rangkaian dengan kaedah ini dinamakan Internetworking.
        </p>
        <div className="ilustrasi hidden md:flex lg:col-span-1 md:row-span-2 row-span-1">
          <lottie-interactive
            path="https://assets8.lottiefiles.com/packages/lf20_rLfMZE.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <p className="xl:col-span-3 col-span-4 row-span-1 mb-3">
          Secara keseluruhan Internet adalah jaringan besar yang saling
          berhubungan dari jaringan-jaringan komputer yang menghubungkan
          orang-orang dan komputer-komputer diseluruh dunia, melalui telepon,
          satelit dan sistem-sistem komunikasi yang lain. Internet dibentuk oleh
          jutaan komputer yang terhubung bersama dari seluruh dunia, memberi
          jalan bagi informasi (mulai dari text, gambar, audio, video dan
          lainnya) untuk dapat dikirim dan dinikmati bersama. Untuk dapat
          bertukar informasi, digunakan protocol standar yaitu Transmision
          Control Protocol dan Internet Protocol yang lebih dikenal sebagai
          TCP/IP.
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          Teknologi dapat dipandang positif ketika membawa manfaat besar dan
          membantu aktivitas manusia. Namun, teknologi juga dapat dipandang
          negatif jika memberi dampak buruk ke masyarakat, contohnya perubahan
          nilai yang mengarah ke hal negatif atau lain sebagainya. Perkembangan
          atau kemajuan teknologi yang semakin pesat ini membawa pengaruh di
          berbagai bidang kehidupan manusia, salah satu contohnya bidang sosial
          dan budaya. Berikut ini adalah pengaruh internet terhadap budaya :
        </p>
        <div className="carosel col-span-4 felx my-10">
          <div className="md:h-[27vw] md:w-[48vw] h-[36vw] w-[64vw] mx-auto">
            <Carousel>
              <img src={slide1} alt="..." />
              <img src={slide2} alt="..." />
              <img src={slide3} alt="..." />
              <img src={slide4} alt="..." />
              <img src={slide5} alt="..." />
              <img src={slide6} alt="..." />
              <img src={slide7} alt="..." />
            </Carousel>
          </div>
        </div>
        <p className="col-span-4 row-span-1 mb-3">
          Beberapa hal yang dibahas di atas adalah beberapa contoh pengaruh
          internet terhadap budaya. Dengan adanya digital, budaya serta adat
          istiadat di Indonesia sangat terbantu dan banyak menimbulkan dampak
          yang positif dalam perkembangan budayanya. Namun, hal tersebut juga
          dapat menimbulkan dampak yang negatif pula jika tidak diterapkan
          dengan benar dan sesuai. Untuk itu diperlukan kesadaran bagi
          masyarakat untuk mengakses teknologi digital secara baik dan benar.
          Selain itu, perkembangan teknologi di masa mendatang sebaiknya mampu
          meningkatkan kesempatan bagi masyarakat umum untuk ikut serta dalam
          proses pengumpulan, pembuatan dan pendistribusian dari informasi media
          teknologi digital.
        </p>
      </div>
    </div>
  );
}
export default TugasMakalahInternet;
