
import { Navigate} from "react-router-dom";

export default function ProtectedRoute ({children}) {

    const token = localStorage.getItem('token');
    console.log(token);
    if(token && token !== undefined){
        return children

    }

    return <Navigate to="/signin" replace />;
}