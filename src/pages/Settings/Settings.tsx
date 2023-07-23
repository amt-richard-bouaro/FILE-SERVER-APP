import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../redux/slices/authSlice';
import { useLogoutMutation } from '../../redux/slices/usersApiSlice';

import { AiOutlineCloudServer as Logo, AiOutlinePlusSquare, AiOutlineAppstore, AiOutlineTable } from "react-icons/ai";
import { GoHome, GoFileDirectory, GoClock, GoGear, GoSearch, GoStar } from "react-icons/go";
import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold, PiDotsThreeVerticalBold } from "react-icons/pi";
import { BsFillFileEarmarkPdfFill, BsFillFileEarmarkWordFill } from "react-icons/bs";

import Content, { Body } from '../../layouts/component/Content';

import Header from '../../layouts/component/Header';
import { FieldGroup } from '../../compnents/form-input';
import Button from '../../compnents/button';

const Settings = () => {
  return (
    <Content>

      <Header />
      <Body>


        <div className="breadcrumb">
          <div className="breadcrumb-left-items">
            <div className="breadcrumb-left-item addon">
              <PiFolderSimpleBold /><PiCaretDownBold />
            </div>
            <span>Settings</span>

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

        <form className="change-password-form-wrapper" id='changePassForm'>
          
            <FieldGroup label="Current Password" id="curPass">
            <input
              id='curPass'
              type="password"
              className='app-input field-input' />
          </FieldGroup>
          <FieldGroup label="New Password" id="newPass">
            <input
              id='newPass'
              type="password"
              className='app-input field-input' />
          </FieldGroup>
          <FieldGroup label="Confirm Password" id="confirmPass">
            <input
              id='confirmPass'
              type="password"
              className='app-input field-input' />
          </FieldGroup>
           
          <div className="change-password-form-footer">
            <Button
              className='btn btn-primary change-password-btn'
              text='Update Password'
              id='change_pass_submit'
              type="submit"
              form="changePassForm"
            />
          </div>
            
         
        </form>

        <div className="breadcrumb">
          <div className="breadcrumb-left-items">
            <div className="breadcrumb-left-item addon">
              <PiFolderSimpleBold /><PiCaretDownBold />
            </div>
            <span>Settings &gt; new feature </span>

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

export default Settings