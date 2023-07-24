import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../redux/slices/authSlice';
import { useLogoutMutation } from '../../redux/slices/usersApiSlice';

import {AiOutlineTable} from "react-icons/ai";

import { PiListFill,PiSquaresFourBold,PiFolderSimpleBold,PiCaretDownBold } from "react-icons/pi";


import Content, { Body } from '../../layouts/component/Content';

import Header from '../../layouts/component/Header';
import FoldersGrid from '../../compnents/FoldersGrid';



const Dasboard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading, isSuccess }] = useLogoutMutation();

  const handleLogout = async () => {

    try {

      await logout({}).unwrap();

      dispatch(clearUser());

      navigate('/')

    } catch (error) {
      console.log(error);

    }


  }

  return (
    <Content>

      <Header />
      <Body>


        <div className="breadcrumb">
          <div className="breadcrumb-left-items">
            <div className="breadcrumb-left-item addon">
              <PiFolderSimpleBold /><PiCaretDownBold />
            </div>
            <span>Dashboard</span>

          </div>

          <div className="breadcrumb-right-items">
            <div className="breadcrumb-right-item">

              <PiListFill />
            </div>
            <div className="breadcrumb-right-item">

              <PiSquaresFourBold />
            </div>
            <div className="breadcrumb-right-item">

              <AiOutlineTable />
            </div>


          </div>
        </div>
         
        <FoldersGrid folders={[{}]} />
        
        <div className="section-divider"></div>
        <div className="breadcrumb">
          <div className="breadcrumb-left-items">
            <div className="breadcrumb-left-item addon">
              <PiFolderSimpleBold /><PiCaretDownBold />
            </div>
            <span> Dashboard  &gt; Performing Files</span>

          </div>

          <div className="breadcrumb-right-items">
            <div className="breadcrumb-right-item">

              <PiListFill />
            </div>
            <div className="breadcrumb-right-item">

              <PiSquaresFourBold />
            </div>
            <div className="breadcrumb-right-item">

              <AiOutlineTable />
            </div>


          </div>
        </div>


        
      </Body>
    </Content>
  )
}

export default Dasboard