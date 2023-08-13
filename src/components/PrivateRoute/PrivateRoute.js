import { useSelector } from "react-redux/es/hooks/useSelector";
import {  Navigate} from "react-router-dom";
import { selectAuthenticated } from "redux/authReducer";


const PrivateRoute = ({children, redirectTo = '/'}) => {
    const authenticated = useSelector(selectAuthenticated)
    return authenticated ? children : <Navigate to={redirectTo}/>
}
export default PrivateRoute