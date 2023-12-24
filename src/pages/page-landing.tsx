import { useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../components/button";

export function PageLanding() {
  const navigate = useNavigate();
  const { playMusic } = useOutletContext<any>();

  const startHandler = () => {
    console.log('bbb')
    playMusic();
    navigate('/guide');
  }

  return(
    <main className="w-full min-h-screen bg-[url(/assets/background-mix.svg)] bg-center bg-cover bg-no-repeat">
      <div className="w-full flex justify-end items-center bg-purple py-5 pr-5 lg:pr-20">
        <Button light onClick={() => navigate('/counselor/start')} className="w-[160px]">Login as Conselor</Button>
      </div>
      <div className="min-h-[calc(100vh-92px)] py-10 bg-[#F6F5FDB2] backdrop-blur-lg text-black text-center flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl sm:text-5xl leading-relaxed lg:leading-none lg:text-[64px] font-bold">
            TINGKAT SELF-BLAME <br /> PADA MAHASISWA MALANG
          </h1>

          <div className="my-8">
            <p>Disusun oleh :</p>
            <p>Auliya Sekar Rini (220111610220)</p>
            <p>Nazalia Febrina Fasya Abidin (220111601463)</p>
            <p>Rafa Almareta Putri Arya (220111608402)</p>
            <p>Rina Indah Purwaningsih (220111604007)</p>
          </div>

          <div className="mb-8">
            <p>Dibimbing oleh :</p>
            <p>Prof. Dr. Hj. Nur Hidayah, M.Pd. (NIP. 195908171983032001)</p>
          </div>

          <div className="mb-8">
            <p>Mentor :</p>
            <p>Aisyiah Aiwani, S.Pd.</p>
          </div>

          <Button onClick={startHandler}>Start</Button>
      </div>
    </main>
  ) 
}