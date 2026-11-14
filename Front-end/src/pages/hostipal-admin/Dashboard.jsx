import {Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import AddTest from "./AddTest";



const Dashboard = () => {
    return  <div  className="min-h-screen flex bg-slate-50 pr-4">

    
      <SideBar/>
     <main className="flex-1 min-w-0 p-3 sm:p-5 lg:p-7 xl:p-8">
                <Outlet/>
            </main>
      
    </div>

    
};

export default Dashboard;
