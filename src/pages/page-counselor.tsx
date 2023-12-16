import { useState } from "react";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";

export function PageCounselor() {
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  return(
    <main className="w-full min-h-screen py-10 bg-[url(/assets/background-mix.svg)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
      <div className="border-2 border-purple rounded-lg bg-[#F6F5FD99] backdrop-blur-lg px-10 w-[80%] lg:w-auto lg:px-[126px] py-[185px]">
        <h1 className="text-black text-4xl sm:text-[64px] font-bold text-center">Halo Konselor!</h1>
        <div className="flex flex-col sm:flex-row gap-10 mt-10 justify-center">
          <Button className="w-full" onClick={() => navigate('/counselor/add-session')}>Add Session</Button>
          <Button className="w-full" onClick={() => navigate('/counselor/session')}>Load Session</Button>
        </div>
      </div>
    </main>
  )
}