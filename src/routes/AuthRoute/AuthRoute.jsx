
import { loadAccess } from "@/lib/authentication";
import {  Navigate, Outlet } from "react-router";

export function AuthRoute(){
  const hasAcess = loadAccess();

  return hasAcess ? <Outlet/> : <Navigate to="/login" />

}
