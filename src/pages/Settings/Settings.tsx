import { AiOutlineTable } from "react-icons/ai";
import { PiListFill, PiSquaresFourBold, PiFolderSimpleBold, PiCaretDownBold } from "react-icons/pi";
import Content, { Body } from '../../layouts/component/Content';

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CHANGE_PASSWORD_DATA } from "./types";

import Header from '../../layouts/component/Header';
import { FieldGroup } from '../../compnents/form-input';
import Button from '../../compnents/button';

const Settings = () => {

  const { register, handleSubmit, formState:{errors}} = useForm<CHANGE_PASSWORD_DATA>({
    resolver: zodResolver(CHANGE_PASSWORD_DATA)
  })
  
  const handleChangePassword: SubmitHandler<CHANGE_PASSWORD_DATA> = (data) => {
    console.log(data);
    
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

        <form onSubmit={handleSubmit(handleChangePassword)} className="change-password-form-wrapper" id='changePassForm'>
          
            <FieldGroup label="Current Password" id="curPass">
            <input
              id='curPass'
              type="password"
              className='app-input field-input' {...register('currentPassword')} />
            {errors.currentPassword &&
              <span className='field-validation'>
                {errors.currentPassword?.message}
              </span>}
          </FieldGroup>
          <FieldGroup label="New Password" id="newPass">
            <input
              id='newPass'
              type="password"
              className='app-input field-input'
              {...register('newPassword')} />
            {errors.newPassword &&
              <span className='field-validation'>
                {errors.newPassword?.message}
              </span>}
          </FieldGroup>
          <FieldGroup label="Confirm Password" id="confirmPass">
            <input
              id='confirmPass'
              type="password"
              className='app-input field-input'
              {...register('confirmPassword')} />
            {errors.confirmPassword &&
              <span className='field-validation'>
                {errors.confirmPassword?.message}
              </span>}
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

        <div className="section-divider"></div>

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