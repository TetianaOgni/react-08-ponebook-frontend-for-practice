import { useSelector } from "react-redux";
import {  Navigate} from "react-router-dom";
import PropTypes from "prop-types";
// import { selectAuthenticated } from "redux/authReducer";
import { selectAuthenticated } from "redux/selectors";


const PrivateRoute = ({children, redirectTo = '/'}) => {
    const authenticated = useSelector(selectAuthenticated)
    return authenticated ? children : <Navigate to={redirectTo}/>
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute