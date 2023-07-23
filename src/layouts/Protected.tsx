import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {RootState} from '../redux/store/store'

type USER_ROLES = {
    restrictedTo: string[]
}
const Protected = (props:USER_ROLES) => {

    const { user } = useSelector((state: RootState) => state.auth);
    if (user) {

        if (props.restrictedTo.includes(user.role)) {
                if(user.must_change_password){
                     return  <Navigate to='/app/change/password' replace />; 
            }
            
             return <Outlet />;
        }

      return  <Navigate to='*' replace />;
    } 

    return   <Navigate to='/' replace />;


}

export default Protected;