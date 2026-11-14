import { useAuth } from "./AuthContext"
import { Navigate } from "react-router-dom";

const AdminProtector=({children})=>{
         const {User}=useAuth();
         if(!User){
       return <Navigate to="/login" replace/>
         }
         if(User&&User.AccountType!=="admin"){
          return <Navigate to="backPage" replace/>
         }
         return children;
         
}
export default AdminProtector;