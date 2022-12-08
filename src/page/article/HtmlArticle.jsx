function HtmlArticle() {
  return (
    <div className="outer-content col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] lg:ml-6">
      <div className="content ml-4 sm:ml-0 lg:mr-6 mr-4 lg:my-6 my-4 bg-white rounded-xl p-10 shadow-lg lg:min-h-[93.6vh] md:min-h-[95.6vh] grid grid-cols-4 auto-rows-auto">
        <h1 className="font-semibold text-3xl text-center col-span-4 m-auto mb-10">
          HyperText Markup Language
        </h1>
        <div className="ilustrasi md:hidden flex col-span-4">
          <lottie-interactive
            path="https://assets8.lottiefiles.com/private_files/lf30_wuuqhfmi.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <p className="md:col-span-3 col-span-4 row-span-1 mb-3">
          Hypertext Markup Language (HTML) adalah bahasa markah standar untuk
          dokumen yang dirancang untuk ditampilkan di peramban internet. Ini
          dapat dibantu oleh teknologi seperti Cascading Style Sheets (CSS) dan
          bahasa skrip seperti JavaScript dan VBScript. Peramban internet
          menerima dokumen HTML dari server web atau dari penyimpanan lokal dan
          membuat dokumen menjadi halaman web multimedia. HTML menggambarkan
          struktur halaman web secara semantik dan isyarat awal yang disertakan
          untuk penampilan dokumen. Elemen HTML digambarkan oleh tag, ditulis
          menggunakan tanda kurung siku.
        </p>
        <div className="ilustrasi hidden md:flex lg:col-span-1 md:row-span-2 row-span-1">
          <lottie-interactive
            path="https://assets8.lottiefiles.com/private_files/lf30_wuuqhfmi.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <p className="xl:col-span-3 col-span-4 row-span-1 mb-3">
          mengelilingi dan memberikan informasi tentang teks dokumen dan mungkin
          menyertakan tag lain sebagai sub-elemen. Peramban tidak menampilkan
          tag HTML, tetapi menggunakannya untuk menafsirkan konten halaman. HTML
          dapat menyematkan program yang ditulis dalam bahasa skrip seperti
          JavaScript, yang memengaruhi perilaku dan konten halaman web.
          Dimasukkannya CSS mendefinisikan tampilan dan tata letak konten. World
          Wide Web Consortium (W3C), mantan pengelola HTML dan pemelihara
          standar CSS saat ini, telah mendorong penggunaan CSS pada HTML
          presentasi eksplisit sejak 1997.
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          Dokumen HTML mirip dengan dokumen tulisan biasa, hanya dalam dokumen
          ini sebuah tulisan bisa memuat instruksi yang ditandai dengan kode
          atau lebih dikenal dengan TAG tertentu. untuk menonaktifkan cetak
          tebal tersebut. HTML lebih menekankan pada penggambaran
          komponen-komponen struktur dan format di dalam halaman web daripada
          menentukan penampilannya. Sedangkan penjelajah web digunakan untuk
          menginterpretasikan susunan halaman ke gaya built-in penjelajah web
          dengan menggunakan jenis tulisan, tab, warna, garis, dan perataan text
          yang dikehendaki ke komputer yang menampilkan halaman web. Pranala.
          Salah satu hal Penting tentang eksistensi HTML adalah tersedianya
          Lingua franca (bahasa Komunikasi) antar komputer dengan kemampuan
          berbeda.
        </p>
        <p className="col-span-4 row-span-1">
          Salah satu hal Penting tentang eksistensi HTML adalah tersedianya
          Lingua franca (bahasa Komunikasi) antar komputer dengan kemampuan
          berbeda. Pengguna Macintosh tidak dapat melihat tampilan yang sama
          sebagaimana tampilan yang terlihat dalam pc berbasis Windows. Pengguna
          Microsoft Windows pun tidak akan dapat melihat tampilan yang sama
          sebagaimana tampilan yang terlihat pada pengguna yang menggunakan
          Produk-produk Sun Microsystems. namun demikian pengguna-pengguna
          tersebut dapat melihat semua halaman web yang telah diformat dan
          berisi Grafika dan pranala
        </p>
        <div className="button col-span-4 row-span-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3schools.com/html"
            className="bg-[#1EBE75] flex w-56 h-10 m-auto rounded-lg shadow-md hover:scale-105 mt-14"
          >
            <h2 className="text-white m-auto">Kunjungi dokumentasi</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
export default HtmlArticle;
