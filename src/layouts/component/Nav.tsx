import axios from "axios";
import {useState, useEffect} from 'react'
import {
    AiOutlineCloudServer as Logo,
    AiOutlinePlusSquare,
} from "react-icons/ai";
import {useSelector} from 'react-redux'
import {  FaEllipsisH } from "react-icons/fa";
import { RootState } from "../../redux/store/store";


type NAV_PROPS = {
    children: React.ReactNode
}

const Nav = ({ children }: NAV_PROPS) => {

    const { user } = useSelector((state:RootState)=> state.auth)

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

                  <div className='profile-select'>
                      <FaEllipsisH />
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