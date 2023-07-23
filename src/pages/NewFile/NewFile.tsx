import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../redux/slices/authSlice';
import { useLogoutMutation } from '../../redux/slices/usersApiSlice';

import { AiOutlineTable } from "react-icons/ai";

import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold } from "react-icons/pi";


import Content, { Body } from '../../layouts/component/Content';

import Header from '../../layouts/component/Header';
import { FieldGroup } from '../../compnents/form-input';
import Button from '../../compnents/button';

const NewFile = () => {
  return (
    <Content>

      <Header />
      <Body>


        <div className="breadcrumb">
          <div className="breadcrumb-left-items">
            <div className="breadcrumb-left-item addon">
              <PiFolderSimpleBold /><PiCaretDownBold />
            </div>
            <span>New File</span>

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

        <form className="new-file-form-wrapper">
          <div className="form-file-upload">

          </div>
          <div className="form-title-desc">
            <FieldGroup label="File Title" id="title">
              <input type="text" className='form-title-desc field-input' />
            </FieldGroup>
            <FieldGroup label="Description" id="description">
              <textarea name="" id="" className='field-textarea'></textarea>
            </FieldGroup>
            <Button
              className='btn btn-primary'
              text='Save File'
              id='login_submit'
              type="submit"
              form="loginForm"
            />
          </div>
        </form>

      </Body>
    </Content>
  )
}

export default NewFile