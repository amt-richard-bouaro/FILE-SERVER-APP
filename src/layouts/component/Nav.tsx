
import {useNavigate} from 'react-router-dom'
import {
    AiOutlineCloudServer as Logo,
} from "react-icons/ai";
import {useSelector, useDispatch} from 'react-redux'
import { FaEllipsisH, FaPowerOff } from "react-icons/fa";
import { RootState } from "../../redux/store/store";
import { useLogoutMutation } from "../../redux/slices/usersApiSlice";
import {clearUser} from '../../redux/slices/authSlice'

type NAV_PROPS = {
    children: React.ReactNode
}

const Nav = ({ children }: NAV_PROPS) => {


    const navigate = useNavigate();
    const [logout] = useLogoutMutation()
    const dispatch = useDispatch()

    const { user } = useSelector((state: RootState) => state.auth);


    const handleLogout = async () => {
        try {

        const response = await logout({}).unwrap();

            if (response.code === 'LOGGED_OUT') {
                dispatch(clearUser());
                navigate('/');
            }

        } catch (error) {
            alert('Logout Error')
        }
    }

    return (

      <nav className='sidebar-container'>
          <div className='nav-logo'>
              <Logo size={40} />
          </div>
          {children}
          

          <div className='nav-footer'>
              <div className='profile-wrapper'>
                  {/* <div className='dropdown-options'>
                            
                             <ul>
                            <li className='options'>option 1</li>
                            <li className='options'>option 2</li>
                                <li className='options'>option 3</li>
                            </ul> 
                        </div> */}

                    <div className='profile-select' onClick={handleLogout} >
                        <FaPowerOff />
                  </div>
                  
                  <div className='profile-img'>
                      <img src={`https://ui-avatars.com/api/?bold=true&${user?.surname}+${user?.other_names}`} alt="" className="" />
                  </div>
              </div>
          </div>
      </nav>
  )
}

export default Nav