import { forwardRef } from "react";

const scoring = [
  { skor: '75.01-100%', class: 'Tinggi', desc: 'Individu memiliki kecenderungan terhadap (1) cara individu menilai dirinya sendiri ke arah negatif; (2) reaksi berlebihan akan suatu kondisi; (3) pengelolaan emosi yang buruk akan suatu kejadian buruk; (4) tekanan yang timbul dari lingkungan sekitar.' },
  { skor: '50.01-75%', class: 'Cukup', desc: 'Individu cukup memiliki kecenderungan terhadap (1) cara individu menilai dirinya sendiri ke arah negatif; (2) reaksi berlebihan akan suatu kondisi; (3) pengelolaan emosi yang buruk akan suatu kejadian buruk; (4) tekanan yang timbul dari lingkungan sekitar. ' },
  { skor: '0-50%', class: 'Rendah', desc: 'Individu kurang memiliki kecenderungan terhadap (1) cara individu menilai dirinya sendiri ke arah negatif; (2) reaksi berlebihan akan suatu kondisi; (3) pengelolaan emosi yang buruk akan suatu kejadian buruk; (4) tekanan yang timbul dari lingkungan sekitar. ' },
];

const points = [
  'Pemahaman yang tinggi mengenai kendali dirinya serta aktivitas seksual tidak sehat yang perlu dihindari.',
  'Pemahaman yang tinggi mengenai nilai dan Batasan hubungan di Masyarakat serta cara menjalin hubungan yang sehat.',
  'Pemahaman yang tinggi mengenai informasi & keselamatan diri dalam konteks seksualitas yang sehat.'
]

const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktover', 'November', 'Desember']

export const ResultPDF = forwardRef<HTMLDivElement, any>(({data}, ref) => {
  const date = new Date();
  const formDate = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`

  return(
    <div className="bg-white w-[890px] h-[1255px] font-garamond pt-12 px-[100px]" ref={ref}>
      <div className="text-center border-b-[3px] border-black relative mx-auto pb-2">
        <p className="font-garamond">KEMENTERIAN PENDIDIKAN, KEBUDAYAAN, RISET, DAN TEKNOLOGI </p>
        <p>UNIVERSITAS NEGERI MALANG (UM)</p>
        <p>FAKULTAS ILMU PENDIDIKAN</p>
        <p>DEPARTEMEN BIMBINGAN DAN KONSELING</p>
        <p>Jalan Semarang 5 Malang, 65415</p>
        <p>Laman: www.um.ac.id</p>

        <img src="/assets/android-chrome-192x192.png" className="absolute w-[120px] h-[120px] top-4 -left-14"/>
      </div>

      <div className="bg-black text-white w-fit px-2 mt-4 font-bold ml-auto pb-4">
        RAHASIA
      </div>
      
      <h1 className="text-center font-bold pt-3">LAPORAN HASIL INVENTORI<br />TINGKAT <span className="italic">SELF-BLAME</span> PADA MAHASISWA MALANG</h1>

      <div className="grid grid-cols-2 pt-2">
        <div className="flex">
          <span className="min-w-[130px] inline-block">Nama</span>
          <span className="pr-2">:</span>
          <span className="capitalize">{data.name}</span>
        </div>
        <div>
          <span className="w-[130px] inline-block">Jenis Kelamin</span>
          <span className="pr-2">:</span>
          <span>{data.gender}</span>
        </div>
        <div>
          <span className="w-[130px] inline-block">Usia</span>
          <span className="pr-2">:</span>
          <span>{data.age}</span>
        </div>
        <div className="flex">
          <span className="min-w-[130px] inline-block">Asal Universitas</span>
          <span className="pr-2">:</span>
          <span>{data.school}</span>
        </div>
      </div>

      <h1 className="text-center font-bold pt-4">HASIL ANALISIS</h1>

      <p className="pt-3">Berdasarkan pengisian inventori “Tingkat Self-Blame pada Mahasiswa Malang” <span className="font-bold capitalize">{data.name}</span> memiliki tingkat self-blame atau kecenderungan menyalahkan diri sendiri sebesar <span className="font-bold">{data.score} %</span> dan terklasifikasi <span className="font-bold">{data.result}</span>.</p>

      <div className="border border-black divide-y divide-black mt-4 leading-6">
        <div className="w-full divide-x divide-black font-bold">
          <span className="w-[25%] inline-block text-center pb-2">Interval Presentase (%)</span>
          <span className="w-[15%] inline-block text-center pb-2">Klasifikasi</span>
          <span className="w-[60%] inline-block text-center pb-2">Interpetasi</span>
        </div>
        
        {scoring.map((item) => (
          <div className="w-full divide-x divide-black flex">
            <span className="w-[25%] inline-block text-center grow">{item.skor}</span>
            <span className="w-[15%] inline-block text-center grow">{item.class}</span>
            <span className="w-[60%] inline-block px-2 pb-3 text-justify">{item.desc}</span>
          </div>
        ))}
      </div>

      <p className="pt-6 text-justify">
      Rekomendasi: <br />
      Hasil interpretasi atas pengisian inventori “Tingkat <span className="italic">Self-Blame</span> pada Mahasiswa Malang” yang 
      telah Anda lakukan bukanlah sesuatu yang mutlak. {data.name} memiliki tingkat <span className="italic">self-blame</span> {data.result}, perlu dilakukan tindakan yang mendukung agar kecenderungan 
      <span className="italic">self-blame</span> dapat diminimumkan, salah satunya dengan mengikuti konseling individu. 
      </p>

      <div className="flex pt-10 justify-end text-right">
        <div>
          <p>Malang, {formDate} </p>
          <p>Konselor</p>

          <p className="pt-12">Auliya Nazalia Rafa Rina</p>
        </div>
      </div>
    </div>
  )
});