import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import { useEffect, useRef, useState } from "react";
import { InputText } from "../components/input";
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase";

const dummyData: any[] = []

for (let i=0;i<100;i++) {
  dummyData.push(  { school: 'Table cell', class: 'Table cell', date: 'Table cell' })
}

export function PageSessionList() {
  const navigate = useNavigate();
  const [resultRow, setResultRow] = useState(5);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [fetchedData, setFetchedData] = useState<any[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const rowRef = useRef<HTMLInputElement>(null);
  const filteredData = fetchedData.filter((item) => item.school.includes(search) || item.class.includes(search));
  const pages = Math.ceil(filteredData.length / resultRow);
  const pagesResult = []
  for (let i=0;i<pages;i++) {
    pagesResult.push(filteredData.slice(resultRow*i, resultRow*(i+1)))
  };
  
  const logoutHandler = () => {
    sessionStorage.removeItem('role');
    navigate('/');
  };

  const searchHandler = () => {
    const rowIp = rowRef.current?.value;
    const searchIp = searchRef.current?.value;

    if (rowIp && parseInt(rowIp) > 0) {
      setResultRow(parseInt(rowIp));
    } else {
      setResultRow(5);
    }

    if (searchIp && searchIp.trim().length > 0) {
      setSearch(searchIp);
    } else {
      setSearch('');
    }
  };

  const deleteSessionHandler = async (docId: string) => {
    try {
      await deleteDoc(doc(firestore, "session", docId));
      setFetchedData(fetchedData.filter((item) => item.id !== docId));
    } catch (err) {
      console.error(err);
    }
  };

  const downloadSessionData = async (sessionId: string) => {
    try {
      const res = await getDocs(query(collection(firestore, 'assessment'), where('sessionId', '==', sessionId)));
      const resList: any[] = [];
      res.forEach((item) => resList.push(item));
      console.log("🚀 ~ file: page-session-list.tsx:64 ~ downloadSessionData ~ resList:", resList)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await getDocs(collection(firestore, 'session'));
        const sessions: any[] = [];
        res.forEach((item) => { sessions.push({ ...item.data(), id: item.id } ) });
        setFetchedData(sessions);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSession();
  }, [])

  return(
    <main>
      <div className="w-full flex justify-between items-center bg-purple py-5 px-5 lg:px-20">
        <h1 className="text-white text-2xl sm:text-4xl font-bold">Load Session</h1>
        <Button className="bg-red w-[150px]" onClick={logoutHandler} >Logout</Button>
      </div>

      <div className="mx-5 lg:mx-[100px] my-10 lg:my-[85px] bg-[#F6F5FD] rounded-lg">
        <div className="p-4 flex flex-col sm:flex-row gap-5">
          <InputText placeholder='Search' className='w-full sm:w-[238px]' ref={searchRef}/>
          <InputText placeholder='Result row per page' className='w-full sm:w-[238px]' type='number' ref={rowRef} defaultValue={resultRow} />
          <Button className="h-[38px] w-full sm:w-[100px]" onClick={searchHandler}>Search</Button>
        </div>

        <div className="w-full overflow-x-scroll">
          <div className="min-w-[560px] grid grid-cols-4 text-lg font-bold text-white bg-purple-light items-center">
            <span className="py-[14px] px-4 min-w-[140px]">Universitas</span>
            <span className="py-[14px] px-4 min-w-[140px]">Jurusan</span>
            <span className="py-[14px] px-4 min-w-[140px]">Tanggal Sesi</span>
            <span className="py-[14px] px-4 min-w-[140px]"></span>
          </div>

          <div className="divide-y divide-[#E0E0E0] text-[#404040]">
            {pagesResult[page]?.map((data, index) => (
              <div className="min-w-[560px] grid grid-cols-4 items-center" key={index}>
                <span className="py-[14px] px-4 min-w-[140px]">{data.school}</span>
                <span className="py-[14px] px-4 min-w-[140px]">{data.class}</span>
                <span className="py-[14px] px-4 min-w-[140px]">{data.createdAt.toDate().toLocaleDateString()}</span>
                <span className="flex justify-end gap-10 py-[14px] px-4 min-w-[140px]">
                  <img src="/assets/download.svg" className="cursor-pointer" onClick={() => downloadSessionData(data.sessionId)}/>
                  <img src="/assets/delete.svg" className="cursor-pointer" onClick={() => deleteSessionHandler(data.id)}/>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {pagesResult.length === 0 ? <div className="py-6 text-center">Data tidak ditemukan</div> : null}
        
          <div className="flex gap-6 justify-end pt-10 pb-4 pr-4 items-center">
            <span>{`Pages : ${page+1} / ${pagesResult.length}`}</span>
            <button onClick={() => setPage(page-1)} disabled={page === 0}>
              <img src="/assets/prev.svg" />
            </button>
            <button onClick={() => setPage(page+1)} disabled={page === pagesResult.length - 1}>
              <img src="/assets/next.svg" className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}