import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

export function PageAddSession() {
  const navigate = useNavigate();

  const addSessionHandler = () => {
    navigate('/counselor/session/12345')
  };

  return(
    <main className="w-full min-h-screen bg-[url(/assets/background-dark.svg)]  bg-center bg-cover bg-no-repeat">
      <div className="w-full flex justify-between items-center bg-purple py-5 px-10 md:px-20">
        <h1 className="text-white text-2xl sm:text-4xl font-bold">Add Session</h1>
        <Button light onClick={() => navigate('/counselor/session')} className="w-36">Load Session</Button>
      </div>
    
      <div className="py-10 min-h-[calc(100vh-92px)] flex justify-center items-center">
        <div className="rounded-lg border border-purple bg-[#F6F5FD] w-[90%] sm:w-auto py-6 px-8">
          <h2 className="text-black text-4xl font-bold">Buat Asesmen</h2>
          <p className="text-[#404040] text-base mt-6 mb-10">Lengkapi data berikut untuk membuat asesmen</p>

          <div>
            <label>Nama Universitas</label>
            <input 
              type="text" 
              className="w-full outline-none border border-[#C2C2C2] rounded-md px-3 py-1.5 placeholder:text-[#757575] placeholder:text-base"
              placeholder="Ex. Sekolah yang dituju"
            />
          </div>

          <div className="mt-2">
            <label>Jurusan</label>
            <input 
              type="text" 
              className="w-full outline-none border border-[#C2C2C2] rounded-md px-3 py-1.5 placeholder:text-[#757575] placeholder:text-base"
              placeholder="Ex. 13"
            />
          </div>

          <Button className="mt-10 w-full sm:w-full" onClick={addSessionHandler}>Start</Button>
        </div>
      </div>
    </main>
  )
}