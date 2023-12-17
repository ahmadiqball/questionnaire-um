import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function PageLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isCounselorPage = location.pathname.includes('counselor') && location.pathname !== '/counselor/start';
  const isCounselor = sessionStorage.getItem('role') === import.meta.env.VITE_ADMIN_ID;

  useEffect(() => {
    if (isCounselorPage && !isCounselor) {
      navigate('/');
    }
  })

  if (isCounselorPage && !isCounselor) {
    return null;
  }

  return (
    <>
      <Outlet />
    </>
  )
}