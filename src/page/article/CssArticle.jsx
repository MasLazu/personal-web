function CssArticle() {
  return (
    <div className="outer-content col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] lg:ml-6">
      <div className="content ml-4 sm:ml-0 lg:mr-6 mr-4 lg:my-6 my-4 bg-white rounded-xl p-10 shadow-lg lg:min-h-[93.6vh] md:min-h-[95.6vh] grid grid-cols-4 auto-rows-auto">
        <h1 className="font-semibold text-3xl text-center col-span-4 m-auto mb-10">
          Cascading Style Sheet
        </h1>
        <div className="ilustrasi md:hidden flex col-span-4">
          <lottie-interactive
            path="https://assets3.lottiefiles.com/packages/lf20_zzm4wo98.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <p className="md:col-span-3 col-span-4 row-span-1 mb-3">
          CSS adalah bahasa Cascading Style Sheet dan biasanya digunakan untuk
          mengatur tampilan elemen yang tertulis dalam bahasa markup, seperti
          HTML. CSS berfungsi untuk memisahkan konten dari tampilan visualnya di
          situs. CSS dibuat dan dikembangkan oleh W3C (World Wide Web
          Consortium) pada tahun 1996 untuk alasan yang sederhana. Dulu HTML
          tidak dilengkapi dengan tags yang berfungsi untuk memformat halaman.
          Anda hanya perlu menulis markup untuk situs. Karena website memiliki
          berbagai font, warna background, dan style, maka untuk menulis kembali
          (rewrite) kode memerlukan proses yang sangat panjang dan sulit. Oleh
          sebab itu, W3C membuat CSS untuk menyelesaikan masalah ini.
        </p>
        <div className="ilustrasi hidden md:flex lg:col-span-1 md:row-span-2 row-span-1 md:p-8">
          <lottie-interactive
            path="https://assets3.lottiefiles.com/packages/lf20_zzm4wo98.json"
            interaction="play-on-show"
          ></lottie-interactive>
        </div>
        <p className="xl:col-span-3 col-span-4 row-span-1 mb-3">
          HTML dan CSS memiliki keterikatan yang erat. Karena HTML adalah bahasa
          markup (fondasi situs) dan CSS memperbaiki style (untuk semua aspek
          yang terkait dengan tampilan website), maka kedua bahasa pemrograman
          ini harus berjalan beriringan. Tak hanya penting di sisi teknis, CSS
          juga berpengaruh pada tampilan sebuah website. Tentunya Anda tidak
          ingin website terlihat seperti situs yang ‘telanjang’ tanpa modifikasi
          apa pun, bukan?
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          Anda pasti pernah membuka website, tapi sesaat kemudian gagal loading
          dan malah menampilkan background putih yang didominasi teks hitam dan
          biru. Situasi ini menggambarkan bahwa CSS pada situs tersebut tidak
          dapat di-load dengan benar atau situs sama sekali tidak memiliki CSS.
          Umumnya, situs seperti ini hanya menerapkan HTML. Sebelum menggunakan
          CSS, semua stylizing harus disertakan ke dalam markup HTML. Itu berati
          Anda harus mendeskripsikan semua background, warna font, alignment,
          dan lain-lain secara terpisah.
        </p>
        <p className="col-span-4 row-span-1">
          Dengan CSS, Anda dapat mengatur tampilan semua aspek pada file yang
          berbeda, lalu menentukan style, kemudian mengintegrasikan file CSS di
          atas markup HTML. Alhasil, markup HTML bisa lebih mudah di-maintain.
          Singkatnya, dengan CSS, Anda tidak perlu mendeskripsikan tampilan dari
          masing-masing elemen secara berulang-ulang. Anda tidak membuang-buang
          waktu, kode yang digunakan pun lebih singkat, dan error dapat
          diminimalisir. Karena opsi kustomisasi yang ada hampir tak terbatas,
          CSS memungkinkan Anda untuk menerapkan berbagai macam style pada satu
          halaman HTML.
        </p>
        <div className="button col-span-4 row-span-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.w3schools.com/css/default.asp"
            className="bg-[#1EBE75] flex w-56 h-10 m-auto rounded-lg shadow-md hover:scale-105 mt-14"
          >
            <h2 className="text-white m-auto">Kunjungi dokumentasi</h2>
          </a>
        </div>
      </div>
    </div>
  );
}
export default CssArticle;
