import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { InputRadio, InputText } from "../components/input";

export function PageStartAssessment() {
  const navigate = useNavigate();

  const startSessionHandler = () => {
    navigate('/assessment/123456');
  };

  return(
    <main className="w-full min-h-screen bg-[url(/assets/background-dark.svg)] bg-center bg-cover bg-no-repeat">    
      <div className="py-10 min-h-screen flex justify-center items-center bg-[#0A0A0A] bg-opacity-80">
        <div className="rounded-lg border border-purple bg-[#F6F5FD] w-[90%] sm:w-auto py-6 px-8">
          <h2 className="text-black text-4xl font-bold">Mulai Asesmen</h2>
          <p className="text-[#404040] text-base mt-6 mb-10 max-w-[367px]">Masukkan biodata kamu dengan lengkap untuk mengakses asesmen</p>
          
          <form>
            <div className="flex gap-2">
              <InputText label="Nama" placeholder="Ex. JennieKim" className="w-full"/>
              <InputText label="Usia" placeholder="Ex. 13" className="w-[90px]"/>
            </div>

            <InputRadio options={['Laki-laki', 'Perempuan']} label="Jenis kelamin" className="mt-[14px]"/>
            <InputText label="Asal Universitas" placeholder="Ex. Universitas Asal Kamu"  className="mt-[14px]"/>
            <InputText label="Token" placeholder="Ex. 123456" className="mt-[14px]"/>
          </form>

          <Button className="mt-10 w-full sm:w-full" onClick={startSessionHandler}>Lanjut</Button>
        </div>
      </div>
    </main>
  )
}