function Schedule() {
  return (
    <div className="outer-content sm:pl-0 col-span-6 sm:col-span-5 md:col-span-7 lg:col-span-9 overflow-y-auto h-[100vh] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg:ml-6 ml-4">
      <div className="bg-white rounded-xl shadow-lg lg:mr-6 lg:mt-6 mr-4 mt-4 h-96">
        <div className="hari bg-[#1EBE75] rounded-t-xl p-4">
          <h2 className="text-center text-white text-3xl font-semibold">
            Senin
          </h2>
        </div>
        <div className="pelajaran flex-col text-center text-xl font-medium text-[#67748E]">
          <p className="mt-16">Agama</p>
          <p className="mt-7">Pancasila</p>
          <p className="mt-7">Praktikum Konsep Pemrograman</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg lg:mr-6 lg:mt-6 mr-4 mt-4 h-96">
        <div className="hari bg-[#1EBE75] rounded-t-xl p-4">
          <h2 className="text-center text-white text-3xl font-semibold">
            Selasa
          </h2>
        </div>
        <div className="pelajaran flex-col text-center text-xl font-medium text-[#67748E]">
          <p className="mt-24">Konsep Pemrograman</p>
          <p className="mt-7">Matematika 1</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg lg:mr-6 lg:mt-6 mr-4 mt-4 h-96">
        <div className="hari bg-[#1EBE75] rounded-t-xl p-4">
          <h2 className="text-center text-white text-3xl font-semibold">
            Rabu
          </h2>
        </div>
        <div className="pelajaran flex-col text-center text-xl font-medium text-[#67748E]">
          <p className="mt-24">Dasar Sistem Komputer</p>
          <p className="mt-7">Workshop Design Web</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg lg:mr-6 lg:mt-6 mr-4 mt-4 h-96">
        <div className="hari bg-[#1EBE75] rounded-t-xl p-4">
          <h2 className="text-center text-white text-3xl font-semibold">
            Kamis
          </h2>
        </div>
        <div className="pelajaran flex-col text-center text-xl font-medium text-[#67748E]">
          <p className="mt-24">Praktikum Konsep Pemrograman</p>
          <p className="mt-7">Keterampilan non Teknis</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-lg lg:mr-6 lg:mt-6 mr-4 mt-4 h-96 lg:mb-6 mb-4">
        <div className="hari bg-[#1EBE75] rounded-t-xl p-4">
          <h2 className="text-center text-white text-3xl font-semibold">
            Jumat
          </h2>
        </div>
        <div className="pelajaran flex-col text-center text-xl font-medium text-[#67748E]">
          <p className="mt-24">Konsep Teknologi Informasi</p>
          <p className="mt-7">Logika dan Algoritma</p>
        </div>
      </div>
    </div>
  );
}
export default Schedule;
