function ReactArticle() {
  return (
    <div className="outer-content col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] lg:ml-6">
      <div className="content ml-4 sm:ml-0 lg:mr-6 mr-4 lg:my-6 my-4 bg-white rounded-xl p-10 shadow-lg lg:min-h-[93.6vh] md:min-h-[95.6vh] grid grid-cols-4 auto-rows-auto">
        <h1 className="font-semibold text-3xl text-center col-span-4 m-auto mb-10">
          React
        </h1>
        <div className="ilustrasi md:hidden flex col-span-4">
          <lottie-interactive
            path="https://assets10.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
            interaction="play-on-show"
            speed="1.7"
          ></lottie-interactive>
        </div>
        <p className="md:col-span-3 col-span-4 row-span-1 mb-3">
          ReactJS atau React adalah library JavaScript populer buatan Facebook
          yang digunakan dalam proses pengembangan aplikasi mobile dan web.
          React berisi kumpulan snippet kode JavaScript (disebut ‘komponen’)
          yang bisa digunakan berulang kali untuk mendesain antarmuka pengguna.
          Perlu diketahui bahwa ReactJS bukanlah framework JavaScript, karena
          hanya bertugas untuk untuk merender komponen area tampilan aplikasi.
          React adalah alternatif untuk framework seperti Angular dan Vue, yang
          sama-sama bisa digunakan untuk membuat fungsi yang kompleks.
        </p>
        <div className="ilustrasi hidden md:flex lg:col-span-1 md:row-span-2 row-span-1 md:p-8">
          <lottie-interactive
            path="https://assets10.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
            interaction="play-on-show"
            speed="1.7"
          ></lottie-interactive>
        </div>
        <p className="xl:col-span-3 col-span-4 row-span-1 mb-3">
          Nah, selain menjelaskan apa itu React, kami akan membahas fitur,
          kelebihan, dan cara kerjanya. Kami juga akan membandingkan perbedaan
          ReactJS dan React Native terkait perannya di industri aplikasi web dan
          seluler. React memiliki beberapa fitur utama yang menjadikannya lebih
          unggul dibandingkan dengan library JavaScript lainnya. Bagian di bawah
          ini akan menjelaskan fitur-fitur ini dan kegunaannya dalam proses
          development aplikasi mobile dan web.
        </p>
        <p className="col-span-4 row-span-1 font-semibold">JSX</p>
        <p className="col-span-4 row-span-1 mb-3">
          JSX adalah ekstensi syntax JavaScript yang digunakan dalam pembuatan
          elemen React. Developer menggunakannya untuk menyematkan (embed) kode
          HTML pada objek JavaScript. Karena bisa memproses embedding ekspresi
          dan fungsi JavaScript yang valid, JSX pun membantu mempersingkat
          struktur kode yang kompleks.
        </p>
        <p className="col-span-4 row-span-1 font-semibold">DOM Virtual</p>
        <p className="col-span-4 row-span-1 mb-1">
          Document Object Model (DOM) berfungsi untuk menyajikan halaman web
          dalam tampilan struktur data (tree/pohon). ReactJS menyimpan struktur
          data DOM Virtual ini dalam memorinya, sehingga kalau ada perubahan
          pada bagian tertentu dalam struktur data tersebut, Anda tidak perlu
          merender ulang semuanya.
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          Setiap kali ada perubahan data, ReactJS akan membuat satu struktur
          data DOM Virtual baru dan membandingkannya dengan yang sebelumnya,
          lalu mencari cara tercepat untuk menerapkan perubahan tersebut pada
          DOM yang asli. Proses ini disebut diffing.
        </p>
        <p className="col-span-4 row-span-1 font-semibold">
          Komponen dan Properti React
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          ReactJS memisahkan antarmuka pengguna menjadi beberapa potong kode
          tersendiri yang nantinya bisa digunakan lagi, yang disebut komponen.
          Cara kerja komponen React mirip dengan fungsi JavaScript, yaitu
          sama-sama menerima input arbitrer yang disebut properti atau props.
        </p>
        <p className="col-span-4 row-span-1 font-semibold">Manajemen State</p>
        <p className="col-span-4 row-span-1 mb-1">
          State (keadaan) adalah objek JavaScript yang mewakili satu bagian dari
          sebuah komponen. Setiap kali user berinteraksi dengan aplikasi, state
          juga akan berubah, dengan merender UI baru guna menampilkan perubahan
          dari interaksi tersebut.
        </p>
        <p className="col-span-4 row-span-1 mb-3">
          Fitur manajemen state ini mengacu pada prosedur yang dilakukan untuk
          mengelola keadaan sebuah aplikasi React. Contohnya seperti menyimpan
          data di library manajemen state pihak ketiga, dan memicu proses
          rendering ulang setiap kali data diubah.
        </p>
      </div>
    </div>
  );
}
export default ReactArticle;
