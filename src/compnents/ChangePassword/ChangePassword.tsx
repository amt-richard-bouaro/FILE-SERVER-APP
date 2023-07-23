import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FieldGroup, Input } from "../../compnents/form-input";
import Button from "../../compnents/button";
import Loading from "../../compnents/Loading";


import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
// import { FetchBaseQueryError, USER_CREDENTIALS } from "./types";

import { z } from 'zod'

const USER_CREDENTIALS = z.object({
    currentPassword: z.string().nonempty('Email address is required.'),
    password: z.string().nonempty('Email address is required.'),
    confirmPassword: z.string().nonempty('Email address is required.')
})

type USER_CREDENTIALS = z.infer<typeof USER_CREDENTIALS>


const ChangePassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<USER_CREDENTIALS>({
        resolver: zodResolver(USER_CREDENTIALS)
    });

    const handleLogin = () => {
        
    }

  return (
      <div className='change-password-container-overlay'>
          
          <div className="change-password-container">
              <form onSubmit={handleSubmit(handleLogin)} className='form-container' id="ChangePassword">
                  <FieldGroup label='Current Password' id='currentPassword'>
                      <input className='field-input '
                          {...register('currentPassword')}
                          id='currentPassword'
                          type='password'
                          placeholder='Enter reset password'
                      />
                      {/* {errors.email &&
                          <span className='field-validation'>
                              {errors.email?.message}
                          </span>} */}
                  </FieldGroup>
                  <FieldGroup label='Password' id='pass'>
                      <input className='field-input '
                          {...register('password')}
                          id='pass'
                          type='password'
                          placeholder='Enter your new password'
                      />
                      {/* {errors.password &&
                          <span className='field-validation'>
                              {errors.password?.message}
                          </span>} */}
                  </FieldGroup>
                  <FieldGroup label='Confirm Password' id='confirmPass'>
                      <input className='field-input '
                          {...register('confirmPassword')}
                          id='confirmPass'
                          type='password'
                          placeholder='Re-enter new password'
                      />
                      {/* {errors.password &&
                          <span className='field-validation'>
                              {errors.password?.message}
                          </span>} */}
                  </FieldGroup>
                  <Button
                      className='btn btn-primary'
                      text='Change Password'
                      id='login_submit'
                      type="submit"
                      form="loginForm"
                  />
              </form>
         </div>


      </div>
  )
}

export default ChangePassword