import foto from "./../assets/foto.webp";

function About() {
  return (
    <div className="outer-content col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh]">
      <div className="content bg-white rounded-xl p-10 shadow-lg grid grid-cols-12 lg:min-h-[93vh] min-h-[95vh] lg:ml-6 m-4 lg:my-6 lg:mr-6">
        <div className="col-span-12 md:col-span-6 md:my-auto mx-6 pr-10 mt-12">
          <h2 className="text-[#1EBE75] sm:text-3xl text-2xl font-semibold">
            Halo, Saya
          </h2>
          <h1 className="text-[#4E596D] sm:text-5xl text-4xl font-semibold">
            Muhammad Fattachul Aziz
          </h1>
          <p className="text-[#4E596D] my-5 font-normal">
            Saya mahasiswa tenknik informatika di PENS. Saya berasal dari
            Surabaya dan saya selalu tertarik dengan teknologi dan pemecahan
            masalah. Salah satu tujuan saya adalah bekerja sebagai insinyur
            perangkat lunak di perusahaan teknologi dan menggunakan keahlian
            saya untuk berkreasi solusi inovatif.
          </p>
        </div>
        <img
          src={foto}
          alt="foto"
          className="col-span-12 md:col-span-6 lg:px-10 p-4 pt-7 md:my-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
export default About;
