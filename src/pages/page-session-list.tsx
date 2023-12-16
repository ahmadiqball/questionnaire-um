import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";

export function PageSessionList() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate('/');
  };

  return(
    <main>
      <div className="w-full flex justify-between items-center bg-purple py-5 px-20">
        <h1 className="text-white text-4xl font-bold">Load Session</h1>
        <Button className="bg-red" onClick={logoutHandler}>Logout</Button>
      </div>

      <div>

      </div>
    </main>
  )
}