import gambarTailwind from "./../../assets/article-tailwind.svg";

function TailwindArticle() {
  return (
    <div className="outer-content col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] lg:ml-6">
      <div className="content ml-4 sm:ml-0 lg:mr-6 mr-4 lg:my-6 my-4 bg-white rounded-xl p-10 shadow-lg lg:min-h-[93.6vh] md:min-h-[95.6vh] grid grid-cols-4 auto-rows-auto">
        <h1 className="font-semibold text-3xl text-center col-span-4 m-auto mb-10">
          Tailwind Css
        </h1>
        <div className="ilustrasi md:hidden flex col-span-4">
          <img src={gambarTailwind} className="mx-auto my-6 h-44" />
        </div>
        <p className="md:col-span-3 col-span-4 row-span-1 mb-3">
          Apa itu Tailwind CSS? Jika membaca pada halaman dokumentasinya dia
          menyebut dirinya “A utility-first CSS framework for rapidly building
          custom designs“. Apa maksudnya utility-first? Jadi Tailwind CSS
          memiliki pendekatan yang berbeda dengan framework CSS yang sudah biasa
          kita lihat seperti Bootstrap, Foundation atau Bulma. Jika framework
          lainnya menyediakan komponen yang utuh dan tinggal kita gunakan, beda
          dengan Tailwind CSS yang memberikan class class kecil yang bisa kita
          gunakan dengan sangat fleksibel untuk membangun antarmuka yang sesuai
          keinginan tanpa harus override styles seperti di framework CSS
          lainnya.
        </p>
        <div className="ilustrasi hidden md:flex lg:col-span-1 md:row-span-2 row-span-1 md:p-8">
          <img src={gambarTailwind} />
        </div>
        <p className="xl:col-span-3 col-span-4 row-span-1 mb-3">
          Tentu dalam mempelajari sesuatu kita akan melihat popularitas dari hal
          yang ingin kita pelajari. Bagaimana dengan Tailwind CSS? Saya sendiri
          kenal Tailwind CSS karena mengikuti Twitter pembuatnya, Adam Wathan.
          Untuk mengecek seberapa populer Tailwind CSS, coba cek pada halaman
          State of CSS tahun 2019 ini. Dari koresponden yang ada, hanya 35%
          orang saja yang mengetahui Tailwind CSS, tidak heran jika masih banyak
          yang bertanya apa itu Tailwind CSS, sedangkan 50% tertarik dengan
          Tailwind CSS. Dan yang cukup mengejutkan 80% orang yang sudah memakai
          merasa puas dengan Tailwind CSS.
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          ada beberapa keuntungan yang ditawarkan tailwind diantaranya adalah
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          1. Kita tidak membuang waktu untuk memikirkan nama dari class, salah
          satu yang memakan waktu programmer adalah menentukan nama class /
          variabel. Hal ini tidak terjadi dalam penggunaan Tailwind CSS.
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          2. File CSS yang tidak mudah gemuk, dengan approach yang biasa, akan
          membuat file CSS cepat menjadi besar, karena setiap ada penamahan
          fitur kita akan menambahkannya ke CSS, dengan utilities semuanya
          reusable dan kita tidak perlu menuliskan CSS baru.
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          3. Membuat perubahan terasa aman, CSS itu global dan kita tidak tahu
          apa yang akan rusak ketika kita melakukan perubahan. Membuat class di
          dalam HTML itu terjadi dalam lingkup lokal dan kita tidak perlu
          khawatir ada yang rusak ketika melakukan perubahan.
        </p>
        <div className="button col-span-4 row-span-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tailwindcss.com/"
            className="bg-[#1EBE75] flex w-56 h-10 m-auto rounded-lg shadow-md hover:scale-105 mt-14"
          >
            <h2 className="text-white m-auto">Kunjungi dokumentasi</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
export default TailwindArticle;
