import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

import Dashboard from "./hostipal-admin/Dashboard";

import AdminProtector from "../contex/AdminProtector";
import AddTest from "./hostipal-admin/AddTest";
import ManageTests from "./hostipal-admin/ManageTests";
import AddDoctor from "./hostipal-admin/AddDoctor";
import ManageDoctors from "./hostipal-admin/ManageDoctors";
import HospitalProfile from "./hostipal-admin/HospitalProfile";
import ViewHospitalProfile from "./hostipal-admin/ViewProfile";
import AdminHome from "./hostipal-admin/DashboardAdmin";








const Home=()=>{
  return(
       
      <Routes>
       <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/dashboard" 
      
        element={
           <AdminProtector>
        <Dashboard/>
        </AdminProtector>
      }
      
        

        >  <Route path="" element={<AdminHome />} />

          <Route path="add-test" element={<AddTest />} />
          <Route path="tests" element={<ManageTests />} />
          <Route path="add-doctor" element={<AddDoctor />} />
           <Route path="doctors" element={<ManageDoctors />} />
           <Route path="profile" element={<HospitalProfile />} />
            <Route path="view-profile" element={<ViewHospitalProfile />} />

           



          
          </Route>
         
         

      </Routes>
   
  );
}
export default Home;